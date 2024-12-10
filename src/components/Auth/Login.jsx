import React, { useState } from 'react'

const Login = ({handleLogin}) => {
    const[email,setEmail]=useState('')
    const[password,setPassword]=useState('')

       localStorage.clear();

    const submitHandler=(e)=> {
        e.preventDefault()
        // console.log("Form Submitted")
        // console.log(email, password)
        handleLogin(email,password)
        setEmail("")
        setPassword("")
    }

    return (
        <div className='flex h-screen w-screen items-center justify-center'>
            <div className='border-2 border-white px-20 py-24 rounded-xl '>
                <form onSubmit={(e)=>{
                    submitHandler(e)
                }} className='flex flex-col items-center justify-center'>
                    <input 
                    value={email}
                    onChange={(e)=>{
                        // console.log(e.target.value)
                        setEmail(e.target.value)
                    }} 
                    required 
                    className='  border-2 border-white text-xl outline-none bg-transparent placeholder:text-gray-400 py-2 px-3 rounded-lg ' type="email" placeholder='Enter Your E-mail' 
                    />
                    <input 
                    value={password}
                    onChange={(e)=>{
                        setPassword(e.target.value)
                    }} 
                    required 
                    className='mt-8 border-2 border-white text-xl outline-none bg-transparent  placeholder:text-gray-400 py-2 px-3 rounded-lg ' type="password" placeholder='Enter Your Password' 
                    />
                    <button className='mt-10 border-none  bg-black hover:bg-slate-700  text-xl  outline-none  placeholder: py-2 px-3 rounded-lg'>Log in</button>
                </form>
            </div>      
        </div>
    )
}
 
export default Login