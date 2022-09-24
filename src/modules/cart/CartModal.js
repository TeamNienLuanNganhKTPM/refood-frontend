/** @format */

import { Button } from "components/button";
import { Dropdown } from "components/dropdown";
import ProductPrice from "modules/products/ProductPrice";
import React from "react";
import styled from "styled-components";
import CartItem from "./CartItem";

const CartStyled = styled.div`
  position: absolute;
  right: 0;
  top: 55px;
  z-index: 100;
  padding: 20px;
  background-color: #fff;
  border: 1px solid ${(props) => props.theme.line};
  border-radius: 6px;
  transform: translateX(150%);
  transition: all 0.3s linear;
  .cart-lists {
    position: inherit;
    width: 300px;
    max-height: 260px;
    overflow-y: auto;
    border-bottom: 1px solid ${(props) => props.theme.borderLight};
    padding: 10px 0;
  }
  .cart-lists::-webkit-scrollbar {
    width: 4px;
  }

  /* Track */
  .cart-lists::-webkit-scrollbar-track {
    box-shadow: inset 0 0 5px ${(props) => props.theme.textLight};
    border-radius: 10px;
  }

  /* Handle */
  .cart-lists::-webkit-scrollbar-thumb {
    background: ${(props) => props.theme.blueBold};
  }
  .cart-content {
    padding: 20px 0;
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
  .cart-total {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .total-name,
  .total-price {
    color: ${(props) => props.theme.text};
  }
  .cart-btn {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    gap: 10px;
  }
  .btn-details {
    width: 100%;
    border: 1px solid ${(props) => props.themeline};
    .details-name {
      color: #3e445a;
      font-size: 14px;
    }
  }
  .btn-pay {
    width: 100%;
    background-color: #ed174a;
    .pay-name {
      color: #fff;
      font-size: 14px;
    }
  }
  .btn-pay:hover {
    opacity: 0.8;
    transition: all 0.3s linear;
  }
  @media (min-width: 320px) and (max-width: 767px) {
    .cart-lists {
      width: 280px;
    }
  }
`;

const CartModal = ({ className = "" }) => {
  return (
    <CartStyled className={className}>
      <Dropdown>
        <Dropdown.List display={true} className="cart-lists">
          <Dropdown.Option>
            <CartItem></CartItem>
          </Dropdown.Option>
          <Dropdown.Option>
            <CartItem></CartItem>
          </Dropdown.Option>
          <Dropdown.Option>
            <CartItem></CartItem>
          </Dropdown.Option>
          <Dropdown.Option>
            <CartItem></CartItem>
          </Dropdown.Option>
          <Dropdown.Option>
            <CartItem></CartItem>
          </Dropdown.Option>
          <Dropdown.Option>
            <CartItem></CartItem>
          </Dropdown.Option>
        </Dropdown.List>
        <div className="cart-content">
          <div className="cart-total">
            <span className="total-name">Tổng:</span>
            <ProductPrice className="total-price">1000000</ProductPrice>
          </div>
          <div className="cart-btn">
            <Button className="btn-details" height="44px" kind="none">
              <span className="details-name">Xem chi tiết</span>
            </Button>
            <Button className="btn-pay" height="44px" kind="none">
              <span className="pay-name">Thanh toán</span>
            </Button>
          </div>
        </div>
      </Dropdown>
    </CartStyled>
  );
};

export default CartModal;
