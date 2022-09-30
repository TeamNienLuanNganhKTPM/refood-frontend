/** @format */

import Layout from "components/layout/Layout";
import SectionLeft from "components/layout/SectionLeft";
import SectionRight from "components/layout/SectionRight";
import UserNavbar from "modules/profile/UserNavBar";
import React from "react";
import { Outlet } from "react-router-dom";
import styled from "styled-components";

const ProfilePageStyled = styled.div`
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
      <ProfilePageStyled>
        <div className="user-main">
          <SectionLeft className="section-left">
            <UserNavbar></UserNavbar>
          </SectionLeft>
          <SectionRight className="section-right">
            <Outlet></Outlet>
          </SectionRight>
        </div>
      </ProfilePageStyled>
    </Layout>
  );
};

export default UserPage;
