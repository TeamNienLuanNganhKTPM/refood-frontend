/** @format */

import { Button } from "components/button";
import { useCart } from "contexts/cart-context";
import ProductPrice from "modules/products/ProductPrice";
import React from "react";
import { feeDelivery } from "utils/constants";
import priceVN from "utils/priceVN";

const OrderTotal = () => {
  const [total] = useCart();
  return (
    <div className="flex flex-col gap-3">
      <h3 className="text-xl font-bold text-text">Chi tiết thanh toán</h3>
      <div className="flex items-center justify-between">
        <span className="text-text1">Tổng đơn hàng:</span>
        <ProductPrice>{priceVN(total)}</ProductPrice>
      </div>
      <div className="flex items-center justify-between">
        <span className="text-text1">Phí giao hàng:</span>
        <ProductPrice>{priceVN(feeDelivery.fee)}</ProductPrice>
      </div>
      <div className="flex items-center justify-between">
        <span className="text-text1">Tổng thanh toán:</span>
        <ProductPrice>{priceVN(feeDelivery.fee + total)}</ProductPrice>
      </div>
      <div className="mt-5">
        <Button
          height="44px"
          className="w-full"
          // onClick={() => {
          //   navigate("/order");
          // }}
        >
          Thanh toán
        </Button>
      </div>
    </div>
  );
};

export default OrderTotal;
