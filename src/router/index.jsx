import { createBrowserRouter, RouterProvider } from "react-router-dom";
import DashboardRoutes from "./dashboard";


export default function PageRouter() {
  const routes = createBrowserRouter([
   
    ...DashboardRoutes

  ]);

  return <RouterProvider router={routes}  future={{
    v7_relativeSplatPath: true,
  }} />;
}