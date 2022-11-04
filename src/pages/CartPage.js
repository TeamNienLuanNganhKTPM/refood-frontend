/** @format */

import styled from "styled-components";
import React from "react";
import Layout from "components/layout/Layout";
import CartTotal from "modules/cart/CartTotal";
import CartList from "modules/cart/CartList";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const CartPageStyled = styled.div`
  margin-top: 40px;
  margin-bottom: 80px;
  .cart-list::-webkit-scrollbar {
    height: 6px;
  }
  @media (min-width: 600px) and (max-width: 767px) {
    .cart-list {
      width: 1060px;
    }
  }
`;

const CartPage = () => {
  const { cart } = useSelector((state) => state.cart);

  return (
    <Layout>
      <CartPageStyled>
        <div className="container">
          {cart?.length > 0 ? (
            <div className="flex justify-between items-start gap-[30px] lg:flex-nowrap flex-wrap">
              <CartList className="cart-list"></CartList>
              <CartTotal></CartTotal>
            </div>
          ) : (
            <div className="flex flex-col justify-center">
              <span className="flex justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="#ea2b0f"
                  className="w-20 h-20"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                  />
                </svg>
              </span>
              <span className="flex justify-center pt-5 text-xl lg:text-2xl text-text">
                Giỏ hàng đang trống.{" "}
                <Link to={"/"} className="pl-1 text-primary">
                  {" "}
                  Mua ngay!!
                </Link>
              </span>
            </div>
          )}
        </div>
      </CartPageStyled>
    </Layout>
  );
};

export default CartPage;
