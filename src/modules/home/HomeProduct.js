/** @format */

import styled from "styled-components";
import SectionRight from "components/layout/SectionRight";
import SectionLeft from "components/layout/SectionLeft";
import React from "react";
import ProductTrending from "modules/products/ProductTrending";
import ProductNew from "modules/products/ProductNew";
import ProductBestSeller from "modules/products/ProductBestSeller";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllFood } from "store/food/slice";

const HomeProductStyled = styled.section`
  padding-top: 40px;
  .product-main {
    display: flex;
    flex-wrap: wrap;
    margin: 0 auto;
    max-width: 1200px;
  }
`;

const HomeProduct = () => {
  // Get all food from database
  const { foods } = useSelector((state) => state.food);

  const dispatch = useDispatch();
  useEffect(() => {
    function fetchData() {
      dispatch(getAllFood());
    }
    fetchData();
  }, [dispatch]);

  if (!foods) return null;
  return (
    <HomeProductStyled>
      <div className="product-main">
        <SectionLeft className="section-left">
          <ProductTrending></ProductTrending>
        </SectionLeft>
        <SectionRight className="section-right">
          <ProductBestSeller></ProductBestSeller>
          <ProductNew></ProductNew>
        </SectionRight>
      </div>
    </HomeProductStyled>
  );
};

export default React.memo(HomeProduct);
