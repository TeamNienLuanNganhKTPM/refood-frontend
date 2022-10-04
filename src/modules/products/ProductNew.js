/** @format */

import { Heading } from "components/heading";
import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GET_ALL_FOOD_REQUEST } from "store/food/slice";
import ProductItem from "./ProductItem";

const ProductNew = () => {
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
      <Heading title="Món ăn mới" view="Xem tất cả"></Heading>
      <div className="flex-layout grid-row">
        {foods.length > 0 &&
          foods.map((food) => (
            <ProductItem key={food.FoodName} data={food}></ProductItem>
          ))}
      </div>
    </div>
  );
};

export default ProductNew;
