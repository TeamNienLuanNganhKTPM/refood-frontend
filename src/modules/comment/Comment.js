/** @format */

import { Button } from "components/button";
import { Textarea } from "components/textarea";
import React from "react";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { authLogin } from "store/auth/slice";
import { addCommentDetails, getCommentDetails } from "store/food/slice";
import styled from "styled-components";
import Swal from "sweetalert2";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { ErrorMessage } from "components/error";

const CommentStyled = styled.div`
  width: 750px;
  display: flex;
  flex-direction: column;
  gap: 15px;
  .cmt-textarea {
    min-height: 100px;
    border-radius: 4px 4px 0 0;
    resize: vertical;
  }
  @media (min-width: 320px) and (max-width: 767px) {
    .cmt-btn {
      font-size: 14px;
      padding: 10px;
    }
  }
`;

const schema = yup.object({
  content: yup.string().required("Vui lòng nhập bình luận"),
});

const Comment = ({ className = "" }) => {
  const {
    control,
    handleSubmit,
    setValue,
    reset,
    formState: { isValid, errors },
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(schema),
  });
  const { foodDetails } = useSelector((state) => state.food);
  const user = window.localStorage.getItem("user");
  const CustomerId = JSON.parse(user)?.CustomerId;
  const dispatch = useDispatch();

  useEffect(() => {
    setValue("foodid", foodDetails?.FoodId);
    setValue("customerid", CustomerId);
  }, [CustomerId, foodDetails?.FoodId, setValue]);

  const handleSubmitComment = async (values) => {
    if (!isValid) return;
    if (CustomerId) {
      dispatch(addCommentDetails(values));
      dispatch(getCommentDetails({ foodId: foodDetails?.FoodId, page: 8 }));
      reset({});
    } else {
      const { value: phonenumber } = await Swal.fire({
        title: "Số điện thoại",
        input: "text",
        inputPlaceholder: "Nhập số điện thoại",
        inputAttributes: {
          autocapitalize: "off",
          autocorrect: "off",
        },
        confirmButtonText: "Tiếp tục",
        confirmButtonColor: "#2bbef9",
        showCancelButton: true,
      });
      if (phonenumber) {
        const { value: password } = await Swal.fire({
          title: "Mật khẩu",
          input: "password",
          inputPlaceholder: "Nhập mật khẩu",
          inputAttributes: {
            autocapitalize: "off",
            autocorrect: "off",
          },
          confirmButtonText: "Đăng nhập",
          confirmButtonColor: "#2bbef9",
          showCancelButton: true,
        });
        if (phonenumber && password) {
          dispatch(authLogin({ phonenumber: phonenumber, password: password }));
          dispatch(getCommentDetails(foodDetails?.FoodId));
        }
      }
    }
  };
  return (
    <CommentStyled className={className}>
      <div>
        <Textarea
          name="content"
          type="textarea"
          control={control}
          className="cmt-textarea"
          placeholder="Mời bạn để lại bình luận"
        ></Textarea>
        <ErrorMessage message={errors.content?.message}></ErrorMessage>
      </div>
      <div className="flex justify-end">
        <Button
          type="submit"
          className="inline cmt-btn"
          height="40px"
          onClick={handleSubmit(handleSubmitComment)}
        >
          Gửi bình luận
        </Button>
      </div>
    </CommentStyled>
  );
};

export default Comment;
