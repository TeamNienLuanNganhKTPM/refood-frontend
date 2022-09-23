/** @format */

import { Dropdown } from "components/dropdown";
import ProductItem from "modules/products/ProductItem";
import React from "react";
import styled from "styled-components";

const data = [
  {
    id: "1",
    url: "https://yummyday.vn/uploads/images/ga-nuong-la-chanh-2.jpg",
    title: "Gà nước lá chanh",
    star: 4,
    price: 100000,
  },
  {
    id: "2",
    url: "https://res.klook.com/image/upload/c_fill,w_960,h_460,f_auto/w_80,x_15,y_15,g_south_west,l_Klook_water_br_trans_yhcmh3/activities/xlrecusyebuedhavh6bx.webp",
    title: "Buffet Lẩu Thượng Hạng ",
    star: 4,
    price: 656000,
  },
  {
    id: "3",
    url: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Zm9vZHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60",
    title: "Gà nước lá chanh",
    star: 4,
    price: 100000,
  },
  {
    id: "4",
    url: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8Zm9vZHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60",
    title: "Gà nước lá chanh",
    star: 4,
    price: 100000,
  },
  {
    id: "5",
    url: "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGZvb2R8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60",
    title: "Gà nước lá chanh",
    star: 4,
    price: 100000,
  },
  {
    id: "6",
    url: "https://images.unsplash.com/photo-1481070555726-e2fe8357725c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjl8fGZvb2R8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60",
    title: "Gà nước lá chanh",
    star: 4,
    price: 100000,
  },
  {
    id: "7",
    url: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzV8fGZvb2R8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60",
    title: "Gà nước lá chanh",
    star: 4,
    price: 100000,
  },
  {
    id: "8",
    url: "https://images.unsplash.com/photo-1574484284002-952d92456975?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzZ8fGZvb2R8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60",
    title: "Gà nước lá chanh",
    star: 4,
    price: 100000,
  },
];

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
        {data.length > 0 &&
          data.map((product) => (
            <ProductItem key={product.id} data={product}></ProductItem>
          ))}
      </div>
    </SearchRightStyled>
  );
};

export default SearchRight;
