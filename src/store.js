import { configureStore } from '@reduxjs/toolkit'

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
