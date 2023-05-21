import React from "react";

import { AppLayoutStyled as Styled } from "./app-layout.styled";
import { ROUTES } from "../../constants/routes";

export const AppLayout = ({ children }) => {
  return (
    <Styled.Wrapper>
      <Styled.Header>
        <Styled.Logo
          src="https://avatars.githubusercontent.com/u/17794049?s=280&v=4"
          alt="logo"
        />
        <Styled.Nav>
          <Styled.Link to={ROUTES.main} fontSize={24}>
            Main
          </Styled.Link>
          <Styled.Link to={ROUTES.favorite} fontSize={24}>
            Favorite
          </Styled.Link>
        </Styled.Nav>
      </Styled.Header>

      <main>{children}</main>

      <Styled.Footer>
        <Styled.Link to="https://api.chucknorris.io/" fontSize={16}>
          chuck norris api
        </Styled.Link>
      </Styled.Footer>
    </Styled.Wrapper>
  );
};
