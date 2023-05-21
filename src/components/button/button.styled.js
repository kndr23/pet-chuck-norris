import styled from "styled-components";

export const ButtonStyled = {
  Wrapper: styled.div`
    margin: 8px;
  `,
  Button: styled.button`
    background: rgba(39, 93, 245, 0.8);
    border-radius: 999px;
    box-shadow: rgba(39, 93, 245, 0.8) 0 10px 20px -10px;
    box-sizing: border-box;
    color: #ffffff;
    cursor: pointer;
    font-size: 16px;
    font-weight: 700;
    line-height: 24px;
    opacity: 1;
    outline: 0 solid transparent;
    padding: 8px 18px;
    user-select: none;
    -webkit-user-select: none;
    touch-action: manipulation;
    width: fit-content;
    word-break: break-word;
    border: 0;

    transition: 0.3s;

    :hover {
      background: rgba(2, 45, 167, 0.8);
    }
  `,
};
