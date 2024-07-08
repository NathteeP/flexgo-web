import AppRouter from './route';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { Provider } from 'react-redux';
import { Toaster } from 'sonner';
import store, { persistor } from './store';
import { PersistGate } from 'redux-persist/integration/react';

function App() {
  return (
    <>
      <div>
        <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <AppRouter />
            <Toaster richColors />
          </LocalizationProvider>
          </PersistGate>
        </Provider>
      </div>
    </>
  );
}

export default App;
