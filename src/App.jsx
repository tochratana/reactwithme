import { createBrowserRouter } from "react-router-dom";
import "./index.css";
import RoutLayout from "./components/layout/RoutLayout";
import HomePage from "./components/pages/homepage/HomePage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RoutLayout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
    ],
  },
]);

export default router;
