import AppRouter from './route';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { Provider } from 'react-redux';
import { Toaster } from 'sonner';
import store, { persistor } from './store';
import { PersistGate } from 'redux-persist/integration/react';
import { Suspense } from 'react';
import CheckoutSpinner from './pages/CheckOut/CheckoutSpinner';

function App() {
  return (
    <Suspense
      fallback={
        <h1>
          {' '}
          <CheckoutSpinner />{' '}
        </h1>
      }
    >
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <AppRouter />
            <Toaster richColors />
          </LocalizationProvider>
        </PersistGate>
      </Provider>
    </Suspense>
  );
}

export default App;
