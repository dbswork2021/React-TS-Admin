import MainLayout from "@/components/Layout/MainLayout";
import Login from "@/pages/Login";
import { lazy } from "react";
import { createBrowserRouter } from "react-router";

const routes = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      {
        index: true,
        Component: lazy(() => import("@/pages/Home")),
      },
      {
        path: "setting",
        Component: lazy(() => import("@/pages/Setting")),
      },
      {
        path: "member",
        Component: lazy(() => import("@/pages/Member")),
      },
      {
        path: "borrow",
        Component: lazy(() => import("@/pages/Borrow")),
      },
      {
        path: "withdraw",
        Component: lazy(() => import("@/pages/Withdraw")),
      },
      {
        path: "repay",
        Component: lazy(() => import("@/pages/Repay")),
      },
      {
        path: "help",
        Component: lazy(() => import("@/pages/Help")),
      },
      {
        path: "documents",
        Component: lazy(() => import("@/pages/Documents")),
      },
      {
        path: "order",
        Component: lazy(() => import("@/pages/Order")),
      },
    ],
  },
  {
    path: "/login",
    Component: Login,
  },
]);

export default routes;
