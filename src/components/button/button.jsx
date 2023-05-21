import React from "react";

import { ButtonStyled as Styled } from "./button.styled";

export const Button = ({ children, fetchQuote }) => {
  const handleClick = () => {
    fetchQuote("?category=" + children);
  };

  return (
    <Styled.Wrapper>
      <Styled.Button onClick={handleClick} type="button">
        {children}
      </Styled.Button>
    </Styled.Wrapper>
  );
};
