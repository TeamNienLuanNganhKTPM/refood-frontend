/** @format */

import { Heading } from "components/heading";
import React from "react";
import ProductList from "./ProductList";

const ProductBestSeller = () => {
  return (
    <div className="mb-10">
      <Heading title="Sản phẩm bán chạy" view="Xem tất cả"></Heading>
      <ProductList></ProductList>
    </div>
  );
};

export default ProductBestSeller;
