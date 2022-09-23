/** @format */

import React from "react";
import { useDropdown } from "./dropdown-context";
import PropTypes from "prop-types";

const Select = ({ placeholder = "", className = "", sizeIcon = "" }) => {
  const { toggle, show } = useDropdown();
  return (
    <div
      className={`inline-flex items-center justify-between  px-5 bg-white border border-grayf1 rounded-lg cursor-pointer text-sm text-[#B2B3BD] ${className}`}
      onClick={toggle}
    >
      <span>{placeholder}</span>
      <span>
        {show ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={`w-6 h-6 ${sizeIcon}`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5 15l7-7 7 7"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={`w-6 h-6 ${sizeIcon}`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        )}
      </span>
    </div>
  );
};

Select.propTypes = {
  placeholder: PropTypes.string,
  className: PropTypes.string,
  toggle: PropTypes.func,
  show: PropTypes.string,
};

export default Select;
