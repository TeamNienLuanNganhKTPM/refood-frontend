/** @format */

import Layout from "components/layout/Layout";
import { Textarea } from "components/textarea";
import OrderAddress from "modules/order/OrderAddress";
import OrderListProduct from "modules/order/OrderListProduct";
import OrderPay from "modules/order/OrderPay";
import OrderTotal from "modules/order/OrderTotal";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { authGetUser } from "store/auth/slice";
import styled from "styled-components";

const OrderPageStyled = styled.div`
  .order-main {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }
`;

const OrderPage = () => {
  const dispatch = useDispatch();
  const { cart } = useSelector((state) => state.cart);
  const { control } = useForm({
    mode: "onChange",
  });

  useEffect(() => {
    async function fetchUserData() {
      try {
        dispatch(authGetUser());
      } catch (error) {
        console.log(error);
      }
    }
    fetchUserData();
  }, [dispatch]);
  return (
    <Layout>
      <OrderPageStyled>
        <div className="container">
          <div className="order-main">
            <OrderAddress></OrderAddress>
            <div className="flex justify-between items-start gap-[30px] lg:flex-nowrap flex-wrap">
              <div className="flex flex-col gap-3 w-full lg:w-[70%] h-auto">
                <div className="flex flex-col gap-3 py-3">
                  <h3 className="text-xl font-bold text-text ">Sản phẩm</h3>
                  {cart?.length > 0 &&
                    cart?.map((item) => (
                      <OrderListProduct
                        data={item}
                        key={item.FoodDetailID}
                      ></OrderListProduct>
                    ))}
                </div>
                <div className="flex flex-col gap-3">
                  <h3 className="font-medium">Ghi chú</h3>
                  <div className="flex w-full">
                    <Textarea
                      name="content"
                      type="textarea"
                      control={control}
                      className="rounded"
                      height="100px"
                      placeholder="Ghi chú"
                    ></Textarea>
                  </div>
                </div>
              </div>
              <div className="w-[320px] p-3 flex flex-col gap-5">
                <OrderPay></OrderPay>
                <OrderTotal></OrderTotal>
              </div>
            </div>
          </div>
        </div>
      </OrderPageStyled>
    </Layout>
  );
};

export default OrderPage;
