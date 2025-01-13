import { createBrowserRouter } from "react-router-dom";
import "./index.css";
import RoutLayout from "./components/layout/RoutLayout";
import HeroSection from "./components/pages/homepage/HeroSection";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RoutLayout />,
    children: [
      {
        path: "/",
        element: <HeroSection />,
      },
    ],
  },
]);

export default router;
