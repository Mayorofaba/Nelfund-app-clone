import React, { lazy, Suspense } from "react";
import { Outlet } from "react-router-dom";
import AuthLayout from "../../layout/authLayout/authLayout";

const Login = lazy(() => import("../../../logins/loginPage/login"));
const ResetPassword = lazy(() =>
  import("../../../logins/resetPassword/resetpassword")
);

const AuthRoutes = [
  {
    path: "",

    element: (
      <Suspense fallback={<> ... loading </>}>
        <AuthLayout>
          <Outlet />
        </AuthLayout>
      </Suspense>
    ),
    children: [
      {
        path: "/",
        element: <Login />,
      },

      {
        path: "/auth/reset-password",
        element: <ResetPassword />,
      },
    ],
  },
];

export default AuthRoutes;
