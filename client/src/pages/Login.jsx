import React, { useState, useEffect } from 'react'

import { FcGoogle, } from "react-icons/fc";
import { BsFacebook } from "react-icons/bs";

import 'firebase/app'
import { GoogleAuthProvider, signOut, signInWithPopup, signInWithRedirect, onAuthStateChanged } from 'firebase/auth'
import { auth } from '../firebase.config.js'
import { useNavigate } from 'react-router-dom';

const Login = ({ user, setUser }) => {


    const navigate = useNavigate()

    const handleGoogleLogin = async () => {
        const googleAuthProvider = new GoogleAuthProvider();
        await signInWithPopup(auth, googleAuthProvider);
    }

    
    return (
        <>
            <section className="bg-gray-50 min-h-screen flex items-center justify-center">
                <div className="bg-gray-200 flex rounded-2xl h-64 shadow-lg w-[80vw] md:w-[50vw] lg:w-[40vw] justify-center p-5 items-center">
                    <div className="w-[100%]  px-4 md:px-16">
                        <h2 className="font-bold text-2xl text-[#002D74] text-center">Login</h2>

                        <button className="bg-white border py-2 px-5 w-full rounded-xl mt-5 flex justify-center items-center text-sm hover:scale-105 duration-300 text-[#002D74] font-semibold"
                            onClick={handleGoogleLogin}>
                            <FcGoogle className='w-[25px] h-[25px] mr-3' />
                            Login with Google
                        </button>


                        <button className="bg-white border py-2 px-5 w-full rounded-xl mt-5 flex justify-center items-center text-sm hover:scale-105 duration-300 text-[#002D74] font-semibold">
                            <BsFacebook className='w-[23px] h-[23px] mr-3' />
                            Login with Facebook
                        </button>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Login