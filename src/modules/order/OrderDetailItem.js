/** @format */

import ProductImage from "modules/products/ProductImage";
import ProductPrice from "modules/products/ProductPrice";
import React from "react";
import priceVN from "utils/priceVN";

const OrderDetailItem = ({ data }) => {
  return (
    <>
      {data.length > 0 &&
        data.map((item) => (
          <div
            className="flex items-start justify-start gap-8 pb-2 border-b border-b-line"
            key={item.FoodId}
          >
            <div className="max-w-[80px] max-h-[80px] w-full h-auto rounded-md">
              <ProductImage url={item.FoodThumb}></ProductImage>
            </div>
            <div className="flex flex-col w-full gap-3">
              <h3>{item.FoodName}</h3>
              <div className="flex items-end gap-2">
                <div className="text-xs font-medium text-center border rounded-sm lg:py-1 lg:px-2 lg:text-sm text-primary bg-bgPrimary border-primary">
                  {item.FoodRation} người
                </div>
                <span className="text-base font-light text-text1">
                  x{item.FoodQuantity}
                </span>
              </div>
            </div>
            <div>
              <ProductPrice sizeText="18px">{priceVN(item.Total)}</ProductPrice>
            </div>
          </div>
        ))}
    </>
  );
};

export default OrderDetailItem;
