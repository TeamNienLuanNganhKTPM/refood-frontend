/** @format */

import UserSideBar from "modules/profile/UserSideBar";
import styled from "styled-components";
import SectionRight from "components/layout/SectionRight";
import SectionLeft from "components/layout/SectionLeft";
import React from "react";
import Layout from "components/layout/Layout";
import { Outlet } from "react-router-dom";

const UserPageStyled = styled.div`
  padding: 40px 0;
  background-color: ${(props) => props.theme.grayDark};
  .user-main {
    display: flex;
    margin: 0 auto;
    max-width: 1200px;
  }

  .user-right {
    border: 1px solid ${(props) => props.theme.line};
    border-radius: 8px;
    box-shadow: 0 1px 2px 0 rgb(0 0 0 / 13%);
    background: #fff;
  }
  .user-content {
    margin-top: 40px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 20px;
  }
  .user-item {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 30px;
  }
  .user-name {
    width: 20%;
    text-align: end;
  }
  .user-input {
    width: 462px;
  }
  .user-btn {
    padding-top: 15px;
    display: flex;
    justify-content: center;
  }
  @media (min-width: 320px) and (max-width: 767px) {
    .user-right {
      border: none;
      border-radius: 0px;
    }
    .user-item {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      gap: 10px;
    }
    .user-name {
      text-align: left;
      font-size: 14px;
      width: 100%;
    }
    .user-input {
      width: 100%;
    }
  }
`;

const UserPage = () => {
  return (
    <Layout>
      <UserPageStyled>
        <div className="user-main">
          <SectionLeft className="section-left">
            <UserSideBar></UserSideBar>
          </SectionLeft>
          <SectionRight className="section-right user-right">
            <Outlet></Outlet>
          </SectionRight>
        </div>
      </UserPageStyled>
    </Layout>
  );
};

export default UserPage;
