/** @format */

import styled from "styled-components";
import React from "react";
import ProductTitle from "modules/products/ProductTitle";
import ProductStar from "modules/products/ProductStar";
import ProductPrice from "modules/products/ProductPrice";
import ProductImage from "modules/products/ProductImage";
import DetailsThumb from "./DetailsThumb";
import { Button } from "components/button";
import { useState } from "react";
import DetailsQuantity from "./DetailsQuantity";

const data = [
  {
    id: "1",
    url: [
      "https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDExfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=600&q=60",
      "https://images.unsplash.com/photo-1571091718767-18b5b1457add?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
      "https://images.unsplash.com/photo-1600688640154-9619e002df30?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDZ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
    ],
    title: "Hamberger siêu ngon",
    star: 4,
    price: 80000,
  },
];

const DetailsContentStyled = styled.div`
  background-color: #fff;
  border-radius: 8px;
  padding: 40px 40px;
  display: flex;
  gap: 50px;
  .image-big {
    width: 450px;
    height: 450px;
    cursor: pointer;
    img {
      transition: all 3s;
    }
  }
  /* .thumb-image img:first-child {
    border: 2px solid lightseagreen;
  } */
  .detail-content {
    width: 100%;
    display: flex;
    flex-direction: column;
  }
  .detail-title {
    .title {
      font-size: 30px;
      margin-bottom: 0;
    }
  }
  .detail-info {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 16px;
    margin-bottom: 30px;
  }
  .detail-rated {
    display: flex;
    align-items: center;
    gap: 5px;
    cursor: pointer;
    .detail-count {
      border-bottom: 1px solid ${(props) => props.theme.red};
      color: ${(props) => props.theme.red};
    }
  }
  .detail-count {
    display: inline-block;
    font-size: 16px;
    font-weight: 500;
    color: ${(props) => props.theme.textGray};
    line-height: 1;
    padding-top: 4px;
    border-bottom: 1px solid ${(props) => props.theme.textGray};
    align-items: center;
  }
  .detail-review {
    display: flex;
    align-items: center;
    gap: 6px;
    cursor: pointer;
  }
  .detail-evaluate {
    font-size: 14px;
    font-weight: 500;
    padding-top: 4px;
    color: ${(props) => props.theme.text};
  }
  .detail-line {
    display: block;
    width: 1px;
    background-color: ${(props) => props.theme.textGray};
    height: 100%;
  }

  .detail-btn {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 20px;
  }
`;

const DetailsContent = () => {
  const [indexImg, setIndexImg] = useState(0);
  const getIndexImg = (index) => {
    setIndexImg(index);
  };
  return (
    <>
      {data.length > 0 &&
        data.map((item) => (
          <DetailsContentStyled key={item.id}>
            <div className="detail-image">
              <div className="image-big">
                <ProductImage
                  url={item.url[indexImg]}
                  className="h-full"
                ></ProductImage>
              </div>
              <DetailsThumb
                image={item.url}
                className="thumb-image"
                getIndexImg={getIndexImg}
              ></DetailsThumb>
            </div>
            <div className="detail-content">
              <div className="detail-title">
                <ProductTitle className="title">{item.title}</ProductTitle>
              </div>
              <div className="detail-info">
                <div className="detail-rated">
                  <span className="detail-count">5</span>
                  <ProductStar></ProductStar>
                </div>
                <span className="detail-line"></span>
                <div className="detail-review">
                  <div className="detail-count">50</div>
                  <div className="detail-evaluate">Đánh giá</div>
                </div>
              </div>
              <div className="detail-price">
                <ProductPrice sizeText="32px" className="mb-5">
                  {item.price}
                </ProductPrice>
              </div>
              <DetailsQuantity></DetailsQuantity>
              <div className="detail-btn">
                <Button
                  className="hover:bg-blueBold hover:text-white hover:transition-all"
                  height="48px"
                  kind="not-bg"
                >
                  Thêm vào giỏ
                </Button>
                <Button
                  className="bg-transparent"
                  height="48px"
                  kind="secondary"
                >
                  Mua ngay
                </Button>
              </div>
            </div>
          </DetailsContentStyled>
        ))}
    </>
  );
};

export default DetailsContent;
