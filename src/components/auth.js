import { useState } from 'react'
import { auth, googleProvider } from '../config/firebase'
import { createUserWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth'
import { FcGoogle } from "react-icons/fc";
import { useNavigate } from 'react-router-dom';

export const Auth = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const signIn = async () => {
        try {
            await createUserWithEmailAndPassword(auth, email, password)
            // return <redirect to="/login"/>
            navigate('/login')

        } catch (err) {
            console.error(err)
            alert(err)

        }

    }

    const signInWithGoogle = async () => {
        try {
            await signInWithPopup(auth, googleProvider)
            navigate('/dashboard')
        } catch (err) {
            console.error(err)
        }
    }

    const logOut = async () => {
        try {
            await signOut(auth)
            navigate("/")
        } catch (err) {
            console.error(err)
        }
    }

    const sendToLogin = ()=>{
        navigate("/login")
    }
    return (
        <div className='bg-red-100 h-[100vh] w-[100%] flex flex-col justify-center items-center'>
            <input
                placeholder="Email..."
                onChange={(e) => { setEmail(e.target.value) }}
                className='w-[20%] italic p-3  cursor-pointer mt-5 h-14 bg-gray-300 border-red-900 border-4 rounded-md placeholder:italic placeholder:text-slate-800'
            />
            <input
                placeholder="Password..."
                type='password'
                onChange={(e) => { setPassword(e.target.value) }}
                className='w-[20%] italic p-3 cursor-pointer mt-5 h-14 bg-gray-300 border-red-900 border-4 rounded-md placeholder:italic placeholder:text-slate-800'
            />
            <div className='w-[40%] h-[15%] flex justify-center items-center'>
                <button onClick={signIn}
                    className='w-[40%] hover:border-2 border-red-600 bg-red-300 mt-5 rounded-xl h-14 text-2xl italic'>Sign Up</button>
                <div>Or</div>
                <button onClick={sendToLogin}
                    className='w-[40%] hover:border-2 border-red-600 bg-red-300 mt-5 rounded-xl h-14 text-2xl italic'>Log In</button>

            </div>
            <div className='bg-gradient-to-r from-slate-200 to-slate-500 via-red-700 rounded-xl w-[40%] h-1 my-6 linear'></div>

            <button onClick={signInWithGoogle}
                className='bg-red-400 w-[20%] h-14 rounded-xl italic justify-center items-top hover:border-2 border-red-600'>
                <FcGoogle className='w-[20px] h-[20px] translate-y-[20px] translate-x-[5px]' />
                Sign In With Google
            </button>

            <button onClick={logOut}
                className='w-[8%] rounded-xl absolute top-[5%] right-[1%] bg-red-800 text-white h-14 hover:border-2 border-red-600'>
                Sign out
            </button>

        </div>
    )
}