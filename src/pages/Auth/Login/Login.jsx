import React from 'react'
import './login.css'
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
import { Button } from 'src/assets/styles/utils'
import { login } from '../authslice'
export default function Login() {
  const {
    control,
    handleSubmit,
    getValues,
    formState: { errors },
    setError
  } = useForm({
    defaultValues: {
      email: '',
      password: ''
    }
  })
  // const onSubmit = data => console.log(data)
  // console.log(errors)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const onSubmit = async data => {
    const body = {
      email: data.email,
      password: data.password
    }
    try {
      const res = await dispatch(login(body))
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
    <div className="login">
      <div className="container">
        <div className="banner"></div>
        <div className="form-wrapper">
          <div className="form-title">Đăng nhập</div>
          <form onSubmit={handleSubmit(onSubmit)} noValidate>
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
                    placeholder="Mat Khau"
                    name="password"
                    onChange={field.onChange}
                    value={getValues('password')}
                  />
                )}
              />
              <ErrorMessage errors={errors} name="password" />
            </div>
            <Button className="button" type="submit">
              Login
            </Button>
          </form>

          <div className="form-footer">
            <span>Bạn đã có tài khoản chưa?</span>
            <Link to={path.register} className="link">
              Đăng ký
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
