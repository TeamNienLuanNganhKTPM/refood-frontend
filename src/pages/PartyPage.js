/** @format */

import Layout from "components/layout/Layout";
import SectionLeft from "components/layout/SectionLeft";
import SectionRight from "components/layout/SectionRight";
import PartyLeft from "modules/party/PartyLeft";
import React from "react";
import { Outlet } from "react-router-dom";
import styled from "styled-components";

const PartyPageStyled = styled.div`
  .party-main {
    display: flex;
    flex-wrap: wrap;
    margin: 0 auto;
    max-width: 1200px;
    padding-top: 60px;
  }
`;

const PartyPage = () => {
  return (
    <Layout>
      <PartyPageStyled>
        <div className="party-main">
          <SectionLeft className="section-left">
            <PartyLeft></PartyLeft>
          </SectionLeft>
          <SectionRight className="section-right">
            <Outlet></Outlet>
          </SectionRight>
        </div>
      </PartyPageStyled>
    </Layout>
  );
};

export default PartyPage;
