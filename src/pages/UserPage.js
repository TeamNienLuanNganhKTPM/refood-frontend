/** @format */

import Layout from "components/layout/Layout";
import SectionLeft from "components/layout/SectionLeft";
import SectionRight from "components/layout/SectionRight";
import UserSideBar from "modules/profile/UserSideBar";
import React from "react";
import { Outlet } from "react-router-dom";
import styled from "styled-components";

const UserPageStyled = styled.div`
  padding-top: 40px;
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
