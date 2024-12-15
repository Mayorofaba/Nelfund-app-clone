import { lazy, Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import Layout from '../../components/layout';

// Dashboard screens
const LandingPage = lazy(() => import('../../landingPage'));
const Setting = lazy(() => import('../../settings/setting'));
const Profile = lazy(() => import('../../profile/profile'));
const Loans = lazy(() => import('../../loan/loans/loans'));
const LoanDetail = lazy(() => import('../../loan/loanDetail/loanDetail'));
const FAQs = lazy(() => import('../../mainview/FAQs/FAQs'));
const RequestLoan = lazy(() => import('../../loan/requestLoan/requestLoan'))
const RequestloanTwo = lazy(()=> import('../../loan/requestLoan/requestloanTwo') )



// const  = lazy(() => import("../../pages/dashboard/billings/index"))
// Dashboard routes with error handling and route-specific components for each dashboard page.
// The children prop is used to define route-specific components.
// In the children, the path prop is used to define the URL path that will trigger the associated component.
// The path prop can also include wildcard characters to match multiple routes.
// The element prop is used to define the component to render when the URL matches the path.
// The children prop can also include nested routes to define nested components.

const DashboardRoutes = [
    {
        path: '/',

        element: (
            <Suspense fallback={<>...Loading</>}>
                <Layout>
                    <Outlet />
                </Layout>
            </Suspense>
        ),
        children: [
            {
                path: '/',
                element: <LandingPage />,
            },

            {
                path: '/setting',
                element: <Setting />,
            },
            {
                path: '/profile',
                element: <Profile />,
            },
            {
                path: '/loans',
                element: <Loans />,
            },
            {

                path: '/loans/details',
                element: <LoanDetail />,
            },
            {

                path: '/loans/application',
                element: <RequestLoan />,
            },
            {
                
                path: '/loans/application/2',
                element: <RequestloanTwo />,
            },
        ],

    },
    {
        path: '/FAQs',
        element: < FAQs />,
    },

];

export default DashboardRoutes;