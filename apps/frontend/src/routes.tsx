import { createBrowserRouter } from "react-router-dom";
import Workflows from "./pages/Workflows";
import Home from "./pages/Home";
import CreateWorkflows from "./pages/CreateWorkflow";
import WorkflowDetail from "./pages/WorkflowDetail";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/workflows",
    element: <Workflows />,
  },
  {
    path: "/workflows/:id",
    element: <WorkflowDetail />,
  },
  {
    path: "/create-workflows",
    element: <CreateWorkflows />,
  }
]);
