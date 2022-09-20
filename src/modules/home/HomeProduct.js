/** @format */

import SectionLeft from "components/layout/SectionLeft";
import SectionRight from "components/layout/SectionRight";
import ProductNew from "modules/products/ProductNew";
import ProductBestSeller from "modules/products/ProductBestSeller";
import React from "react";
import styled from "styled-components";
import ProductTrending from "modules/products/ProductTrending";

const data = [
  {
    id: "1",
    url: "https://images.unsplash.com/photo-1505576633757-0ac1084af824?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MjR8MTQyNDM0MHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=600&q=60",
    title: "Gà nước lá chanh",
    star: 4,
    price: 200000,
  },
  {
    id: "2",
    url: "https://images.unsplash.com/photo-1505576633757-0ac1084af824?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MjR8MTQyNDM0MHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=600&q=60",
    title: "Buffet Lẩu Thượng Hạng",
    star: 4,
    price: 656000,
  },
  {
    id: "3",
    url: "https://images.unsplash.com/photo-1560055932-595dab110124?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8Mzl8MTQyNDM0MHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=600&q=60",
    title: "Gà nước lá chanh",
    star: 4,
    price: 100000,
  },
  {
    id: "4",
    url: "https://images.unsplash.com/photo-1604085804781-04a7d1adba36?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8NDN8MTQyNDM0MHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=600&q=60",
    title: "Gà nước lá chanh",
    star: 4,
    price: 100000,
  },
  {
    id: "5",
    url: "https://images.unsplash.com/photo-1553621043-f607bfbf6640?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MTU5fDE0MjQzNDB8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=60",
    title: "Gà nước lá chanh",
    star: 4,
    price: 100000,
  },
];

const HomeProductStyled = styled.section`
  padding-top: 40px;
  .product-main {
    display: flex;
    flex-wrap: wrap;
    margin: 0 auto;
    max-width: 1200px;
  }
  /* Desktop and Ipad pro*/
  @media (min-width: 1024px) and (max-width: 1263px) {
    .product-left {
      display: none;
    }
    .product-right {
      width: 100%;
    }
  }

  /* Tablets and Ipads */
  @media (min-width: 768px) and (max-width: 1023px) {
    .product-left {
      display: none;
    }
    .product-right {
      width: 100%;
    }
  }

  /* Mobiles */
  @media (min-width: 320px) and (max-width: 767px) {
    .product-left {
      display: none;
    }
    .product-right {
      width: 100%;
    }
  }
`;

const HomeProduct = () => {
  return (
    <HomeProductStyled>
      <div className="product-main">
        <SectionLeft className="product-left">
          <img
            src="https://images.unsplash.com/photo-1601585099780-6b176dc702af?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTc5fHxmb29kfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60"
            alt=""
            className="rounded-lg"
          />
          <ProductTrending data={data}></ProductTrending>
        </SectionLeft>
        <SectionRight className="product-right">
          <ProductBestSeller></ProductBestSeller>
          <ProductNew></ProductNew>
        </SectionRight>
      </div>
    </HomeProductStyled>
  );
};

export default HomeProduct;
