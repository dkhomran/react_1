import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/home";
import Css from "./pages/css";
import Javascript from "./pages/javascript";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <h1> SORRY </h1>,
  },

  {
    path: "/home",
    element: <Home />,
    errorElement: <h1> SORRY </h1>,
  },

  {
    path: "/css",
    element: <Css />,
    errorElement: <h1> SORRY </h1>,
  },

  {
    path: "/js",
    element: <Javascript />,
    errorElement: <h1> SORRY </h1>,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
