import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Hero from "./Hero";
import App from "./App";
import Login from "./Login";
import SignUp from "./SignUp";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Hero></Hero>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/sign-up",
        element: <SignUp />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
