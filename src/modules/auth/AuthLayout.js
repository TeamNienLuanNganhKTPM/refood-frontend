/** @format */

import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const AuthLayoutStyled = styled.div`
  padding-top: 50px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-bottom: 60px;
  .account-main {
    width: 500px;
    height: 100%;
    border: 1px solid ${(props) => props.theme.grayBorder};
    border-radius: 8px;
    background-color: #fff;
    padding: 25px 60px;
    position: relative;
  }
  @media (min-width: 320px) and (max-width: 767px) {
    .account-main {
      border: none;
    }
  }
`;

const AuthLayout = ({ children }) => {
  return (
    <AuthLayoutStyled>
      <div className="account-main">
        <Link to="/" className="inline-block mb-5 lg:mb-10">
          <img srcSet="/refood-logo.png 2x" alt="admin-logo" />
        </Link>
        {children}
      </div>
    </AuthLayoutStyled>
  );
};

export default AuthLayout;
