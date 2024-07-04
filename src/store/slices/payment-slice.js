import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'


const initialState = {
    paymentIntent: null,
    isLoading: false,
    error: null,
    message: null,
  };

  export const confirmPayment = createAsyncThunk(
    'payment/confirmPayment',
    async ({ stripe, elements, clientSecret }, thunkAPI) => {
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
    reducers: {},
    extraReducers: (builder) => {
      builder
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
  
  export const paymentReducer = paymentSlice.reducer;


