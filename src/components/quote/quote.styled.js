import styled from "styled-components";

export const QuoteStyled = {
  Wrapper: styled.div`
    cursor: ${({ isEditable }) => (isEditable ? "pointer" : "auto")};

    padding: 24px;
    margin: 16px;

    border-radius: 16px;
    background: rgba(39, 93, 245, 0.8);
  `,
  Text: styled.p`
    color: white;
  `,
};
