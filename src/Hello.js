import React from "react";
import "./Hello.css";
import styled from "styled-components";

function Hello() {
  const StyledButton = styled.button`
    color: red;
    background-color: gray;
  `;

  return <StyledButton>나만의버튼</StyledButton>;
}

export default Hello;
