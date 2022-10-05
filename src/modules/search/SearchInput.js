/** @format */

import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { SEARCH_FOOD_REQUEST } from "store/food/slice";

const SearchInputStyled = styled.div`
  width: 100%;
  max-width: 550px;
  display: flex;
  align-items: center;
  position: relative;
  .search-input {
    flex: 1;
    font-weight: 400;
    border-radius: 8px;
    color: ${(props) => props.theme.text};
    background-color: #f3f4f7;
    padding: 12px;
  }
  .search-icon {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 20px;
    font-weight: 500;
    color: ${(props) => props.theme.textPrimary};
    cursor: pointer;
  }
  .search-icon:hover {
    color: ${(props) => props.theme.primary};
    transition: all 0.3s linear;
  }
`;

const SearchInput = ({ className = "" }) => {
  const [values, setValues] = useState("");
  // Handle Click Search
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleClickSearch = () => {
    try {
      dispatch(SEARCH_FOOD_REQUEST({ name: "name", values: values }));
      navigate(`/food/find-foods?name=${values}`);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <SearchInputStyled className={className}>
      <input
        type="text"
        className="search-input"
        placeholder="Tìm món ăn..."
        onChange={(e) => {
          setValues(e.target.value);
        }}
      />
      <span className="search-icon" onClick={handleClickSearch}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
          />
        </svg>
      </span>
    </SearchInputStyled>
  );
};

SearchInput.propTypes = {
  className: PropTypes.string,
};

export default SearchInput;
