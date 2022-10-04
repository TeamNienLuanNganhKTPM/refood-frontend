/** @format */

import { Heading } from "components/heading";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GET_ALL_FOOD_REQUEST } from "store/food/slice";
import ProductList from "./ProductList";

const ProductBestSeller = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    function fetchData() {
      dispatch(GET_ALL_FOOD_REQUEST());
    }
    fetchData();
  }, [dispatch]);
  const { foods } = useSelector((state) => state.food);
  if (!foods) return null;
  return (
    <div className="mb-10">
      <Heading title="Món ăn bán chạy" view="Xem tất cả"></Heading>
      <ProductList data={foods}></ProductList>
    </div>
  );
};

export default ProductBestSeller;
