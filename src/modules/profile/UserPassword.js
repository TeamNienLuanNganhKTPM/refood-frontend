/** @format */

import { Button } from "components/button";
import { Input } from "components/input";
import { Label } from "components/label";
import React from "react";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { UPDATE_USER_PASS_REQUEST } from "store/users/slice";
import styled from "styled-components";
import Swal from "sweetalert2";
import UserHeading from "./UserHeading";

const UserPasswordStyled = styled.div`
  padding: 0 15px;
`;

const UserPassword = () => {
  const {
    control,
    handleSubmit,
    reset,
    formState: { isSubmitting, isValid },
  } = useForm({
    mode: "onChange",
  });
  const dispatch = useDispatch();
  const handleUpdatePassword = (values) => {
    if (!isValid) return;
    try {
      dispatch(UPDATE_USER_PASS_REQUEST(values));
    } catch (error) {
      console.log(error);
    }
  };

  const { isPass, message, error } = useSelector((state) => state.user);
  useEffect(() => {
    if (isPass) {
      Swal.fire({
        position: "center",
        icon: "success",
        title: message,
        showConfirmButton: false,
        timer: 1500,
      });
      reset({
        oldpassword: "",
        newpassword: "",
        repassword: "",
      });
    }
    if (error) {
      toast.error(message, {
        position: "bottom-right",
      });
      reset({
        oldpassword: "",
        newpassword: "",
        repassword: "",
      });
    }
  }, [isPass, message, error, reset]);

  return (
    <UserPasswordStyled>
      <UserHeading title="Đổi mật khẩu">
        Để bảo mật tài khoản, vui lòng không chia sẻ mật khẩu cho người khác
      </UserHeading>
      <form
        onSubmit={handleSubmit(handleUpdatePassword)}
        autoComplete="off"
        className="user-content"
      >
        <div className="user-item">
          <Label className="user-name" htmlFor="oldpassword">
            Mật khẩu
          </Label>
          <Input
            type="password"
            name="oldpassword"
            control={control}
            className="user-input"
          ></Input>
        </div>
        <div className="user-item">
          <Label className="user-name" htmlFor="newpassword">
            Mật khẩu mới
          </Label>
          <Input
            type="password"
            name="newpassword"
            control={control}
            className="user-input"
          ></Input>
        </div>
        <div className="user-item">
          <Label className="user-name" htmlFor="repassword">
            Nhập lại mật khẩu
          </Label>
          <Input
            type="password"
            name="repassword"
            control={control}
            className="user-input"
          ></Input>
        </div>
        <Link className="flex justify-center text-redPrimary" to={"/#"}>
          Quên mật khẩu?
        </Link>
        <div className="user-btn">
          <Button
            type="submit"
            className="w-[200px]"
            height="44px"
            disabled={isSubmitting}
            isLoading={isSubmitting}
          >
            Đổi mật khẩu
          </Button>
        </div>
      </form>
    </UserPasswordStyled>
  );
};

export default React.memo(UserPassword);
