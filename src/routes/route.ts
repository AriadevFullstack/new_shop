import { createBrowserRouter } from "react-router";

import { Home } from "../pages/Home.page";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Home,
  },
]);
