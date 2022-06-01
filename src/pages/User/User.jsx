import React from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import { path } from 'src/constants/path'
import Profile from './Profile/Profile'
import Password from './Password/Password'
import './user.css'

export default function User() {
  return (
    <div className="container">
      <div className="sidebar">
        <div className="brief">
          <div className="brief-avatar">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSr7uUQCPN7lnbXiGu3yjuW82-8lVqCSlsQrg&usqp=CAU"
              alt=""
            />
          </div>
          <div className="brief-right">
            <div className="brief-userName">aaaa</div>
            <div className="brief-edit">
              <svg
                width={12}
                height={12}
                viewBox="0 0 12 12"
                xmlns="http://www.w3.org/2000/svg"
                style={{ marginRight: 4 }}
              >
                <path
                  d="M8.54 0L6.987 1.56l3.46 3.48L12 3.48M0 8.52l.073 3.428L3.46 12l6.21-6.18-3.46-3.48"
                  fill="#9B9B9B"
                  fillRule="evenodd"
                />
              </svg>
              Sửa hồ sơ
            </div>
          </div>
        </div>
        <div className="sidebar-menu">
          <div className="side-bar-menu-entry">
            <div className="side-bar-menu-entry-icon">
              <img
                src="https://cf.shopee.vn/file/ba61750a46794d8847c3f463c5e71cc4"
                alt=""
              />
            </div>
            Đổi mật khẩu
          </div>
          <div className="side-bar-menu-entry">
            <div className="side-bar-menu-entry-icon">
              <img
                src="https://cf.shopee.vn/file/f0049e9df4e536bc3e7f140d071e9078"
                alt=""
              />
            </div>
            Đơn mua
          </div>
        </div>
      </div>
      <div className="main">
        <Routes>
          <Route path="/"></Route>
          <Route path={path.profile} element={<Profile />} />
          <Route path={path.password} element={<Password />} />
        </Routes>
      </div>
    </div>
  )
}
