import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'react-toastify'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { login, reset } from '../../features/auth/auth-slice'

const Login = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
  
    const { user, isLoading, isError, isSuccess, message } = useSelector(
      (state) => state.auth
    )
  
    useEffect(() => {
      if (isError) {
        toast.error(message)
      }
  
  
      if (isSuccess) {
        toast.success('Login Success!')
        navigate('/')
      }
  
      dispatch(reset())
    }, [user, isError, isSuccess, message, navigate, dispatch])

    const [ formData, setFormData ] = useState({
        email: '',
        password: ''
    })

    const { email, password } = formData

    const onChange = (e) => {
        setFormData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value
        }))
    }
    
    const onLogin = (e) => {
        e.preventDefault()

        const userData = {
            email,
            password
        }
    
        console.log(userData)
        dispatch(login(userData))
    }

    return (
        <div className="login-form-container">
            <div className="login-register-form">
                <form onSubmit={onLogin}>
                    <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    onChange={onChange}
                    value={email}
                    />
                    <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    onChange={onChange}
                    value={password}
                    />
                    <div className="button-box">
                    <div className="login-toggle-btn">
                        <input type="checkbox" />
                        <label className="ml-10">Remember me</label>
                        <Link to={process.env.PUBLIC_URL + "/"}>
                        Forgot Password?
                        </Link>
                    </div>
                    <button type="submit">
                        <span>Login</span>
                    </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login