/** @format */

import React from "react";
import styled from "styled-components";
import ProductImage from "./ProductImage";
import ProductPrice from "./ProductPrice";
import ProductTitle from "./ProductTitle";

const ProductTreding = styled.div`
  display: flex;
  flex-direction: column;
  .trend-heading {
    margin-bottom: 20px;
    font-size: 16px;
    text-transform: uppercase;
    font-weight: 600;
    color: ${(props) => props.theme.text};
    cursor: pointer;
  }
  .trend-content {
    border: 1px solid ${(props) => props.theme.borderLight};
    border-radius: 6px;
    position: relative;
  }

  .trend-lists {
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    column-gap: 12px;
    padding: 15px;
    cursor: pointer;
  }
  .trend-lists:hover {
    background-color: ${(props) => props.theme.borderLight};
    transform: all;
  }
  .trend-image {
    width: 70px;
    height: 70px;
    border-radius: 8px;
  }
  .trend-title {
    font-size: 14px;
    font-weight: 500;
    color: ${(props) => props.theme.text};
  }
  .trend-title:hover {
    color: ${(props) => props.theme.textPrimary};
    transition: all;
  }
`;

const ProductTrending = ({ data }) => {
  if (!data) return null;
  return (
    <ProductTreding>
      <h3 className="trend-heading">Món ăn hot nhất</h3>
      <div className="trend-content">
        {data.length > 0 &&
          data.map((item) => (
            <div className="trend-lists" key={item.id}>
              <ProductImage
                url={item.url}
                className="trend-image"
              ></ProductImage>
              <div className="trend-info">
                <ProductTitle className="trend-title">
                  {item.title}
                </ProductTitle>
                <ProductPrice className="text-base">{item.price}</ProductPrice>
              </div>
            </div>
          ))}
      </div>
    </ProductTreding>
  );
};

export default ProductTrending;
