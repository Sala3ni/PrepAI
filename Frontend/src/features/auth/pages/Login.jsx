import React, { useState } from 'react'
import { useNavigate, Link } from 'react-router'
import "../auth.form.scss"
import { useAuth } from '../hooks/useAuth'

const Login = () => {
    const { loading, handleLogin } = useAuth()
    const navigate = useNavigate()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")

    const handleSubmit = async (e) => {
        e.preventDefault()
        setError("")
        const form = e.currentTarget
        const formEmail = form.elements.email?.value ?? ""
        const formPassword = form.elements.password?.value ?? ""
        const ok = await handleLogin({
            email: email || formEmail,
            password: password || formPassword
        })
        if (ok) navigate('/app')
        else setError("Login failed. Please check your credentials and try again.")
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
                        <input
                            name="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            onInput={(e) => setEmail(e.target.value)}
                            type="email"
                            id="email"
                            placeholder="you@example.com"
                            autoComplete="email"
                        />
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">Password</label>
                        <input
                            name="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            onInput={(e) => setPassword(e.target.value)}
                            type="password"
                            id="password"
                            placeholder="Enter your password"
                            autoComplete="current-password"
                        />
                    </div>
                    {error && <p style={{ color: '#ff2d78', marginTop: '0.75rem' }}>{error}</p>}
                    <button className="button primary-button">Sign In</button>
                </form>
                <p className="form-footer">Don't have an account? <Link to="/register">Create one</Link></p>
            </div>
        </main>
    )
}

export default Login
