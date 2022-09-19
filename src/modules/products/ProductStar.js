/** @format */

import Rating from "components/rating/Rating";
import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const ProductStarStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  color: ${(props) => props.theme.yellow}; ;
`;
const ProductStar = ({ className = "" }) => {
  return (
    <ProductStarStyled className={className}>
      <Rating></Rating>
      <Rating></Rating>
      <Rating></Rating>
      <Rating></Rating>
      <Rating></Rating>
    </ProductStarStyled>
  );
};

ProductStar.propTypes = {
  className: PropTypes.string,
};

export default ProductStar;
