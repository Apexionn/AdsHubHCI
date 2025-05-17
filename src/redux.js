import { configureStore } from '@reduxjs/toolkit';

import { CartSlice } from "./state/redux/cart-slice";

import storage from "redux-persist/lib/storage";
import storageSession from "redux-persist/lib/storage/session";

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";

const persistCartConfig = {
  key: "user-cart",
  storage: storage,
};

const persistedCart = persistReducer(persistCartConfig, CartSlice.reducer);

export const store = configureStore({
  reducer: {
    cart: persistedCart,
  },
  devTools: true,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
