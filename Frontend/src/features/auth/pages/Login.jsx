import React, { useState } from 'react'
import { useNavigate, Link } from 'react-router'
import "../auth.form.scss"
import { useAuth } from '../hooks/useAuth'

const Login = () => {
    const { loading, handleLogin } = useAuth()
    const navigate = useNavigate()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleSubmit = async (e) => {
        e.preventDefault()
        await handleLogin({ email, password })
        navigate('/app')
    }

    if (loading) return (<main><h1>Loading...</h1></main>)

    return (
        <main>
            <div className="form-container">
                <div className="form-header">
                    <div className="brand">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="#ff2d78"><path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 17l-6.2 4.3 2.4-7.4L2 9.4h7.6z" /></svg>
                        <span>PrepAI</span>
                    </div>
                    <h1>Welcome back</h1>
                    <p>Sign in to continue to your interview plans</p>
                </div>
                <form onSubmit={handleSubmit}>
                    <div className="input-group">
                        <label htmlFor="email">Email</label>
                        <input onChange={(e) => setEmail(e.target.value)} type="email" id="email" placeholder="you@example.com" />
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">Password</label>
                        <input onChange={(e) => setPassword(e.target.value)} type="password" id="password" placeholder="Enter your password" />
                    </div>
                    <button className="button primary-button">Sign In</button>
                </form>
                <p className="form-footer">Don't have an account? <Link to="/register">Create one</Link></p>
            </div>
        </main>
    )
}

export default Login
