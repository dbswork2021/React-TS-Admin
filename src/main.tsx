import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router";
import routes from "@/routes/index.tsx";
import "@/assets/css/index.css";
import { ThemeProvider } from "@/components/utils/ThemeProvider";

createRoot(document.getElementById("root")!).render(
  <ThemeProvider defaultTheme="dark" storageKey="raven-admin-theme">
    <RouterProvider router={routes} />
  </ThemeProvider>,
);
