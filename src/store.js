import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import { de } from 'date-fns/locale'
import authReducer from './pages/Auth/authslice'

const rootReducer = {
  auth: authReducer
}
const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV === 'development',
  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware({ serializableCheck: false })
  ]
})
export default store
