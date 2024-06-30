import AppRouter from './route';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { Provider } from 'react-redux';
import { Toaster } from 'sonner';
import store from './store';

function App() {
  return (
    <>
      <div>
        <Provider store={store}>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <AppRouter />
            <Toaster richColors />
          </LocalizationProvider>
        </Provider>
      </div>
    </>
  );
}

export default App;
