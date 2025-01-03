import { lazy, Suspense } from "react";
import { Outlet } from "react-router-dom";
import Layout from "../../layout/dashboardLayout/layout";

// Dashboard screens
const LandingPage = lazy(() =>
  import("../../../dashboard/homePage/landingPage")
);
const Setting = lazy(() => import("../../../dashboard/settings/setting"));
const Profile = lazy(() => import("../../../dashboard/profile/profile"));
const Loans = lazy(() => import("../../../dashboard/loanPage/loans/loans"));
const LoanDetail = lazy(() =>
  import("../../../dashboard/loanPage/loanDetail/loanDetail")
);
const FAQs = lazy(() =>
  import("../../../dashboard/homePage/faqsAndSupport/FAQs/FAQs")
);
const RequestLoan = lazy(() =>
  import("../../../dashboard/loanPage/requestLoan/requestLoan")
);
const RequestloanTwo = lazy(() =>
  import("../../../dashboard/loanPage/requestLoan/requestloanTwo")
);

// const  = lazy(() => import("../../pages/dashboard/billings/index"))
// Dashboard routes with error handling and route-specific components for each dashboard page.
// The children prop is used to define route-specific components.
// In the children, the path prop is used to define the URL path that will trigger the associated component.
// The path prop can also include wildcard characters to match multiple routes.
// The element prop is used to define the component to render when the URL matches the path.
// The children prop can also include nested routes to define nested components.

const DashboardRoutes = [
  {
    path: "dashboard",

    element: (
      <Suspense fallback={<>...Loading</>}>
        <Layout>
          <Outlet />
        </Layout>
      </Suspense>
    ),
    children: [
      {
        path: "/dashboard/home",
        element: <LandingPage />,
      },

      {
        path: "/dashboard/setting",
        element: <Setting />,
      },
      {
        path: "/dashboard/profile",
        element: <Profile />,
      },
      {
        path: "/dashboard/loans",
        element: <Loans />,
      },
      {
        path: "/dashboard/loans/details",
        element: <LoanDetail />,
      },
      {
        path: "/dashboard/loans/application",
        element: <RequestLoan />,
      },
      {
        path: "/dashboard/loans/application/2",
        element: <RequestloanTwo />,
      },
    ],
  },
  {
    path: "/FAQs",
    element: <FAQs />,
  },
];

export default DashboardRoutes;
