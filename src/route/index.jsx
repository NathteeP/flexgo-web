import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MainContainer from '../layouts/MainContainer';
import Homepage from '../pages/HomePage';
import AccommodationSearchListPage from '../pages/AccommodationSearchListPage';
import AccommodationDetailPage from '../pages/AccommodationDetailPage';
import CheckOutPage from '../pages/CheckOutPage';
import WishListPage from '../pages/Users/WishListPage';
import AccountPage from '../pages/Users/AccountPage';
import HostProfilePage from '../pages/Users/HostProfilePage';
import BookingPage from '../pages/Users/BookingPage';
import BookingReservation from '../pages/Users/BookingReservation';

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
  ,
]);

export default function appRouter() {
  return <RouterProvider router={AppRouter} />;
}
