/** @format */

import ProductStar from "modules/products/ProductStar";
import React from "react";
import styled from "styled-components";

const data = [
  {
    id: "1",
    url: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzl8fHBlcnNvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60",
    star: 5,
    author: "Daniel",
    date: "10/10/2022",
    describe: "Món ăn tuyệt vời!",
  },
  {
    id: "2",
    url: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDF8fHBlcnNvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60",
    star: 5,
    author: "Lyly",
    date: "10/10/2022",
    describe: "Món ăn tuyệt vời!",
  },
  {
    id: "3",
    url: "https://images.unsplash.com/photo-1554151228-14d9def656e4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8cGVyc29ufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
    star: 5,
    author: "Candy",
    date: "10/10/2022",
    describe: "Món ăn ngon!",
  },
  {
    id: "4",
    url: "https://images.unsplash.com/photo-1491349174775-aaafddd81942?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHBlcnNvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60",
    star: 5,
    author: "Sera",
    date: "10/10/2022",
    describe: "Món ăn ngon!",
  },
  {
    id: "5",
    url: "https://images.unsplash.com/photo-1555952517-2e8e729e0b44?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjd8fHBlcnNvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60",
    star: 5,
    author: "Hery",
    date: "10/10/2022",
    describe: "Món ăn ngon!",
  },
];

const DetailsRateStyled = styled.div`
  display: flex;
  flex-direction: column;
  .rate-main {
    display: inline-flex;
    padding: 15px 0;
    border-bottom: 1px solid ${(props) => props.theme.grayBorder};
  }
  .rate-img {
    margin-right: 15px;
    width: 60px;
    height: 60px;
    border-radius: 100%;
    object-fit: cover;
    cursor: pointer;
  }
  .rate-content {
    width: 90%;
  }
  .rate-meta {
    margin-bottom: 8px;
    font-size: 16px;
    color: ${(props) => props.theme.text};
    font-weight: 500;
    letter-spacing: 1px;
    display: flex;
    gap: 6px;
    cursor: pointer;
  }
  .rate-date {
    color: ${(props) => props.theme.textLight};
  }
  .rate-desc {
    font-size: 14px;
    color: ${(props) => props.theme.text};
    font-weight: 400;
    letter-spacing: 1px;
  }
`;

const DetailsRate = () => {
  return (
    <DetailsRateStyled>
      {data.length > 0 &&
        data.map((item) => (
          <div className="rate-main" key={item.id}>
            <img src={item.url} alt="" className="rate-img" />

            <div className="rate-content">
              <ProductStar className="mb-2 cursor-pointer"></ProductStar>
              <div className="rate-meta">
                <strong className="rate-author">{item.author}</strong>
                <span>-</span>
                <span className="rate-date">{item.date}</span>
              </div>
              <div className="rate-desc">
                <p>{item.describe}</p>
              </div>
            </div>
          </div>
        ))}
    </DetailsRateStyled>
  );
};

export default DetailsRate;
