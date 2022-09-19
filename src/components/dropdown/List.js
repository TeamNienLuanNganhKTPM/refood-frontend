/** @format */

import React from "react";
import { useEffect } from "react";
import { useDropdown } from "./dropdown-context";
import PropTypes from "prop-types";

const List = ({ children, className, display, props }) => {
  const { show, setShow } = useDropdown();
  useEffect(() => {
    if (display) setShow(true);
  }, [display, setShow]);
  return (
    <>
      {show && (
        <div
          className={`absolute left-0 w-full bg-white shadow-sm top-full ${className}`}
        >
          {children}
        </div>
      )}
    </>
  );
};

List.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string,
  display: PropTypes.bool,
  show: PropTypes.bool,
  setShow: PropTypes.bool,
};

export default List;
