import React, { Fragment, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { path } from 'src/constants/path'
import { useAuthenticated } from 'src/hook/useAuthenticated'
import { logout } from 'src/pages/Auth/authslice'
import * as S from './navbar.style'

export default function Navbar() {
  const [activePopover, setAcitivePopover] = useState(false)
  const authenticated = useAuthenticated()
  const profile = useSelector(state => state.auth.profile)
  const showPopover = () => setAcitivePopover(true)
  const hidePopover = () => setAcitivePopover(false)
  const dispatch = useDispatch()

  const handleLogout = () => dispatch(logout())
  return (
    <S.Navbar>
      <S.NavMenu>
        {authenticated && (
          <li>
            <S.User onMouseEnter={showPopover} onMouseLeave={hidePopover}>
              <S.UserImage src="https://play.google.com/store/apps/details/Google_%C3%9Cbersetzer?id=com.google.android.apps.translate&hl=vi&gl=DE"></S.UserImage>
              <S.UserName>{profile.name || profile.email}</S.UserName>
              {activePopover && (
                <S.Drawer>
                  <S.PopoverArrow />
                  <S.PopoverContent>
                    <S.UserLink to=""> tài khoản của tôi</S.UserLink>
                    <S.UserLink to=""> Đơn mua</S.UserLink>
                    <S.UserButton onClick={handleLogout}>
                      Đăng xuất
                    </S.UserButton>
                  </S.PopoverContent>
                </S.Drawer>
              )}
            </S.User>
          </li>
        )}
        {!authenticated && (
          <Fragment>
            <li>
              <S.NavLink to={path.register}>Đăng ký</S.NavLink>
              <S.NavLink to={path.login}>Đăng nhập</S.NavLink>
            </li>
          </Fragment>
        )}
      </S.NavMenu>
    </S.Navbar>
  )
}
