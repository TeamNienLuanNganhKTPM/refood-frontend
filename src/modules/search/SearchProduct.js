/** @format */

import SectionLeft from "components/layout/SectionLeft";
import SectionRight from "components/layout/SectionRight";
import React from "react";
import styled from "styled-components";
import SearchLeft from "./SearchLeft";
import SearchRight from "./SearchRight";

const SearchProductStyled = styled.div`
  .search-main {
    display: flex;
    flex-wrap: wrap;
    margin: 0 auto;
    max-width: 1200px;
    padding-top: 60px;
  }
`;

const SearchProduct = () => {
  return (
    <SearchProductStyled>
      <div className="search-main">
        <SectionLeft className="section-left">
          <SearchLeft></SearchLeft>
        </SectionLeft>
        <SectionRight className="section-right">
          <SearchRight></SearchRight>
        </SectionRight>
      </div>
    </SearchProductStyled>
  );
};

export default SearchProduct;
