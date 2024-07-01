import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MainContainer from '../layouts/MainContainer';

// user's part
import Homepage from '../pages/HomePage';
import AccommodationSearchListPage from '../pages/AccommodationSearchListPage';
import AccommodationDetailPage from '../pages/AccommodationDetailPage';
import CheckOutPage from '../pages/CheckOutPage';
import WishListPage from '../pages/Users/WishListPage';
import AccountPage from '../pages/Users/AccountPage';
import HostProfilePage from '../pages/Users/HostProfilePage';
import BookingPage from '../pages/Users/BookingPage';
import BookingReservation from '../pages/Users/BookingReservation';

// host's part
import HostHomepage from '../pages/Host/HostHomepage';
import HostDashboardAccom1 from '../pages/Host/HostDashboardAccom';

import HostNotification from '../pages/Host/HostNotification';
import HostAssetManagement from '../pages/Host/HostAssetManagement';
import HostAddingNewAccomPage1 from '../pages/Host/HostAddingNewAccomPage';

import HostEditProfile from '../pages/Host/HostEditProfile';
import HostContainer from '../layouts/HostContainer';
import HostDashboardAccom from '../pages/Host/HostDashboardAccom';
import HostAddingNewAccomPage from '../pages/Host/HostAddingNewAccomPage';

const AppRouter = createBrowserRouter([
  {
    path: '/',
    element: <MainContainer />,
    children: [
      { path: '/', element: <Homepage /> },
      { path: '/searchList', element: <AccommodationSearchListPage /> },
      { path: '/accommodationDetail', element: <AccommodationDetailPage /> },
      { path: '/checkout', element: <CheckOutPage /> },
      { path: '/wishList', element: <WishListPage /> },
      { path: '/account', element: <AccountPage /> },
      { path: '/hostProfile', element: <HostProfilePage /> },
      { path: '/booking', element: <BookingPage /> },
      { path: '/booking/reservationID', element: <BookingReservation /> },
    ],
  },
  {
    path: '/',
    element: <HostContainer />,
    children: [
      { path: '/host', element: <HostHomepage /> },
      { path: '/host/Dashboard/accom', element: <HostDashboardAccom /> },

      { path: '/host/Notification', element: <HostNotification /> },
      { path: '/host/AssetsManagement', element: <HostAssetManagement /> },
      {
        path: '/host/AssetsManagement/NewAccomPage',
        element: <HostAddingNewAccomPage />,
      },

      { path: '/host/EditProfile', element: <HostEditProfile /> },
    ],
  },
  ,
]);

export default function appRouter() {
  return <RouterProvider router={AppRouter} />;
}
