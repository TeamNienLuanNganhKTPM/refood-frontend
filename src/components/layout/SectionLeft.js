/** @format */

import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const SectionLeftStyled = styled.div`
  width: 300px;
  display: flex;
  flex-direction: column;
  row-gap: 50px;
`;
const SectionLeft = ({ className = "", children }) => {
  return (
    <SectionLeftStyled className={className}>{children}</SectionLeftStyled>
  );
};

SectionLeft.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string,
};

export default SectionLeft;
