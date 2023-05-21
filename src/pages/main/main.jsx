import React from "react";

import { Button } from "../../components/button/button";
import { Quote } from "../../components/quote/quote";

import { useMainState } from "./main.state";

import { MainStyled as Styled } from "./main.styled";

export const Main = () => {
  const { isLoading, categories, quote, fetchQuote } = useMainState();

  return (
    <>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <Styled.Wrapper>
          <Styled.ButtonsWrapper>
            {categories.map((category, index) => (
              <Button key={index} fetchQuote={fetchQuote}>
                {category}
              </Button>
            ))}
          </Styled.ButtonsWrapper>
          <Quote>{quote}</Quote>
        </Styled.Wrapper>
      )}
    </>
  );
};
