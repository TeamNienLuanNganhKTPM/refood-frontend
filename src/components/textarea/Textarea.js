/** @format */

import React from "react";
import styled from "styled-components";
import { useController } from "react-hook-form";
import PropTypes from "prop-types";

const TextareaStyles = styled.div`
  position: relative;
  width: 100%;
  textarea {
    width: 100%;
    padding: 20px;
    background-color: ${(props) => props.theme.grayLight};
    /* border-radius: 8px; */
    font-weight: 500;
    transition: all 0.2s linear;
    border: 1px solid #dadada;
    resize: none;
    min-height: 200px;
  }
  textarea:focus {
    background-color: white;
  }
  textarea::-webkit-textarea-placeholder {
    color: #84878b;
  }
  input::-moz-input-placeholder {
    color: #84878b;
  }
`;
const Textarea = ({
  name = "",
  type = "type",
  children,
  control,
  className = "",
  ...props
}) => {
  const { field } = useController({
    control,
    name,
    defaultValue: "",
  });
  return (
    <TextareaStyles>
      <textarea
        id={name}
        type={type}
        className={className}
        {...field}
        {...props}
      />
    </TextareaStyles>
  );
};

Textarea.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string,
  children: PropTypes.any,
  control: PropTypes.any.isRequired,
  className: PropTypes.string,
};

export default Textarea;
