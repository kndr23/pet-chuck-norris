import styled from "styled-components";
import { Link } from "react-router-dom";

export const AppLayoutStyled = {
  Wrapper: styled.div`
    min-height: 100vh;
    max-width: 1280px;
    min-width: 375px;

    padding: 0 16px;
    margin: 0 auto;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
  `,
  Header: styled.header`
    width: 100%;

    padding: 16px 0;

    display: flex;
    justify-content: space-between;
    align-items: center;
  `,
  Footer: styled.footer`
    padding: 16px 0;

    display: flex;
    justify-content: space-between;
    align-items: center;
  `,
  Logo: styled.img`
    width: 48px;
    height: 48px;
  `,
  Nav: styled.nav`
    display: grid;
    grid-template-columns: auto auto;
    grid-gap: 16px;
  `,
  Link: styled(Link)`
    text-decoration: none;

    font-size: ${({ fontSize }) => fontSize}px;
    font-weight: 800;
    text-transform: uppercase;
    color: rgba(39, 93, 245, 0.8);

    transition: 0.3s;

    :hover {
      color: rgba(2, 45, 167, 0.8);
    }
  `,
};
