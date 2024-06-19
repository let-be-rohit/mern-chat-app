import React from 'react'


const LogIn = () => {
  return (
    <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
      <div className='bg-white w-full max-w-md rounded overflow-hidden p-4 mx-auto'>
        <h1 className='text-3xl font-semibold text-center text-gray-500'>
        Login
        <span className='text-fuchsia-500'>  Chat App</span>
        </h1>
        <form className='grid gap-4 mt-5'>
            <div className='flex flex-col gap-1'>
                <label className='label p-2'>
                    <span className='text-base label-text'>Username</span>
                </label>
                <input 
                type="text" 
                placeholder='Enter Username'
                className='bg-slate-100 px-2 py-1 focus:outline-primary'/>
            </div>
            <div className='flex flex-col gap-1'>
                <label className='label p-2'>
                    <span className='text-base label-text'>Password</span>
                </label>
                <input 
                type="text" 
                placeholder='Enter Password'
                className='bg-slate-100 px-2 py-1 focus:outline-primary'/>
            </div>
            <a href="#" className='text-sm hover:underline hover:text-fuchsia-500 mt-2 inline-block'>
                {"Don't"} have an account?
            </a>
            <div>
                <button className='btn btn-block btn-sm mt-2 bg-primary'>Login</button>
            </div>
        </form>
      </div>
    </div>
  )
}

export default LogIn
