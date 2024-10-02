import * as React from "react";
import * as ReactDOM from "react-dom/client";

import Home from "./components/Home";
import Information from "./components/Information";

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },

  {
    path: "/home",
    element: <Home />,
  },

  {
    path: "/info/:id",
    element: <Information />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);