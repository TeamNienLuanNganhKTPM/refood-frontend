/** @format */

import React from "react";
import { useDropdown } from "./dropdown-context";
import PropTypes from "prop-types";

const Option = (props) => {
  const { onClick, children } = props;
  const { setShow } = useDropdown();
  const handleClick = () => {
    onClick && onClick();
    setShow(false);
  };
  return (
    <div
      className="flex items-center justify-between px-6 py-2 text-lg transition-all cursor-pointer hover:text-primary hover:bg-bgPrimary"
      onClick={handleClick}
    >
      {children}
    </div>
  );
};

Option.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.any,
  setShow: PropTypes.bool,
};

export default Option;
