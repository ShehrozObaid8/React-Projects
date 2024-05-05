import { configureStore } from '@reduxjs/toolkit'
// import rootReducer from './rootReducer'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web
import  cartSlice  from './cart'

const persistConfig = {
  key: 'root',
  storage,
  // start
}

const persistedReducer = persistReducer(persistConfig,cartSlice)

export const store = configureStore({
  reducer: persistedReducer,
})

export const persistor = persistStore(store)