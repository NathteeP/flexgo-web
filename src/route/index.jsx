import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MainContainer from '../layouts/MainContainer';

// user's part
import Homepage from '../pages/HomePage';
import AccommodationSearchListPage from '../pages/AccommodationSearchListPage';
import AccommodationDetailPage from '../pages/AccommodationDetailPage';
import CheckOutPage from '../pages/CheckOut/CheckOutPage';
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
import HostAddingNewRoom from '../pages/Host/HostAddingNewRoom';
import CheckOutSuccessPage from '../pages/CheckOut/CheckOutSuccessPage';
import CheckOutProcessingPage from '../pages/CheckOut/CheckOutProcessingPage';
import CheckOutContainer from '../layouts/CheckOutContainer';

const AppRouter = createBrowserRouter([
  // guest&user path
  {
    path: '/',
    element: <MainContainer />,
    children: [
      { path: '/', element: <Homepage /> },
      { path: '/searchList', element: <AccommodationSearchListPage /> },
      {
        path: '/accommodationDetail/:accom_id',
        element: <AccommodationDetailPage />,
      },
      { path: '/wishList', element: <WishListPage /> },
      { path: '/account', element: <AccountPage /> },
      { path: '/hostProfile', element: <HostProfilePage /> },
      { path: '/booking', element: <BookingPage /> },
      { path: '/booking/reservationID', element: <BookingReservation /> },
      { path: '/checkout', element: <CheckOutContainer />, children:[
        { path: 'processing', element: <CheckOutProcessingPage />},
        { path: '', element: <CheckOutPage />},
        { path: 'success', element: <CheckOutSuccessPage />},
      ] },
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
      {
        path: '/host/AssetsManagement/NewRoomPage',
        element: <HostAddingNewRoom />,
      },

      { path: '/host/EditProfile', element: <HostEditProfile /> },
    ],
  },
  // host path

  // {
  //   path: '/',
  //   element: <MainContainer />,
  //   children: [
  //     { path: '/', element:  },

  //   ],
  // },
  ,
]);

export default function appRouter() {
  return <RouterProvider router={AppRouter} />;
}
