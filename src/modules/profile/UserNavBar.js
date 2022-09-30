/** @format */

import { Dropdown } from "components/dropdown";
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const UserNavBarStyled = styled.div`
  padding: 15px;
  .unb-info {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding-bottom: 15px;
  }
  .unb-img {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 50px;
    height: 50px;
    border-radius: 100%;
    border: 1px solid ${(props) => props.theme.lineGray};
    background-color: ${(props) => props.theme.lightBlue};
    color: ${(props) => props.theme.text};
    cursor: pointer;
    span {
      font-size: 24px;
      font-weight: 700;
    }
  }
  .unb-heading {
    display: flex;
    flex: 1;
    flex-direction: column;
    justify-content: center;
    padding-left: 15px;
  }
  .unb-name {
    color: ${(props) => props.theme.text};
    font-size: 14px;
    font-weight: 600;
  }
  .unb-edit {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 5px;
    color: ${(props) => props.theme.textGray};
    a {
      display: block;
      font-size: 13px;
      text-transform: capitalize;
      text-align: center;
      padding-top: 3px;
    }
  }
  .unb-content {
    margin-top: 25px;
    display: flex;
    flex-direction: column;
    gap: 16px;
  }
  .unb-select {
    color: ${(props) => props.theme.textPrimary};
    font-size: 14px;
    font-weight: 500;
    padding: 0;
    text-transform: capitalize;
  }
  .unb-select:hover {
    color: ${(props) => props.theme.red};
  }
  .icon-purchase,
  .icon-user {
    padding-right: 10px;
    color: ${(props) => props.theme.blueBold};
  }
  .unb-lists {
    position: inherit;
    transition: all 0.3s linear;
    box-shadow: 0 0 #0000;
  }
  .unb-option {
    padding-left: 34px;
    font-size: 14px;
    text-transform: capitalize;
    color: ${(props) => props.theme.text};
    background-color: transparent;
  }
  .unb-option:first-child {
    color: ${(props) => props.theme.red};
  }
  .unb-option:hover {
    color: ${(props) => props.theme.red};
  }
  .icon-voucher,
  .icon-notify {
    padding-right: 10px;
    color: ${(props) => props.theme.red};
  }
`;

const UserNavbar = () => {
  return (
    <UserNavBarStyled>
      <div className="unb-info">
        <div className="unb-img">
          <Link to={"/user/account/profile"}>
            <span>K</span>
          </Link>
        </div>
        <div className="unb-heading">
          <span className="unb-name">Võ Minh Kha</span>
          <div className="unb-edit">
            <div className="unb-icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-4 h-4"
              >
                <path d="M5.433 13.917l1.262-3.155A4 4 0 017.58 9.42l6.92-6.918a2.121 2.121 0 013 3l-6.92 6.918c-.383.383-.84.685-1.343.886l-3.154 1.262a.5.5 0 01-.65-.65z" />
                <path d="M3.5 5.75c0-.69.56-1.25 1.25-1.25H10A.75.75 0 0010 3H4.75A2.75 2.75 0 002 5.75v9.5A2.75 2.75 0 004.75 18h9.5A2.75 2.75 0 0017 15.25V10a.75.75 0 00-1.5 0v5.25c0 .69-.56 1.25-1.25 1.25h-9.5c-.69 0-1.25-.56-1.25-1.25v-9.5z" />
              </svg>
            </div>
            <Link to={"/user/account/profile"}>Sửa hồ sơ</Link>
          </div>
        </div>
      </div>
      <div className="unb-content">
        <Dropdown>
          <Link to={"/user/account/profile"}>
            <Dropdown.Select
              placeholder="Tài Khoản Của Tôi"
              className="border-none unb-select"
              iconRight="hidden"
            >
              <span className="icon-user">
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
                    d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                  />
                </svg>
              </span>
            </Dropdown.Select>
          </Link>
          <Dropdown.List className="unb-lists" display={true}>
            <Dropdown.Option
              className="unb-option"
              to={"/user/account/profile"}
            >
              Hồ sơ
            </Dropdown.Option>
            <Dropdown.Option
              className="unb-option"
              to={"/user/account/address"}
            >
              Địa chỉ
            </Dropdown.Option>
            <Dropdown.Option
              className="unb-option"
              to={"/user/account/password"}
            >
              Đổi mật khẩu
            </Dropdown.Option>
          </Dropdown.List>
        </Dropdown>
        <div className="unb-purchase">
          <Dropdown>
            <Dropdown.Select
              placeholder="Đơn mua"
              className="border-none unb-select"
              iconRight="hidden"
            >
              <span className="icon-purchase">
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
                    d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 01-2.25 2.25M16.5 7.5V18a2.25 2.25 0 002.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 002.25 2.25h13.5M6 7.5h3v3H6v-3z"
                  />
                </svg>
              </span>
            </Dropdown.Select>
          </Dropdown>
        </div>
        <div className="unb-notify">
          <Dropdown>
            <Dropdown.Select
              placeholder="Thông báo"
              className="border-none unb-select"
              iconRight="hidden"
            >
              <span className="icon-notify">
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
                    d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"
                  />
                </svg>
              </span>
            </Dropdown.Select>
            <Dropdown.List className="unb-lists">
              <Dropdown.Option className="unb-option">
                Cập nhật đơn hàng
              </Dropdown.Option>
              <Dropdown.Option className="unb-option">
                Khuyến mãi
              </Dropdown.Option>
              <Dropdown.Option className="unb-option">
                Cập nhật đánh giá
              </Dropdown.Option>
              <Dropdown.Option className="unb-option">
                Cập nhật vi
              </Dropdown.Option>
            </Dropdown.List>
          </Dropdown>
        </div>
        <div className="unb-voucher">
          <Dropdown>
            <Dropdown.Select
              placeholder="Kho voucher"
              className="border-none unb-select"
              iconRight="hidden"
            >
              <span className="icon-voucher">
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
                    d="M16.5 6v.75m0 3v.75m0 3v.75m0 3V18m-9-5.25h5.25M7.5 15h3M3.375 5.25c-.621 0-1.125.504-1.125 1.125v3.026a2.999 2.999 0 010 5.198v3.026c0 .621.504 1.125 1.125 1.125h17.25c.621 0 1.125-.504 1.125-1.125v-3.026a2.999 2.999 0 010-5.198V6.375c0-.621-.504-1.125-1.125-1.125H3.375z"
                  />
                </svg>
              </span>
            </Dropdown.Select>
          </Dropdown>
        </div>
      </div>
    </UserNavBarStyled>
  );
};

export default UserNavbar;
