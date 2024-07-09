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
import BookingHistoryPage from '../pages/Users/BookingHistoryPage';

// host's part
import HostProtectedRoute from './HostProtectedRoute';
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

// admis's part
import AdminHomepage from '../pages/Admin/AdminHomepage';
import AdminHostNoti from '../pages/Admin/AdminAccomManagement';
import AdminUserNoti from '../pages/Admin/AdminUserNoti';
import AdminHostProfile from '../pages/Admin/AdminHostProfile';
import AdminEditHostDetail from '../pages/Admin/AdminEditHostDetail';
import AdminEditUserProfile from '../pages/Admin/AdminEditUserProfile';
import AdminContainer from '../layouts/AdminContainer';
import UserManagement from '../pages/Admin/AdminUserManagement';
import AccommodationManagement from '../pages/Admin/AdminAccomManagement';

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
      { path: '/hostProfile/:user_id', element: <HostProfilePage /> },
      { path: '/history', element: <BookingHistoryPage/> },
      { path: '/history/:reservationId', element: <CheckOutSuccessPage /> },
      { path: '/checkout', element: <CheckOutContainer />, children:[
        { path: 'processing', element: <CheckOutProcessingPage />},
        { path: '', element: <CheckOutPage />},
        { path: 'success/:reservationId', element: <CheckOutSuccessPage />},
      ] },
    ],
  },
  {
    path: '/host',
    element:<HostProtectedRoute><HostContainer /></HostProtectedRoute>,
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
  {
    path: '/',
    element: <AdminContainer />,
    children: [
      { path: '/Admin', element: <AdminHomepage /> },
      { path: '/Admin/AccomManagement', element: <AccommodationManagement /> },
      { path: '/Admin/UserManagement', element: <UserManagement /> },
      { path: '/Admin/HostProfile', element: <AdminHostProfile /> },
      {
        path: '/Admin/Edit/HostDetail',
        element: <AdminEditHostDetail />,
      },
      {
        path: '/Admin/Edit/User',
        element: <AdminEditUserProfile />,
      },
    ],
  },
]);

export default function appRouter() {
  return <RouterProvider router={AppRouter} />;
}
