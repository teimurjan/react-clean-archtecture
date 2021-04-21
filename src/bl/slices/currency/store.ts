import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const currencySlice = createSlice({
  name: "currency",
  initialState: {
    currency: "USD",
  },
  reducers: {
    change: (state, action: PayloadAction<string>) => {
      state.currency = action.payload;
    },
  },
});

export default currencySlice;
