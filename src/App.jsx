import React from 'react'
import 'normalize.css'
import 'src/assets/styles/global.scss'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { path } from './constants/path'
import Home from './pages/Home/Home'
import Login from './pages/Auth/Login/Login'
import Register from './pages/Auth/Register/Register'
import NotFound from './pages/NotFound/NotFound'
import RegisterLayout from './Layouts/RegisterLayout/RegisterLayout'
import MainLayout from './Layouts/MainLayout/MainLayout'
import ProductDetail from './pages/ProductDetail/ProductDetail'
import User from './pages/User/User'
function App() {
  return (
    <div className="App">
      <Routes>
        <Route
          path={path.home}
          exact
          element={
            <MainLayout>
              <Home />
            </MainLayout>
          }
        ></Route>
        <Route
          path={path.productDetail}
          exact
          element={
            <MainLayout>
              <ProductDetail />
            </MainLayout>
          }
        ></Route>
        <Route
          path={path.user}
          exact
          element={
            <MainLayout>
              <User />
            </MainLayout>
          }
        ></Route>
        <Route
          path={path.login}
          exact
          element={
            <RegisterLayout title="Đăng nhập">
              <Login />
            </RegisterLayout>
          }
        ></Route>
        <Route
          path={path.register}
          exact
          element={
            <RegisterLayout title="Đăng  ký">
              <Register />
            </RegisterLayout>
          }
        ></Route>

        <Route path={path.notFound} exact element={<NotFound />}></Route>
      </Routes>
    </div>
  )
}

export default App
