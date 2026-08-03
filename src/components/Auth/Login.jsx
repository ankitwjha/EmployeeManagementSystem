import React, { useState } from 'react'

const Login = ({handleLogin}) => {


    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const submitHandler = (e) => {
        e.preventDefault()
        handleLogin(email,password)
        // console.log("email is ", email)
        // console.log("password is ", password)

        setEmail("")
        setPassword("")
    }



  return (
    <div className='relative flex min-h-screen w-screen items-center justify-center bg-[#070a13] overflow-hidden px-4'>
        {/* Ambient Background Glowing Orbs */}
        <div className='absolute top-[-10%] left-[-10%] w-[500px] h-[500px] rounded-full bg-violet-600/10 blur-[120px] pointer-events-none' />
        <div className='absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] rounded-full bg-cyan-600/10 blur-[120px] pointer-events-none' />

        <div className='w-full max-w-md backdrop-blur-xl bg-[#111827]/40 border border-gray-800/80 p-8 rounded-2xl shadow-2xl z-10 transition-all duration-300 hover:border-gray-700/80'>
            {/* Header */}
            <div className='text-center mb-8'>
                <div className='inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br from-violet-500 to-indigo-600 text-white font-black text-2xl shadow-lg shadow-indigo-500/20 mb-4'>
                    E
                </div>
                <h2 className='text-3xl font-extrabold tracking-tight bg-gradient-to-r from-white via-gray-100 to-gray-400 bg-clip-text text-transparent'>
                    Welcome Back
                </h2>
                <p className='text-gray-400 text-sm mt-2'>
                    Log in to access your  Dashboard
                </p>
            </div>

            {/* Form */}
            <form onSubmit={submitHandler} className='space-y-6'>
                {/* Email Input */}
                <div className='space-y-2'>
                    <label className='text-xs font-semibold text-gray-300 tracking-wider uppercase block'>
                        Email Address
                    </label>
                    <div className='relative'>
                        <div className='absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-500'>
                            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                            </svg>
                        </div>
                        <input 
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required 
                            type="email" 
                            placeholder='Enter your email' 
                            className='w-full pl-11 pr-4 py-3 bg-[#1f2937]/30 border border-gray-700/60 rounded-xl outline-none text-white placeholder-gray-500 focus:border-violet-500 focus:ring-2 focus:ring-violet-500/20 transition-all duration-200'
                        />
                    </div>
                </div>

                {/* Password Input */}
                <div className='space-y-2'>
                    <div className='flex justify-between items-center'>
                        <label className='text-xs font-semibold text-gray-300 tracking-wider uppercase block'>
                            Password
                        </label>
                    </div>
                    <div className='relative'>
                        <div className='absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-500'>
                            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                            </svg>
                        </div>
                        <input 
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required 
                            type="password" 
                            placeholder='••••••••' 
                            className='w-full pl-11 pr-4 py-3 bg-[#1f2937]/30 border border-gray-700/60 rounded-xl outline-none text-white placeholder-gray-500 focus:border-violet-500 focus:ring-2 focus:ring-violet-500/20 transition-all duration-200'
                        />
                    </div>
                </div>

                {/* Submit Button */}
                <button 
                    type="submit" 
                    className='w-full py-3 bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 active:scale-[0.98] text-white font-semibold rounded-xl shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/35 transition-all duration-200 cursor-pointer'
                >
                    Sign In
                </button>
            </form>

            {/* Helper info */}
            <div className='mt-8 pt-6 border-t border-gray-800/60 text-center'>
                <p className='text-xs text-gray-500'>
                    Demo Admin: <span className='text-gray-400 font-mono'>admin@me.com</span> / <span className='text-gray-400 font-mono'>123</span>
                </p>
                <p className='text-xs text-gray-500'>
                    Demo User: <span className='text-gray-400 font-mono'>user@me.com</span> / <span className='text-gray-400 font-mono'>123</span>
                </p>
            </div>
        </div>
    </div>
  )
}

export default Login
