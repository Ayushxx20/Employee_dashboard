import React, { useState } from 'react'

const Signup = ({ handleSignup, switchToLogin }) => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const submitHandler = (e) => {
        e.preventDefault()
        handleSignup(name, email, password)
        setName('')
        setEmail('')
        setPassword('')
    }

    return (
        <div className='min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-4'>
            <div className='bg-white/10 backdrop-blur-lg border border-white/20 p-8 rounded-2xl shadow-2xl w-full max-w-md'>
                <div className='text-center mb-8'>
                    <h2 className='text-3xl font-bold text-white mb-2'>Create Account</h2>
                    <p className='text-slate-300'>Join our employee management system</p>
                </div>
                
                <form onSubmit={submitHandler} className='space-y-6'>
                    <div>
                        <label className='block text-sm font-medium text-slate-300 mb-2'>Full Name</label>
                        <input
                            onChange={(e) => setName(e.target.value)}
                            value={name}
                            required
                            type="text"
                            placeholder='Enter your full name'
                            className='w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-200'
                        />
                    </div>
                    
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
                            placeholder='Create a password'
                            className='w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-200'
                        />
                    </div>
                    
                    <button 
                        type='submit'
                        className='w-full bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white font-semibold py-3 px-4 rounded-lg transition-all duration-200 transform hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 focus:ring-offset-slate-900'
                    >
                        Create Account
                    </button>
                </form>
                
                <div className='mt-6 text-center'>
                    <p className='text-slate-300'>
                        Already have an account?
                        <button 
                            onClick={switchToLogin} 
                            className='ml-2 text-emerald-400 hover:text-emerald-300 font-medium underline bg-transparent border-none cursor-pointer transition-colors duration-200'
                        >
                            Sign In
                        </button>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Signup