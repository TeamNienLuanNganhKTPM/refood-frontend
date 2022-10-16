/** @format */

import React from "react";
import styled from "styled-components";
import PriceItem from "./PriceItem";

const SearchItemStyled = styled.div`
  .widget-title {
    font-size: 16px;
    text-transform: uppercase;
    font-weight: 600;
    color: ${(props) => props.theme.text};
    margin-bottom: 20px;
    letter-spacing: 1px;
    cursor: default;
  }
`;

const SearchToPrice = ({ title, data }) => {
  return (
    <SearchItemStyled>
      <div className="widget-title">{title}</div>
      <div className="flex flex-col gap-2"></div>
    </SearchItemStyled>
  );
};

export default SearchToPrice;
