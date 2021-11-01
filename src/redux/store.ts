import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import { authReducer, currentDataReducer, modalReducer, pageReducer } from './reducers';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    page: pageReducer,
    currentData: currentDataReducer,
    modal: modalReducer
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
