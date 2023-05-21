import React from "react";

import { QuoteStyled as Styled } from "./quote.styled";
import { storageService } from "../../services/storage";

export const Quote = ({ children, isEditable = true }) => {
  const handleClick = () => {
    storageService.setNewQuote(children);
  };

  return (
    <Styled.Wrapper
      onClick={isEditable ? handleClick : undefined}
      isEditable={isEditable}
    >
      <Styled.Text>{children}</Styled.Text>
    </Styled.Wrapper>
  );
};
