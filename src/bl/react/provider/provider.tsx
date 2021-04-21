import { FunctionComponent } from "react";
import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import { currencySlice } from "../../slices";

const store = configureStore({
  reducer: currencySlice.reducer,
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

const BLProvider: FunctionComponent = ({ children }) => (
  <Provider store={store}>{children}</Provider>
);

export default BLProvider;
