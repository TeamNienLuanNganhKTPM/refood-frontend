/** @format */

import ProductImage from "modules/products/ProductImage";
import ProductPrice from "modules/products/ProductPrice";
import ProductTitle from "modules/products/ProductTitle";
import React from "react";
import styled from "styled-components";

const CartItemStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 20px;
  .cl-image {
    width: 56px;
    height: 56px;
    border-radius: 6px;
  }
  .cl-content {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
  }
  .cl-title {
    font-size: 16px;
    color: ${(props) => props.theme.textPrimary};
  }
  .cl-entry {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 6px;
    color: ${(props) => props.theme.red};
    font-size: 14px;
  }
  .cl-price {
    color: ${(props) => props.theme.red};
    font-size: 14px;
  }
`;

const CartItem = () => {
  return (
    <CartItemStyled>
      <div className="cl-image">
        <ProductImage
          url={
            "https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Zm9vZHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60"
          }
        ></ProductImage>
      </div>
      <div className="cl-content">
        <ProductTitle className="cl-title">Phở bò siêu ngon</ProductTitle>
        <div className="cl-entry">
          <span className="cl-quantity">1</span>
          <span>x</span>
          <ProductPrice className="cl-price">100000</ProductPrice>
        </div>
      </div>
    </CartItemStyled>
  );
};

export default CartItem;
