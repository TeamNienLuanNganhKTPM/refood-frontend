/** @format */

import React from "react";
import { useState } from "react";
import styled from "styled-components";

const DetailsQuantityStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 20px;
  margin-bottom: 40px;
  .quantity-number {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    border: 1px solid ${(props) => props.theme.textGray};
    border-radius: 4px;
    input {
      width: 30px;
      height: 32px;
      text-align: center;
    }
  }
  .btn-minus {
    cursor: pointer;
    padding: 6px 6px;
    border-bottom-left-radius: inherit;
    border-top-left-radius: inherit;
    border-right: 1px solid ${(props) => props.theme.textGray};
  }
  .btn-plus {
    cursor: pointer;
    border-bottom-right-radius: inherit;
    border-top-right-radius: inherit;
    padding: 6px 6px;
    border-left: 1px solid ${(props) => props.theme.textGray};
  }
`;

const DetailsQuantity = () => {
  const [count, setCount] = useState(1);
  const handleIncrement = () => {
    setCount((count) => count + 1);
  };
  const handleDecrement = () => {
    if (count > 1) setCount((count) => count - 1);
  };
  return (
    <DetailsQuantityStyled className="detail-quantity">
      <span className="text-base font-medium">Số lượng</span>
      <div className="quantity-number">
        <div
          className={count === 1 ? "btn-minus text-[#9b9bb4]" : "btn-minus"}
          onClick={handleDecrement}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-5 h-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 12h-15"
            />
          </svg>
        </div>
        <input
          type="text"
          className="input-quantity"
          step={1}
          value={count}
          min={1}
          max={64}
          inputMode="numeric"
          onChange={(e) => setCount(Number(e.target.value))}
        />
        <div className="btn-plus" onClick={handleIncrement}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-5 h-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 4.5v15m7.5-7.5h-15"
            />
          </svg>
        </div>
      </div>
    </DetailsQuantityStyled>
  );
};

export default DetailsQuantity;
