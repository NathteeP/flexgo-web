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
import HostDashboardAccom1 from '../pages/Host/HostDashboardAccom1';
import HostDashboardAccom2 from '../pages/Host/HostDashboardAccom2';
import HostNotification from '../pages/Host/HostNotification';
import HostAssetManagement from '../pages/Host/HostAssetManagement';
import HostAddingNewAccomPage1 from '../pages/Host/HostAddingNewAccomPage1';
import HostAddingNewAccomPage2 from '../pages/Host/HostAddingNewAccomPage2';
import HostAddingNewAccomPage3 from '../pages/Host/HostAddingNewAccomPage3';
import HostAddingNewAccomPage4 from '../pages/Host/HostAddingNewAccomPage4';
import HostAddingNewAccomPage5 from '../pages/Host/HostAddingNewAccomPage5';
import HostEditProfile from '../pages/Host/HostEditProfile';

const AppRouter = createBrowserRouter([
  // guest&user path
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
    element: <MainContainer />,
    children: [
      { path: '/hostHomepage', element: <HostHomepage /> },
      { path: '/hostDashboard/accom1', element: <HostDashboardAccom1 /> },
      { path: '/hostDashboard/accom2', element: <HostDashboardAccom2 /> },
      { path: '/host/Notification', element: <HostNotification /> },
      { path: '/host/AssetsManagement', element: <HostAssetManagement /> },
      {
        path: '/host/AssetsManagement/NewAccomPage1',
        element: <HostAddingNewAccomPage1 />,
      },
      {
        path: '/hostAssetsManagement/NewAccomPage2',
        element: <HostAddingNewAccomPage2 />,
      },
      {
        path: '/hostAssetsManagement/NewAccomPage3',
        element: <HostAddingNewAccomPage3 />,
      },
      {
        path: '/hostAssetsManagement/NewAccomPage4',
        element: <HostAddingNewAccomPage4 />,
      },
      {
        path: '/hostAssetsManagement/NewAccomPage5',
        element: <HostAddingNewAccomPage5 />,
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
