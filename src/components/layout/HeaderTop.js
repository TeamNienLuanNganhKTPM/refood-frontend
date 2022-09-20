/** @format */

import { useModal } from "components/modal/modal-context";
import Account from "modules/auth/Account";
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const HeaderStyled = styled.div`
  padding-top: 30px;
  .ht-main {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .ht-logo {
    display: flex;
    flex-direction: column;
    img {
      max-width: 164px;
      max-height: 44px;
    }
    span {
      display: inline-block;
      color: ${(props) => props.theme.text};
      font-size: 11px;
      margin-top: 2px;
      opacity: 0.5;
    }
  }
  .ht-search {
    padding: 15px 25px;
    border-radius: 8px;
    width: 100%;
    max-width: 550px;
    display: flex;
    align-items: center;
    position: relative;
    background-color: #f3f4f7;
  }
  .search-input {
    flex: 1;
    padding-right: 45px;
    font-weight: 400;
    color: ${(props) => props.theme.text};
    background-color: #f3f4f7;
  }
  .search-icon {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 25px;
    font-weight: 500;
    color: ${(props) => props.theme.textPrimary};
    cursor: pointer;
  }
  .ht-buttons {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
  }
  .ht-user {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 50px;
    height: 50px;
    border-radius: 100%;
    border: 1px solid ${(props) => props.theme.lineGray};
    background-color: #fff;
    color: ${(props) => props.theme.text};
    cursor: pointer;
  }
  .ht-user:hover {
    color: ${(props) => props.theme.textPrimary};
    border: 1px solid ${(props) => props.theme.line};
    background-color: ${(props) => props.theme.lightBlue};
    transition: all 0.5s ease-out;
  }
  .ht-cart {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    background-color: #fff1ee;
    border-color: #fff1ee;
    border: 1px solid #fff1ee;
    width: 50px;
    height: 50px;
    border-radius: 100%;
    color: ${(props) => props.theme.red};
    cursor: pointer;
  }
  .ht-cart:hover {
    border: 1px solid ${(props) => props.theme.red};
    transition: all 0.5s ease-out;
  }
  .count {
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    top: 0;
    right: 0;
    width: 20px;
    height: 20px;
    background-color: ${(props) => props.theme.red};
    color: #fff;
    font-size: 10px;
    font-weight: 500;
    border-radius: 100%;
  }
`;

const HeaderTop = () => {
  const { handleShowModal } = useModal();
  return (
    <>
      <HeaderStyled>
        <div className="container">
          <div className="ht-main">
            <div className="ht-logo">
              <Link to={"/"}>
                <img src="/refood-logo.png" alt="" />
              </Link>
              <span>Chỉ cần bạn thích - có ngay món ngon</span>
            </div>
            <div className="ht-search">
              <input
                type="text"
                className="search-input"
                placeholder="Tìm món ăn..."
              />
              <span className="search-icon">
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
                    d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                  />
                </svg>
              </span>
            </div>
            <div className="ht-buttons">
              <div className="ht-cart">
                <span className="cart">
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
                      d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                    />
                  </svg>
                </span>
                <span className="count">0</span>
              </div>
              <div className="ht-user" onClick={handleShowModal}>
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
              </div>
            </div>
          </div>
        </div>
      </HeaderStyled>
      <Account></Account>
    </>
  );
};

export default HeaderTop;
