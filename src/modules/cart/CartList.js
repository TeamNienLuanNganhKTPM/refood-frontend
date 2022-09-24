/** @format */

import { Quantity } from "components/quantity";
import ProductImage from "modules/products/ProductImage";
import ProductPrice from "modules/products/ProductPrice";
import ProductTitle from "modules/products/ProductTitle";
import React from "react";
import styled from "styled-components";

const CartListStyled = styled.div`
  width: 820px;
  table {
    width: 100%;
    margin-bottom: 1rem;
    color: #212529;
    background-color: transparent;
    max-width: 100%;
    th {
      border-bottom: 1px solid ${(props) => props.theme.line};
      font-size: 16px;
      font-weight: 600;
      color: ${(props) => props.theme.textPrimary};
      text-transform: uppercase;
      padding: 12px;
      text-align: left;
    }
    tbody td:first-child {
      left: 0;
    }
    td {
      border-bottom: 1px solid ${(props) => props.theme.lineGray};
      padding: 12px;
      vertical-align: middle;
      display: table-cell;
      text-align: left;
    }
  }
  .cl-thumb {
  }
  .cl-image {
    width: 56px;
    height: 56px;
    border-radius: 6px;
  }
  .cl-name {
  }
  .cl-price {
  }
  .cl-quantity {
  }
  .cl-subtotal {
  }
  .cl-remove {
    cursor: pointer;
    font-size: 16px;
    font-weight: 600;
  }
  .cl-remove:hover {
    color: ${(props) => props.theme.red};
  }
`;

const CartList = () => {
  return (
    <CartListStyled>
      <table>
        <thead>
          <tr>
            <th className="cl-thumb">&nbsp;</th>
            <th className="cl-name">Món ăn</th>
            <th className="cl-price">Giá</th>
            <th className="cl-quantity">Số lượng</th>
            <th className="cl-subtotal">Tạm tính</th>
            <th className="cl-remove">&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="cl-thumb">
              <div className="cl-image">
                <ProductImage
                  url={
                    "https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Zm9vZHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60"
                  }
                ></ProductImage>
              </div>
            </td>
            <td className="cl-name">
              <ProductTitle>Phở bò siêu ngon</ProductTitle>
            </td>
            <td className="cl-price">
              <ProductPrice>100000</ProductPrice>
            </td>
            <td className="cl-quantity">
              <Quantity></Quantity>
            </td>
            <td className="cl-subtotal">
              <ProductPrice>1000000</ProductPrice>
            </td>
            <td className="cl-remove">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </td>
          </tr>
          <tr>
            <td className="cl-thumb">
              <div className="cl-image">
                <ProductImage
                  url={
                    "https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Zm9vZHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60"
                  }
                ></ProductImage>
              </div>
            </td>
            <td className="cl-name">
              <ProductTitle>Phở bò siêu ngon</ProductTitle>
            </td>
            <td className="cl-price">
              <ProductPrice>100000</ProductPrice>
            </td>
            <td className="cl-quantity">
              <Quantity></Quantity>
            </td>
            <td className="cl-subtotal">
              <ProductPrice>1000000</ProductPrice>
            </td>
            <td className="cl-remove">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </td>
          </tr>
        </tbody>
      </table>
    </CartListStyled>
  );
};

export default CartList;
