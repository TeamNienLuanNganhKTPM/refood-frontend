/** @format */

import styled from "styled-components";
import React from "react";
import { NavLink } from "react-router-dom";
import { Dropdown } from "components/dropdown";

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
    color: ${(props) => props.theme.text};
    border-bottom-right-radius: 8px;
    border-bottom-left-radius: 8px;
    display: flex;
    flex-direction: column;
  }
`;

const types = [
  {
    id: 1,
    label: "Khai vị",
  },
  {
    id: 2,
    label: "Tráng miệng",
  },
  {
    id: 3,
    label: "Món xào",
  },
  {
    id: 4,
    label: "Món hấp",
  },
  {
    id: 5,
    label: "Món chiên",
  },
  {
    id: 6,
    label: "Món nướng",
  },
  {
    id: 7,
    label: "Món ram",
  },
  {
    id: 8,
    label: "Món canh",
  },
  {
    id: 9,
    label: "Món rang",
  },
  {
    id: 10,
    label: "Cơm",
  },
  {
    id: 11,
    label: "Cơm cháy",
  },
  {
    id: 12,
    label: "Mì",
  },
  {
    id: 13,
    label: "Cháo",
  },
  {
    id: 14,
    label: "Lẩu",
  },
  {
    id: 15,
    label: "Gỏi",
  },
  {
    id: 16,
    label: "Nước uống",
  },
  {
    id: 17,
    label: "Đặt tiệc",
  },
];

const HeaderBottom = ({ className = "" }) => {
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
                    return (
                      index < 11 && (
                        <Dropdown.Option key={item.id}>
                          {item.label}
                        </Dropdown.Option>
                      )
                    );
                  })}
                <span className="px-6 pt-3 text-lg cursor-pointer text-primary">
                  Xem thêm
                </span>
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

export default HeaderBottom;
