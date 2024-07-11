import { useSelector } from 'react-redux';
import CheckoutSpinner from '../../pages/CheckOut/CheckoutSpinner';
import AccommodationSubmitFailed from '../HostAddingNewRoom/NewAccomFailed';
import AccommodationSubmitSuccess from '../HostAddingNewRoom/NewAccomSubmitted';

export default function AddingNewAccomResult() {
  const { isLoading, error } = useSelector((state) => state.hostForm);

  if (isLoading) {
    return <CheckoutSpinner />;
  } else if (error) {
    return <AccommodationSubmitFailed />;
  }

  return <AccommodationSubmitSuccess />;
}
