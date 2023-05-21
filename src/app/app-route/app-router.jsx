import React from "react";
import { useRoutes } from "react-router-dom";

import { ROUTES } from "../../constants/routes";

import { Main } from "../../pages/main/main";
import { Favorite } from "../../pages/favorite/favorite";

export const AppRouter = () => {
  const routes = useRoutes([
    { path: ROUTES.undefined, element: <div>page not found</div> },
    { path: ROUTES.main, element: <Main /> },
    { path: ROUTES.favorite, element: <Favorite /> },
  ]);

  return routes;
};
