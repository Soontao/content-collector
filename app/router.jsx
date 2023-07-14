import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Root from "./pages/Root.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
  },
]);

export default router;
