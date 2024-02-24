import { signInWithEmailAndPassword } from 'firebase/auth';
// import React, { useState } from 'react'
import { useState } from 'react';
import { auth } from '../config/firebase';
import { useNavigate } from 'react-router-dom';

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const logIn = async()=>{
        try{
            await signInWithEmailAndPassword(auth, email, password)
            
        } catch(err){
            console.error(err)
        }
    }
    return (
        <div className='bg-red-100 h-[100vh] w-[100%] flex flex-col justify-center items-center'>
            <input
            placeholder="Email for log in"
            onChange={(e) => { setEmail(e.target.value) }}
            className='w-[20%] italic p-3  cursor-pointer mt-5 h-14 bg-gray-300 border-red-900 border-4 rounded-md placeholder:italic placeholder:text-slate-800'
            />
            <input
                placeholder="Password for log in"
                type='password'
                onChange={(e) => { setPassword(e.target.value) }} 
                className='w-[20%] italic p-3  cursor-pointer mt-5 h-14 bg-gray-300 border-red-900 border-4 rounded-md placeholder:italic placeholder:text-slate-800'
            />
            <button onClick={logIn}
            className='w-[20%] hover:border-2 border-red-600 bg-red-300 mt-5 rounded-xl h-14 text-2xl italic'>Sign In</button>
        </div>
    )
}
