import React, { useState } from 'react'

// import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../firebase';
import { useNavigate } from 'react-router-dom';
// Your web app's Firebase configuration




function Login() {

    const navigate = useNavigate()

    const [loginDetails, setLoginDetails] = useState({
        email: '',
        password: ''
    })

    function handleLoginDetails(e) {
        setLoginDetails( {...loginDetails, [e.target.name] : e.target.value})
        console.log(loginDetails)
    }

    function signIn(e) {
        e.preventDefault()
        signInWithEmailAndPassword()
    }
    
    const onLogin = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, loginDetails.email, loginDetails.password)
            .then((userCredential) => {
                // Signed in
                const user = userCredential.user;
                navigate("/gallery")
                console.log(user);
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode, errorMessage)
            });

    }


    return (
        <div className=' h-1/2 md:px-10'>
            <form action="" className='flex flex-col h-full gap-2 items-center '>
                <div className='email-parent flex flex-col w-1/4 md:w-4/5'>
                    <label htmlFor="email">Email</label>
                    <input className='border-2 p-2 rounded-lg' name="email" type="email" id='email' onChange={handleLoginDetails} required />
                </div>
                <div className='passwod-parent flex flex-col w-1/4 md:w-4/5'>
                    <label htmlFor="password">Password</label>
                    <input className='border-2 p-2 rounded-lg' name='password' type="password" id='password' onChange={handleLoginDetails}  required />
                </div>
                <button className='bg-[#736CC4] text-[#DAFAFF] w-1/4 p-2 rounded-lg md:w-4/5' type="submit" onClick={onLogin} >Login</button>
            </form>
        </div>
    )
}

export default Login
