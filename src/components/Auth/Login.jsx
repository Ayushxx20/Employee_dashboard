import React, { useState } from 'react'

const Login = ({ handleLogin, switchToSignup }) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const submithandler = (e) => {
        e.preventDefault()
        handleLogin(email, password)
        setEmail("")
        setPassword("")
    }

    return (
        <div className='min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-4'>
            <div className='bg-white/10 backdrop-blur-lg border border-white/20 p-8 rounded-2xl shadow-2xl w-full max-w-md'>
                <div className='text-center mb-8'>
                    <h2 className='text-3xl font-bold text-white mb-2'>Welcome Back</h2>
                    <p className='text-slate-300'>Sign in to your account</p>
                </div>
                
                <form onSubmit={submithandler} className='space-y-6'>
                    <div>
                        <label className='block text-sm font-medium text-slate-300 mb-2'>Email</label>
                        <input
                            onChange={(e) => setEmail(e.target.value)}
                            value={email}
                            required
                            type="email"
                            placeholder='Enter your email'
                            className='w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-200'
                        />
                    </div>
                    
                    <div>
                        <label className='block text-sm font-medium text-slate-300 mb-2'>Password</label>
                        <input
                            onChange={(e) => setPassword(e.target.value)}
                            value={password}
                            required
                            type="password"
                            placeholder='Enter your password'
                            className='w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-200'
                        />
                    </div>
                    
                    <button 
                        type='submit'
                        className='w-full bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white font-semibold py-3 px-4 rounded-lg transition-all duration-200 transform hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 focus:ring-offset-slate-900'
                    >
                        Sign In
                    </button>
                </form>
                
                <div className='mt-6 text-center'>
                    <p className='text-slate-300'>
                        Don't have an account?
                        <button 
                            onClick={switchToSignup} 
                            className='ml-2 text-emerald-400 hover:text-emerald-300 font-medium underline bg-transparent border-none cursor-pointer transition-colors duration-200'
                        >
                            Sign Up
                        </button>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Login