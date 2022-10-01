/** @format */

import { DropdownProvider } from "components/dropdown/dropdown-context";
import Layout from "components/layout/Layout";
import SectionLeft from "components/layout/SectionLeft";
import SectionRight from "components/layout/SectionRight";
import UserSideBar from "modules/profile/UserSideBar";
import React from "react";
import { Outlet } from "react-router-dom";
import styled from "styled-components";

const UserPageStyled = styled.div`
  padding-top: 40px;
  .user-main {
    display: flex;
    flex-wrap: wrap;
    margin: 0 auto;
    max-width: 1200px;
  }
`;

const UserPage = () => {
  return (
    <Layout>
      <DropdownProvider>
        <UserPageStyled>
          <div className="user-main">
            <SectionLeft className="section-left">
              <UserSideBar></UserSideBar>
            </SectionLeft>
            <SectionRight className="section-right">
              <Outlet></Outlet>
            </SectionRight>
          </div>
        </UserPageStyled>
      </DropdownProvider>
    </Layout>
  );
};

export default UserPage;
