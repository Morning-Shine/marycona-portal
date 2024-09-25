import { combineReducers, configureStore } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { api } from 'api';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import pageSizesSlice from './pageSizesSlice';
import themeSlice from './themeSlice';

const persistConfig = {
  key: 'marycona-portal',
  version: 1,
  storage,
  whitelist: ['theme'],/*'pageSizes',*/ 
};

const rootReducer = combineReducers({
  [api.reducerPath]: api.reducer,
  pageSizes: pageSizesSlice,
  theme: themeSlice,
});
const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(api.middleware),
});

export const persistor = persistStore(store);
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
