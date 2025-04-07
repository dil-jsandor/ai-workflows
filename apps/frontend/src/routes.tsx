// src/routes.tsx
import { createBrowserRouter } from "react-router-dom";

import Workflows from "./pages/Workflows";
import Home from "./pages/Home";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/workflows",
    element: <Workflows />,
  },
]);
