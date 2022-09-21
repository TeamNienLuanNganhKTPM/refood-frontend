/** @format */

import React from "react";
import SearchItem from "./SearchItem";
import styled from "styled-components";

// Data
const category = [
  {
    id: "1",
    name: "mon-nuong",
    title: "Món nướng",
  },
  {
    id: "2",
    name: "mon-lau",
    title: "Lẩu",
  },
  {
    id: "3",
    name: "mon-hap",
    title: "Món hấp",
  },
  {
    id: "4",
    name: "mon-xào",
    title: "Món xào",
  },
];

const price = [
  {
    id: "1",
    name: "price-100",
    title: "Dưới 100.000đ",
  },
  {
    id: "2",
    name: "price-500",
    title: "Từ 100.000đ đến 500.000đ",
  },
  {
    id: "3",
    name: "price-1000",
    title: "Từ 500.000đ đến 1.000.000đ",
  },
  {
    id: "4",
    name: "price-more-1000",
    title: "Trên 1.000.000đ",
  },
];

const meal = [
  {
    id: "1",
    name: "meal-1",
    title: "1 người",
  },
  {
    id: "2",
    name: "meal-2",
    title: "2 người",
  },
  {
    id: "3",
    name: "meal-5",
    title: "5 người",
  },
  {
    id: "4",
    name: "price-more-5",
    title: "Trên 5 người",
  },
];

const SearchLeftStyled = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 30px;
`;

const SearchLeft = () => {
  return (
    <SearchLeftStyled>
      <SearchItem title="Theo danh mục" data={category}></SearchItem>
      <SearchItem title="Theo mức giá" data={price}></SearchItem>
      <SearchItem title="Theo khẩu phần" data={meal}></SearchItem>
    </SearchLeftStyled>
  );
};

export default SearchLeft;
