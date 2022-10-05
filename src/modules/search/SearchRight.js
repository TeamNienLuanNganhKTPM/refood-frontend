/** @format */

import { Dropdown } from "components/dropdown";
import ProductItem from "modules/products/ProductItem";
import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

const SearchRightStyled = styled.div`
  .sr-heading {
    padding: 15px;
    border-radius: 8px;
    background-color: ${(props) => props.theme.grayDark};
    margin-bottom: 20px;
  }
  .sr-dropdown {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 12px;
  }
  .sr-select {
    background-color: transparent;
    border: none;
    color: ${(props) => props.theme.text};
    gap: 10px;
  }
  .sr-list {
    width: 250px;
    top: calc(100% + 15px);
    div {
      font-size: 14px;
    }
  }
  .sr-number {
    width: 80px;
    top: calc(100% + 15px);
    left: auto;
    right: 20px;
    div {
      font-size: 14px;
    }
  }
`;

const SearchRight = () => {
  const { foods } = useSelector((state) => state.food);
  return (
    <SearchRightStyled>
      <div className="sr-heading">
        <div className="sr-dropdown">
          <div className="sr-filter">
            <Dropdown>
              <Dropdown.Select
                placeholder="Tìm món ăn"
                className="sr-select"
                sizeIcon="w-4 h-4"
              ></Dropdown.Select>
              <Dropdown.List className="sr-list">
                <Dropdown.Option>Sắp xếp theo phổ biến</Dropdown.Option>
                <Dropdown.Option>Sắp xếp theo mới nhất</Dropdown.Option>
                <Dropdown.Option>Sắp xếp giá từ cao đến thấp</Dropdown.Option>
                <Dropdown.Option>Sắp xếp giá từ thấp đến cao</Dropdown.Option>
              </Dropdown.List>
            </Dropdown>
          </div>
          <div className="sr-page">
            <Dropdown>
              <Dropdown.Select
                placeholder="Hiển thị 12"
                className="sr-select"
                sizeIcon="w-4 h-4"
              ></Dropdown.Select>
              <Dropdown.List className="sr-number">
                <Dropdown.Option>12</Dropdown.Option>
                <Dropdown.Option>24</Dropdown.Option>
                <Dropdown.Option>36</Dropdown.Option>
                <Dropdown.Option>48</Dropdown.Option>
              </Dropdown.List>
            </Dropdown>
          </div>
        </div>
      </div>
      <div className="flex-layout grid-row">
        {foods.length > 0 &&
          foods.map((food) => (
            <ProductItem key={food.FoodName} data={food}></ProductItem>
          ))}
      </div>
    </SearchRightStyled>
  );
};

export default SearchRight;
