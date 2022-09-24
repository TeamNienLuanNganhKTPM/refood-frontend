/** @format */

import { Heading } from "components/heading";
import React from "react";
import ProductList from "./ProductList";

const ProductSimilar = () => {
  return (
    <div>
      <Heading title="Món ăn liên quan" view="Xem tất cả"></Heading>
      <ProductList></ProductList>
    </div>
  );
};

export default ProductSimilar;
