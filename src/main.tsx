import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./routes/Home/Home";
import Contact from "./routes/Contact/Contact";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "contact",
    element: <Contact />
  }
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
