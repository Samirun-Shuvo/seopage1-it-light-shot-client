import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import mainRoutes from "./Routers/mainRoutes";
import "animate.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const client = new QueryClient();
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={client}>
        <RouterProvider router={mainRoutes}></RouterProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
