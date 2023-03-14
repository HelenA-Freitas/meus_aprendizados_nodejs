import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LoginPage from "./features/login/login";
import Main from "./features/listgames/main";

const router = createBrowserRouter([
  {
    path: '/',
    element: <LoginPage/>
  },
  {
    path:'/jogos',
    element: <Main/>,
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);
