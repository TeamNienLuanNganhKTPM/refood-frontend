/** @format */

import { Button } from "components/button";
import { Checkbox } from "components/checkbox";
import { Dropdown } from "components/dropdown";
import { Input } from "components/input";
import { Textarea } from "components/textarea";
import React from "react";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";

const UserCreateAddressStyled = styled.div`
  width: 500px;
  .ca-top {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    border-bottom: 1px solid ${(props) => props.theme.line};
    padding-bottom: 10px;
    margin-bottom: 15px;
  }
  .ca-heading {
    font-size: 20px;
    font-weight: 500;
    color: ${(props) => props.theme.textPrimary};
  }
  .ca-form {
    display: flex;
    flex-direction: column;
    gap: 15px;
  }
  .ca-info {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 10px;
  }
  .ca-dropdown {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 10px;
  }
  .ca-select {
    width: 100%;
    height: 44px;
    border: 1px solid ${(props) => props.theme.line};
  }
`;

const UserCreateAddress = ({ closeModal }) => {
  const { control, reset } = useForm({
    mode: "onChange",
  });

  const user = localStorage.getItem("user");
  const { CustomerName, CustomerPhone } = JSON.parse(user);

  useEffect(() => {
    reset({
      name: CustomerName,
      phonenumber: CustomerPhone,
    });
  }, [CustomerName, CustomerPhone, reset]);
  return (
    <UserCreateAddressStyled>
      <div className="ca-top">
        <h3 className="ca-heading">Địa chỉ mới</h3>
        <div className="cursor-pointer text-text" onClick={closeModal}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </div>
      </div>
      <form className="ca-form">
        <div className="ca-info">
          <Input
            type="text"
            name="name"
            control={control}
            bgInput="#fff"
            className="border border-line"
          ></Input>
          <Input
            type="text"
            name="phonenumber"
            control={control}
            bgInput="#fff"
            className="border border-line"
          >
            {" "}
          </Input>
        </div>
        <Dropdown className="ca-dropdown">
          <Dropdown.Select
            placeholder="Quận/Huyện"
            className="ca-select"
          ></Dropdown.Select>
          <Dropdown.Select
            placeholder="Phường/Xã"
            className="ca-select"
          ></Dropdown.Select>
        </Dropdown>
        <Textarea
          type="text"
          name="apartmentnumber"
          control={control}
          height="100px"
          placeholder="Địa chỉ cụ thể"
        ></Textarea>
        <Checkbox control={control} name="default">
          Đặt làm mặc định
        </Checkbox>
        <div className="flex justify-end">
          <Button
            type="submit"
            kind="primary"
            height="44px"
            className="w-full max-w-[150px]"
          >
            Hoàn thành
          </Button>
        </div>
      </form>
    </UserCreateAddressStyled>
  );
};

export default UserCreateAddress;
