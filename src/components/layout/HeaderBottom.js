/** @format */

import styled from "styled-components";
import React from "react";
import PropTypes from "prop-types";
import { NavLink, useNavigate } from "react-router-dom";
import { Dropdown } from "components/dropdown";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllTypesFood } from "store/food/slice";

const HeaderBottomStyled = styled.div`
  padding: 20px 0;
  border-bottom: 1px solid ${(props) => props.theme.lineGray};
  .hb-main {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 80px;
  }
  .dropdown-select {
    border-radius: 40px;
    border: none;
    background-color: ${(props) => props.theme.primary};
    justify-content: center;
    letter-spacing: 1px;
    gap: 20px;
    width: 250px;
    color: #fff;
    height: 50px;
    font-size: 18px;
  }
  .dropdown-lists {
    margin-top: 20px;
    padding: 20px 0;
    border: 1px solid ${(props) => props.theme.lineGray};
    width: 270px;
    height: 566px;
    color: ${(props) => props.theme.text};
    border-bottom-right-radius: 8px;
    border-bottom-left-radius: 8px;
    display: flex;
    flex-direction: column;
  }
  .dropdown-option {
    font-size: 20px;
  }
`;

const HeaderBottom = ({ className = "" }) => {
  const { typesFood } = useSelector((state) => state.food);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    function fetchAllTypesFood() {
      dispatch(getAllTypesFood());
    }
    fetchAllTypesFood();
  }, [dispatch]);

  const types = typesFood ? typesFood : [];
  return (
    <HeaderBottomStyled className={className}>
      <div className="container">
        <div className="hb-main">
          <div className="hb-dropdown">
            <Dropdown>
              <Dropdown.Select
                placeholder="DANH MỤC"
                className="dropdown-select"
              ></Dropdown.Select>
              <Dropdown.List className="dropdown-lists" open={true}>
                {types.length > 0 &&
                  types.map((item, index) => {
                    if (item.FoodTypeSlug === "dat-tiec") {
                      return (
                        <Dropdown.Option
                          key={item.FoodTypeId}
                          className="dropdown-option"
                          onClick={() => navigate("/party")}
                        >
                          {item.FoodTypeName}
                        </Dropdown.Option>
                      );
                    }
                    return (
                      index < 11 && (
                        <Dropdown.Option
                          key={item.FoodTypeId}
                          className="dropdown-option"
                        >
                          {item.FoodTypeName}
                        </Dropdown.Option>
                      )
                    );
                  })}
              </Dropdown.List>
            </Dropdown>
          </div>
          <div className="menu">
            <div className="menu-item">
              <NavLink to="/#">Trang chủ</NavLink>
            </div>
            <div className="menu-item">
              <NavLink to="/#">Thực đơn</NavLink>
            </div>
            <div className="menu-item">
              <NavLink to="/#">Liên hệ</NavLink>
            </div>
          </div>
        </div>
      </div>
    </HeaderBottomStyled>
  );
};

HeaderBottom.propTypes = {
  className: PropTypes.string,
};

export default HeaderBottom;
