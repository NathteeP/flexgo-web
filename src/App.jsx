import AppRouter from './route';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { Toaster } from 'sonner';

function App() {
  return (
    <>
      <div>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <AppRouter />
          <Toaster richColors />
        </LocalizationProvider>
      </div>
    </>
  );
}

export default App;
