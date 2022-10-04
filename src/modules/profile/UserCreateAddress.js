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
  overflow-y: hidden;
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
  .ca-drop {
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
  .ca-lists {
    height: 250px;
    overflow-y: scroll;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  }
  .ca-option {
    font-size: 16px;
  }

  .ca-lists::-webkit-scrollbar {
    width: 4px;
  }

  /* Track */
  .ca-lists::-webkit-scrollbar-track {
    box-shadow: inset 0 0 5px ${(props) => props.theme.textLight};
    border-radius: 10px;
  }

  /* Handle */
  .ca-lists::-webkit-scrollbar-thumb {
    background: ${(props) => props.theme.blueBold};
  }
`;

const listDistrict = [
  {
    id: "1",
    name: "Ninh Kiều",
  },
  {
    id: "2",
    name: "Bình Thủy",
  },
  {
    id: "3",
    name: "Cờ Đỏ",
  },
  {
    id: "4",
    name: "Phong Điền",
  },
  {
    id: "5",
    name: "Thới Lai",
  },
  {
    id: "6",
    name: "Vĩnh Thạnh",
  },
  {
    id: "7",
    name: "Ô Môn",
  },
  {
    id: "8",
    name: "Thới Nốt",
  },
];

const listWard = [
  {
    id: "1",
    name: "Ninh Kiều",
  },
  {
    id: "2",
    name: "Bình Thủy",
  },
  {
    id: "3",
    name: "Cờ Đỏ",
  },
  {
    id: "4",
    name: "Phong Điền",
  },
  {
    id: "5",
    name: "Thới Lai",
  },
  {
    id: "6",
    name: "Vĩnh Thạnh",
  },
  {
    id: "7",
    name: "Ô Môn",
  },
  {
    id: "8",
    name: "Thới Nốt",
  },
];

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
            kind="secondary"
          ></Input>
          <Input
            type="text"
            name="phonenumber"
            control={control}
            kind="secondary"
          ></Input>
        </div>
        <div className="ca-drop">
          <Dropdown className="ca-dropdown">
            <Dropdown.Select
              placeholder="Quận/Huyện"
              className="ca-select"
            ></Dropdown.Select>

            <Dropdown.List className="ca-lists">
              {listDistrict.length > 0 &&
                listDistrict.map((district) => (
                  <Dropdown.Option key={district.id} className="ca-option">
                    {district.name}
                  </Dropdown.Option>
                ))}
            </Dropdown.List>
          </Dropdown>
          <Dropdown className="ca-dropdown">
            <Dropdown.Select
              placeholder="Phường/Xã"
              className="ca-select"
            ></Dropdown.Select>
            <Dropdown.List className="ca-lists">
              {listWard.length > 0 &&
                listWard.map((ward) => (
                  <Dropdown.Option key={ward.id} className="ca-option">
                    {ward.name}
                  </Dropdown.Option>
                ))}
            </Dropdown.List>
          </Dropdown>
        </div>
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
