"use client"

import React, { useRef, useState } from 'react'
import '../styles/Signup.css'
import { auth } from '../../../firebase';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
// import { useNavigate } from 'react-router-dom';
const Signup = () => {

    //User authentication states
    const emailRef = useRef(null)
    const passwordRef = useRef(null)
    const cnfpasswordRef = useRef(null)
    const [signUp, setSignUp] = useState(false)
    const [error, setError] = useState(false)
    const [errorMessage, setErrorMessage] = useState(null)
    
    //Register function
    const register = (e) => {
        e.preventDefault();
        setSignUp(true)
        createUserWithEmailAndPassword(
            auth,
            emailRef.current.value,
            passwordRef.current.value
        ).then((authUser)=>{
            console.log(authUser)
        }).catch((error)=>{
          setErrorMessage("Invalid email/password")
        })
    };

    //Sign in function
    const signIn = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth,
            emailRef.current.value,
            passwordRef.current.value
            ).then((authUser)=>{
                console.log(authUser)
                setError(false)
                navigate("/")
            }).catch((error)=>{
            setError(true)
    })
    }

  return (
    <div className='signUpScreen'>
      <form>
        {signUp ? <h1>Sign Up</h1> : <h1>Sign In</h1>}
        <input ref={emailRef} type="email" placeholder='Email' />
        <input ref={passwordRef} type="password" placeholder='Password'/>
        { error && <p className="signUpScreen__error">Enter valid credentials</p> }
        <input ref={cnfpasswordRef} type="password" placeholder='Confirm Password'/>
        { errorMessage && <p className="signUpScreen__error">{errorMessage}</p> }
        {signUp ? <button type='submit' onClick={register}>Sign Up</button> : <button type='submit' onClick={signIn}>Sign In</button>}
        {!signUp && <h4><span className='signUpScreen__grey'>
            New to Netflix?</span> 
            <span className='signUpScreen__link' onClick={()=>setSignUp(true)}> Sign Up now.</span>
            </h4>
        } 
      </form>
    </div>
  )
}

export default Signup


export default SignUp;



// import React from 'react'
// import { createUserWithEmailAndPassword } from "firebase/auth";
// import { useRef, useState } from 'react'
// import { auth } from '../../../firebase';
// const LoginPage = () => {
//     const { cartCount, cartDetails, removeItem, totalPrice, redirectToCheckout } = useShoppingCart()
//     const emailRef = useRef(null)
//     const passwordRef = useRef(null)
//     const cnfpasswordRef = useRef(null)
//     const addressRef = useRef(null)
//     const phoneRef = useRef(null)
//     const [error, setError] = useState(false)

//     //Register function
//     const register = (e: any) => {
//         e.preventDefault();
//         createUserWithEmailAndPassword(
//             auth,
//             emailRef.current.value,
//             passwordRef.current.value
//         ).then((authUser)=>{
//             console.log(authUser)
//         }).catch((error)=>{
//           setError(true)
//           alert('Invalid credentials: ',error.message)
//         })
//     };


//   return (
//     <div className='mx-auto'>
//     <form>
//       <h1>Sign Up</h1>
//       <input ref={emailRef} type="email" placeholder='Email' />
//       <input ref={passwordRef} type="password" placeholder='Password'/>
//       <input ref={cnfpasswordRef} type="password" placeholder='Confirm Password'/>
//       <input ref={addressRef} type="text" placeholder='Enter address'/>
//       <input ref={phoneRef} type="text" placeholder='+91 - '/>
      
//       { error && <p className="signUpScreen__error">Enter valid credentials</p> }
//       <button type='submit' onClick={register}>Sign Up</button>
//     </form>
//   </div>
//   )
// }

// export default LoginPage
