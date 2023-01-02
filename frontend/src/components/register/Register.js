import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { toast } from 'react-toastify'
import { register } from '../../features/auth/auth-slice'

const Register = () => {
    const [ formData, setFormData ] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: ''
    })

    const dispatch = useDispatch()

    const {
        firstName,
        lastName,
        email,
        password,
        confirmPassword
    } = formData

    const onChange = (e) => {
        setFormData((prevState) => ({
          ...prevState,
          [e.target.name]: e.target.value
        }))
    }

    const onRegister = (e) => {
        e.preventDefault()

        if (password !== confirmPassword) {
            toast.error('Passwords do not match')
        } else {
            const userData = {
                firstName,
                lastName,
                email,
                password
            }
    
            dispatch(register(userData))
        }
    }

    return (
        <div className="login-form-container">
            <div className="login-register-form">
                <form onSubmit={onRegister}>
                    <input
                    type="text"
                    name="firstName"
                    placeholder="First Name"
                    value={firstName}
                    onChange={onChange}
                    />
                    <input
                    type="text"
                    name="lastName"
                    placeholder="Last Name"
                    value={lastName}
                    onChange={onChange}
                    />
                    <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={password}
                    onChange={onChange}
                    />
                    <input
                    type="password"
                    name="confirmPassword"
                    placeholder="Password"
                    value={confirmPassword}
                    onChange={onChange}
                    />
                    <input
                    name="email"
                    placeholder="Email"
                    type="email"
                    value={email}
                    onChange={onChange}
                    />
                    <div className="button-box">
                    <button type="submit">
                        <span>Register</span>
                    </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Register