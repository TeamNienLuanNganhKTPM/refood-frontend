/** @format */

import { Heading } from "components/heading";
import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllFood } from "store/food/slice";
import ProductList from "./ProductList";

const ProductSimilar = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    function fetchData() {
      dispatch(getAllFood());
    }
    fetchData();
  }, [dispatch]);
  const { foods } = useSelector((state) => state.food);
  if (!foods) return null;
  return (
    <div>
      <Heading title="Món ăn liên quan" view="Xem tất cả"></Heading>
      <ProductList data={foods}></ProductList>
    </div>
  );
};

export default ProductSimilar;
