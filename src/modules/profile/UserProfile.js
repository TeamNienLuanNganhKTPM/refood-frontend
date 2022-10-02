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

const UserProfileStyled = styled.div`
  padding: 0 15px;
  .profile-heading {
    display: flex;
    flex-direction: column;
    padding-bottom: 10px;
    border-bottom: 1px solid ${(props) => props.theme.lineGray};
  }
  .profile-title {
    color: ${(props) => props.theme.textPrimary};
    font-size: 24px;
    font-weight: 500;
    text-transform: capitalize;
  }
  .profile-desc {
    color: ${(props) => props.theme.text};
    font-size: 14px;
  }
  .profile-content {
    margin-top: 40px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 20px;
  }
  .profile-item {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 30px;
  }
  .profile-name {
    width: 20%;
    text-align: end;
  }
  .profile-input {
    width: 462px;
  }
  .profile-btn {
    padding-top: 15px;
    display: flex;
    justify-content: center;
  }
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
  const { success, isUpdate, customer_info, message } = useSelector(
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

  // Update data user
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
      toast.success(message, {
        position: "bottom-right",
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isUpdate, message]);

  return (
    <UserProfileStyled>
      <div className="profile-heading">
        <h3 className="profile-title">Hồ sơ của tôi</h3>
        <span className="profile-desc">
          Quản lý thông tin hồ sơ để bảo mật tài khoản
        </span>
      </div>
      <form
        onSubmit={handleSubmit(handleUpdateUser)}
        autoComplete="off"
        className="profile-content"
      >
        <div className="profile-item">
          <Label className="profile-name" htmlFor="name">
            Họ và tên
          </Label>
          <Input
            type="text"
            name="name"
            control={control}
            className="profile-input"
          ></Input>
        </div>
        <div className="profile-item">
          <Label className="profile-name" htmlFor="phonenumber">
            Số điện thoại
          </Label>
          <Input
            type="text"
            name="phonenumber"
            control={control}
            className="profile-input"
          ></Input>
        </div>
        <div className="profile-item">
          <Label className="profile-name" htmlFor="email">
            Email
          </Label>
          <Input
            type="text"
            name="email"
            control={control}
            className="profile-input"
            placeholder="Cập nhật email"
          ></Input>
        </div>
        <div className="profile-btn">
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

export default UserProfile;
