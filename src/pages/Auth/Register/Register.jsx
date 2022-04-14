import React, { useEffect } from 'react'
import { Button } from 'src/assets/styles/utils'
import './register.css'
import { Link, useNavigate } from 'react-router-dom'
import { path } from 'src/constants/path'
import InputText from 'src/components/InputText/InputText'
import InputPassword from 'src/components/InputPassword/InputPassword'
import { useForm, Controller } from 'react-hook-form'
import { rules } from 'src/constants/rules'
import ErrorMessage from 'src/components/ErrorMessage/ErrorMessage'
import { useDispatch } from 'react-redux'
import { register } from '../authslice'
import { unwrapResult } from '@reduxjs/toolkit'
// import http from 'src/utils/http'
export default function Register() {
  const {
    control,
    handleSubmit,
    getValues,
    formState: { errors },
    setError
  } = useForm({
    defaultValues: {
      email: '',
      password: '',
      confirmedPassword: ''
    }
  })
  // const onSubmit = data => console.log(data)
  // console.log(errors)

  // useEffect(() => {
  //   http.get('products').then(res => {
  //     console.log(res)
  //   })
  // }, [])
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const onSubmit = async data => {
    const body = {
      email: data.email,
      password: data.password
    }
    try {
      const res = await dispatch(register(body))
      unwrapResult(res)
      navigate(path.home)
    } catch (error) {
      if (error.status === 422)
        for (const key in error.data) {
          setError(key, {
            type: 'server',
            message: error.data[key]
          })
        }
    }
  }
  return (
    <div className="register">
      <div className="container">
        <div className="banner"></div>
        <div className="form-wrapper">
          <div className="form-title">Đăng ký</div>
          <form className="form" onSubmit={handleSubmit(onSubmit)} noValidate>
            <div className="form-control">
              <Controller
                name="email"
                control={control}
                rules={rules.email}
                render={({ field }) => (
                  <InputText
                    type="email"
                    name="email"
                    placeholder="Email"
                    onChange={field.onChange}
                    value={getValues('email')}
                  />
                )}
              />
              <ErrorMessage errors={errors} name="email" />
            </div>
            <div className="form-control">
              <Controller
                name="password"
                control={control}
                rules={rules.password}
                render={({ field }) => (
                  <InputPassword
                    placeholder="Mật khẩu"
                    name="password"
                    onChange={field.onChange}
                    value={getValues('password')}
                  />
                )}
              />
              <ErrorMessage errors={errors} name="password" />
            </div>
            <div className="form-control">
              <Controller
                name="confirmedPassword"
                control={control}
                rules={{
                  ...rules.confirmedPassword,
                  validate: {
                    samePassword: v =>
                      v === getValues('password') || 'Mật khẩu không khớp'
                  }
                }}
                render={({ field }) => (
                  <InputPassword
                    placeholder="Nhập lại mật khẩu"
                    name="confirmedPassword"
                    onChange={field.onChange}
                    value={getValues('confirmedPassword')}
                  />
                )}
              />
              <ErrorMessage errors={errors} name="confirmedPassword" />
            </div>
            <div className="form-button">
              {/* <Button type="submit">Đăng ký</Button>
               */}
              <Button className="button" type="submit">
                Đăng ký
              </Button>
            </div>
          </form>

          <div className="form-footer">
            <span>Bạn đã có tài khoản chưa?</span>
            <Link to={path.login} className="link">
              Đăng nhập
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
