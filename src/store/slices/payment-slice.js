import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import reservationApi from '../../api/reservation';


const initialState = {
    clientSecret: null,
    paymentIntent: null,
    isLoading: false,
    error: null,
    message: null,
    transactionData: {}
  }


  export const fetchClientSecret = createAsyncThunk(
  'payment/fetchClientSecret',
  async ({amount, description}, thunkAPI) => {
      try {
          const response = await reservationApi.createPaymentIntent({
              amount,
              description,
          });
          return response.data.clientSecret;
      } catch (error) {
          return thunkAPI.rejectWithValue(error.message);
      }
  }
)

  export const confirmPayment = createAsyncThunk(
    'payment/confirmPayment',
    async ({ stripe, elements}, thunkAPI) => {
      try {
        const payload = await stripe.confirmPayment({
          elements,
          confirmParams: {
            return_url: `${window.location.origin}/checkout/processing`, 
            payment_method_data: {
              billing_details: {
                address: {
                  country: 'TH',
                },
              },
            },
          },
        });
  
        if (payload.error) {
          throw new Error(payload.error.message);
        }
  
        return payload.paymentIntent;
      } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
      }
    }
  );
  
  const paymentSlice = createSlice({
    name: 'payment',
    initialState,
    reducers: {
        setTransactionData(state, action) {
          state.transactionData = action.payload
        },
        setCheckOutLoading(state, action) {
          state.isLoading = true
        }
    },
    extraReducers: (builder) => {
      builder
        .addCase(fetchClientSecret.pending, (state) => {
          state.isLoading = true;
          state.error = null;
          state.message = 'Fetching client secret...';
        })
        .addCase(fetchClientSecret.fulfilled, (state, action) => {
          state.isLoading = false;
          state.clientSecret = action.payload;
          state.message = 'Client secret fetched successfully';
        })
        .addCase(fetchClientSecret.rejected, (state, action) => {
          state.isLoading = false;
          state.error = action.payload;
          state.message = 'Failed to fetch client secret';
        })
        .addCase(confirmPayment.pending, (state) => {
          state.isLoading = true;
          state.error = null;
          state.message = 'Processing...';
        })
        .addCase(confirmPayment.fulfilled, (state, action) => {
          state.isLoading = false;
          state.paymentIntent = action.payload;
          state.message = 'Payment succeeded';
        })
        .addCase(confirmPayment.rejected, (state, action) => {
          state.isLoading = false;
          state.error = action.payload;
          state.message = 'Something went wrong';
        });
    },
  });
  export const { 
    setTransactionData,
    setCheckOutLoading,
   } = paymentSlice.actions;
  export const paymentReducer = paymentSlice.reducer;


