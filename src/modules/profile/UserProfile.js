/** @format */

import { Button } from "components/button";
import { Input } from "components/input";
import { Label } from "components/label";
import React from "react";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { GET_USER_REQUEST, UPDATE_USER_REQUEST } from "store/users/slice";
import styled from "styled-components";
import Swal from "sweetalert2";
import UserHeading from "./UserHeading";

const UserProfileStyled = styled.div`
  padding: 0 15px;
`;

const UserProfile = () => {
  const {
    control,
    reset,
    handleSubmit,
    formState: { isValid, isSubmitting },
  } = useForm({
    mode: "onChange",
    defaultValues: {
      name: "",
      email: "",
      phonenumber: "",
    },
  });
  const { success, error, isUpdate, customer_info, message } = useSelector(
    (state) => state.user
  );
  const { CustomerName, CustomerPhone, CustomerEmail } = customer_info;
  const dispatch = useDispatch();

  // Get data user from database
  useEffect(() => {
    async function fetchData() {
      dispatch(GET_USER_REQUEST());
    }
    fetchData();
  }, [dispatch]);

  // Get data user
  useEffect(() => {
    if (success) {
      reset({
        name: CustomerName,
        email: CustomerEmail || "",
        phonenumber: CustomerPhone,
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [reset, success]);

  // Update data user
  const handleUpdateUser = (values) => {
    if (!isValid) return;
    try {
      dispatch(UPDATE_USER_REQUEST(values));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (isUpdate) {
      Swal.fire({
        position: "center",
        icon: "success",
        title: message,
        showConfirmButton: false,
        timer: 2000,
      });
    }
    if (error) {
      toast.error(message, {
        position: "bottom-right",
      });
    }
  }, [isUpdate, message, error]);

  return (
    <UserProfileStyled>
      <UserHeading title="Hồ sơ của tôi">
        Quản lý thông tin hồ sơ để bảo mật tài khoản
      </UserHeading>
      <form
        onSubmit={handleSubmit(handleUpdateUser)}
        autoComplete="off"
        className="user-content"
      >
        <div className="user-item">
          <Label className="user-name" htmlFor="name">
            Họ và tên
          </Label>
          <Input
            type="text"
            name="name"
            control={control}
            className="user-input"
          ></Input>
        </div>
        <div className="user-item">
          <Label className="user-name" htmlFor="phonenumber">
            Số điện thoại
          </Label>
          <Input
            type="text"
            name="phonenumber"
            control={control}
            className="user-input"
          ></Input>
        </div>
        <div className="user-item">
          <Label className="user-name" htmlFor="email">
            Email
          </Label>
          <Input
            type="email"
            name="email"
            control={control}
            className="user-input"
            placeholder="Cập nhật email"
          ></Input>
        </div>
        <div className="user-btn">
          <Button
            type="submit"
            className="w-[200px]"
            height="44px"
            disabled={isSubmitting}
            isLoading={isSubmitting}
          >
            Cập nhật
          </Button>
        </div>
      </form>
    </UserProfileStyled>
  );
};

export default React.memo(UserProfile);
