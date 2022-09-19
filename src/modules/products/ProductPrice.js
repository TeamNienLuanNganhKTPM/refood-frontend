/** @format */

import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const ProductPriceStyled = styled.div`
  font-size: ${(props) => props.sizeText || "16px"};
  color: ${(props) => props.theme.red};
  font-weight: 600;
`;

const ProductPrice = ({ children, className = "", ...props }) => {
  const priceVN = new Intl.NumberFormat("vi-VN", {
    style: "currency",
    currency: "VND",
  }).format(children);

  return (
    <ProductPriceStyled className={className} {...props}>
      {priceVN}
    </ProductPriceStyled>
  );
};

ProductPrice.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string,
  sizeText: PropTypes.string,
};

export default ProductPrice;
