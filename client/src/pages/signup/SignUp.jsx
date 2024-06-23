import React, { useState } from 'react'
import GenderCheckbos from './GenderCheckbos'
import { Link } from 'react-router-dom'
import useSignup from '../../hooks/useSignup';

const SignUp = () => {
    const [inputs, setInputs] = useState({
        fullName: "",
        username: "",
        password: "",
        confirmPassword: "",
        gender: "",
    });

    const {loading, signup} = useSignup();

    const handleCheckboxChange = (gender) => {
        setInputs({...inputs, gender});
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        await signup(inputs);
    }

  return (
    <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
      <div className='bg-white w-full max-w-md rounded overflow-hidden p-4 mx-auto'>
      <h1 className='text-3xl font-semibold text-center text-gray-500'>
        Sign Up
        <span className='text-fuchsia-500'>  Chat App</span>
        </h1>
        <form onSubmit={handleSubmit} className='grid gap-4 mt-5'>
        <div className='flex flex-col gap-1'>
                <label className='label p-2'>
                    <span className='text-base label-text'>Full Name</span>
                </label>
                <input 
                type="text" 
                placeholder='Enter your full name'
                className='bg-slate-100 px-2 py-1 focus:outline-primary'
                value={inputs.fullName}
                onChange={(e)=> setInputs({...inputs, fullName: e.target.value})}
                />
            </div>
            <div className='flex flex-col gap-1'>
                <label className='label p-2'>
                    <span className='text-base label-text'>Username</span>
                </label>
                <input 
                type="text" 
                placeholder='Enter Username'
                className='bg-slate-100 px-2 py-1 focus:outline-primary'
                value={inputs.username}
                onChange={(e)=> setInputs({...inputs, username: e.target.value})}
                />
            </div><div className='flex flex-col gap-1'>
                <label className='label p-2'>
                    <span className='text-base label-text'>Password</span>
                </label>
                <input 
                type="password" 
                placeholder='Create Password'
                className='bg-slate-100 px-2 py-1 focus:outline-primary'
                value={inputs.password}
                onChange={(e)=> setInputs({...inputs, password: e.target.value})}
                />
            </div><div className='flex flex-col gap-1'>
                <label className='label p-2'>
                    <span className='text-base label-text'>Confirm Password</span>
                </label>
                <input 
                type="password" 
                placeholder='Confirm Password'
                className='bg-slate-100 px-2 py-1 focus:outline-primary'
                value={inputs.confirmPassword}
                onChange={(e)=> setInputs({...inputs, confirmPassword: e.target.value})}
                />
            </div>

            <GenderCheckbos onCheckboxChange={handleCheckboxChange} selectedGender={inputs.gender} />

            <Link to="/login" className='text-sm hover:underline hover:text-fuchsia-500 mt-2 inline-block'>
                Already have an account?
            </Link>
            <div>
                <button className='btn btn-block btn-sm mt-1 bg-primary' disabled={loading}>
                    {loading ? <span className='loading loading-spinner'></span> : "Sign Up"}
                </button>
            </div>
        </form>
      </div>
    </div>
  )
}

export default SignUp
