/** @format */

import styled from "styled-components";
import SearchType from "./SearchType";
import SearchRation from "./SearchRation";
import SearchRate from "./SearchRate";
import SearchPrice from "./SearchPrice";
import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { filterSearchFood } from "store/search/slice";
const queryString = require("query-string");

const SearchFilterStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  .s-filter {
    display: flex;
    flex-direction: column;
    gap: 20px;
    font-size: 16px;
    text-transform: uppercase;
    font-weight: 600;
    color: ${(props) => props.theme.text};
    margin-bottom: 20px;
    letter-spacing: 1px;
    cursor: default;
  }
`;

const SearchFilter = () => {
  const [typeSelect, setTypeSelect] = useState([]);
  const [rationSelect, setRationSelect] = useState([]);
  const [rateSelect, setRateSelect] = useState([]);
  const [priceSelect, setPriceSelect] = useState([]);
  const [query, setQuery] = useState("");
  const location = useLocation();
  const parsed = queryString.parse(location.search);

  // Set select price empty array
  useEffect(() => {
    setPriceSelect([]);
  }, []);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  // Set query when change
  useEffect(() => {
    const types = typeSelect[0] !== undefined ? typeSelect[0] : {};
    const rations = rationSelect[0] !== undefined ? rationSelect[0] : {};
    const rates = rateSelect[0] !== undefined ? rateSelect[0] : {};
    const prices = priceSelect[0];

    const values = Object.assign({}, parsed, types, prices, rations, rates);

    if (typeSelect[0] === undefined) delete values.type;
    if (rationSelect[0] === undefined) delete values.ration;
    if (rateSelect[0] === undefined) delete values.review;

    const q = queryString.stringify(values, {
      skipNull: true,
    });

    setQuery(q);
  }, [parsed, priceSelect, typeSelect, rationSelect, rateSelect]);

  // Dispatch search
  useEffect(() => {
    if (query) {
      dispatch(filterSearchFood(query));
      navigate(`/food/find-foods?${query}`);
    }
  }, [dispatch, navigate, query]);
  return (
    <SearchFilterStyled>
      <div className="s-filter">
        <SearchType setTypeSelect={setTypeSelect}></SearchType>
      </div>
      <div className="pr-5 s-filter">
        <SearchPrice setPriceSelect={setPriceSelect}></SearchPrice>
      </div>
      <div className="s-filter">
        <SearchRation setRationSelect={setRationSelect}></SearchRation>
      </div>
      <div className="s-filter">
        <SearchRate setRateSelect={setRateSelect}></SearchRate>
      </div>
    </SearchFilterStyled>
  );
};

export default SearchFilter;
