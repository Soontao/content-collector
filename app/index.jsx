import React from "react";
import { createRoot } from "react-dom";
import { RouterProvider } from "react-router-dom";
import router from "./router.jsx";

const root = createRoot(document.getElementById("container"));

root.render(<RouterProvider router={router}></RouterProvider>);

document.title = "Content Collector";
