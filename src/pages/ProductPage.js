/** @format */

import styled from "styled-components";
import SectionRight from "components/layout/SectionRight";
import SectionLeft from "components/layout/SectionLeft";
import React from "react";
import ProductLeft from "modules/products/ProductLeft";
import Layout from "components/layout/Layout";
import { Outlet } from "react-router-dom";
import { Dropdown } from "components/dropdown";

const ProductPageStyled = styled.div`
  .pp-main {
    display: flex;
    flex-wrap: wrap;
    margin: 0 auto;
    max-width: 1200px;
    padding-top: 60px;
  }
  .pp-heading {
    padding: 15px;
    border-radius: 8px;
    background-color: ${(props) => props.theme.grayDark};
    margin-bottom: 20px;
  }
  .pp-dropdown {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 12px;
  }
  .pp-select {
    background-color: transparent;
    border: none;
    color: ${(props) => props.theme.text};
    gap: 10px;
  }
  .pp-list {
    width: 250px;
    top: calc(100% + 15px);
    div {
      font-size: 14px;
    }
  }
  .pp-number {
    width: 80px;
    top: calc(100% + 15px);
    left: auto;
    right: 20px;
    div {
      font-size: 14px;
    }
  }
`;

const ProductPage = () => {
  return (
    <Layout>
      <ProductPageStyled>
        <div className="pp-main">
          <SectionLeft className="section-left">
            <ProductLeft></ProductLeft>
          </SectionLeft>
          <SectionRight className="section-right">
            <>
              <div className="pp-heading">
                <div className="pp-dropdown">
                  <div className="pp-page">
                    <Dropdown>
                      <Dropdown.Select
                        placeholder="Hiển thị 12"
                        className="pp-select"
                        sizeIcon="w-4 h-4"
                      ></Dropdown.Select>
                      <Dropdown.List className="pp-number">
                        <Dropdown.Option>12</Dropdown.Option>
                        <Dropdown.Option>24</Dropdown.Option>
                        <Dropdown.Option>36</Dropdown.Option>
                        <Dropdown.Option>48</Dropdown.Option>
                      </Dropdown.List>
                    </Dropdown>
                  </div>
                </div>
              </div>
              <Outlet></Outlet>
            </>
          </SectionRight>
        </div>
      </ProductPageStyled>
    </Layout>
  );
};

export default ProductPage;
