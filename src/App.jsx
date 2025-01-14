import { createBrowserRouter } from "react-router-dom";
import "./index.css";
import RoutLayout from "./components/layout/RoutLayout";
import HeroSection from "./pages/homepage/HeroSection";
import DocPage from "./pages/doc/DocPage";
// import Apps from "./components/pages/Apps";
import Apps from "./pages/Apps";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RoutLayout />,
    children: [
      {
        path: "/",
        element: <HeroSection />,
      },
      {
        path: "/doc",
        element: <DocPage />,
      },
    ],
  },
  {
    path: "/apps",
    element: <Apps />,
  },
]);

export default router;
