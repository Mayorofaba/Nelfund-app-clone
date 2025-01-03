import { createBrowserRouter, RouterProvider } from "react-router-dom";
import DashboardRoutes from "./dashboard/index";
import AuthRoutes from "./authRouter/index";

export default function PageRouter() {
  const routes = createBrowserRouter([...AuthRoutes, ...DashboardRoutes]);

  return (
    <RouterProvider
      router={routes}
      future={{
        v7_relativeSplatPath: true,
      }}
    />
  );
}
