import { BrowserRouter } from "react-router-dom";

import { AppRouter } from "./app-route/app-router";
import { AppLayout } from "./app-layout/app-layout";

import "./app.css";

export const App = () => {
  return (
    <BrowserRouter>
      <AppLayout>
        <AppRouter />
      </AppLayout>
    </BrowserRouter>
  );
};
