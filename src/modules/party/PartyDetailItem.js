/** @format */

import ProductImage from "modules/products/ProductImage";
import ProductPrice from "modules/products/ProductPrice";
import React from "react";
import priceVN from "utils/priceVN";

const PartyDetailItem = ({ data, partyNumOfTable }) => {
  return (
    <>
      {data?.length > 0 &&
        data.map((item) => (
          <div
            className="flex items-start justify-start gap-4 pb-2 border-b lg:gap-8 md:gap-8 border-b-line"
            key={item.FoodId}
          >
            <div className="lg:max-w-[80px] lg:h-[80px] w-full max-w-[60px] h-[60px] rounded-md">
              <ProductImage url={item.FoodThumb}></ProductImage>
            </div>
            <div className="flex flex-col w-full gap-3">
              <h3 className="text-base text-text lg:text-lg">
                {item.FoodName}
              </h3>
              <div className="flex items-center gap-2">
                <div className="hidden lg:block md:block">
                  <ProductPrice sizeText="18px">
                    {priceVN(item.FoodPrice)}
                  </ProductPrice>
                </div>
                <div className="block lg:hidden md:hidđen">
                  <ProductPrice sizeText="16px">
                    {priceVN(item.FoodPrice)}
                  </ProductPrice>
                </div>
                <span className="text-xs font-light lg:text-base md:text-base text-text1">
                  x {partyNumOfTable} bàn
                </span>
              </div>
              <div>
                <div className="inline px-2 py-1 text-xs font-medium text-center border rounded-sm lg:text-sm text-primary bg-bgPrimary border-primary">
                  {item.FoodType}
                </div>
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

export default PartyDetailItem;
