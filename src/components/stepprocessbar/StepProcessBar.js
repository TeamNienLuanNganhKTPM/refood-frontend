/** @format */

import React from "react";
import StepProgressBar from "react-step-progress";
import "react-step-progress/dist/index.css";
import styled from "styled-components";

const StepProcessBarStyled = styled.div`
  ._3uApM {
    display: none;
  }
  ._2Jtxm._2ZUAI ._2JvrO {
    background-color: ${(props) => props.theme.primary};
  }
  ._2Jtxm._35Ago ._2kL0S {
    background-color: ${(props) => props.theme.secondary};
  }
`;
const StepProcessBar = () => {
  return (
    <StepProcessBarStyled>
      <StepProgressBar
        startingStep={2}
        steps={[
          {
            label: "Chờ xác nhận",
            name: "step 1",
          },
          {
            label: "Đang giao",
            name: "step 2",
          },
          {
            label: "Đã nhận",
            name: "step 3",
          },
          {
            label: "Đã hủy",
            name: "step 4",
          },
        ]}
        labelClass="step"
      />
    </StepProcessBarStyled>
  );
};

export default StepProcessBar;
