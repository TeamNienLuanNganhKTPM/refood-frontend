/** @format */

import styled from "styled-components";
import React from "react";
import Layout from "components/layout/Layout";
import DetailsContent from "modules/details/DetailsContent";
import DetailsReview from "modules/details/DetailsReview";
import DetailsComment from "modules/details/DetailsComment";

const ProductDetailsPageStyled = styled.div`
  background-color: #f7f8fd;
  padding-bottom: 50px;
`;
const ProductDetailsPage = () => {
  return (
    <Layout>
      <div className="pb-10 bg-[#f7f8fd]"></div>
      <ProductDetailsPageStyled>
        <div className="container">
          <DetailsContent></DetailsContent>
          <DetailsReview></DetailsReview>
          <DetailsComment></DetailsComment>
        </div>
      </ProductDetailsPageStyled>
    </Layout>
  );
};

export default ProductDetailsPage;
