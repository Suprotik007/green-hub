import React, { useState,  use } from 'react';
import { Link, useNavigate } from 'react-router';
import { AuthContext } from '../provider/Authprovider';
import { Navigate } from 'react-router';
import { ToastContainer, toast } from 'react-toastify';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';

import {auth} from '../Firebase'
import Navbar from '../Components/NavBar';


const LoginBox = () => {
  
   const provider= new GoogleAuthProvider
      const handleGoogleLogin=()=>{
          // e.preventDefault()
          // console.log('google')
          signInWithPopup(auth,provider)
          .then(result=>{
              // console.log(result);
              navigate(location.state ? location.state : '/');
          })
          .catch(error=>{
              console.log(error);
              
          })}
  const {signIn}=use(AuthContext)
  
  const navigate=useNavigate()
  const [email, setEmail] = useState('');
  const handleLogin=(e)=>{
    e.preventDefault()
    // console.log(e.target);
  
    const email=e.target.email.value
    const password=e.target.password.value
    // console.log({email,password})
    signIn(email,password)
    .then((result)=>{
      const user=result.user
      console.log(user);
      toast.success('Login Successful')
      setTimeout(() => {
        navigate(location.state ? location.state : '/');
      }, 1000); 
      

       
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      toast.error(errorMessage)
    });
  }


    return (
      
        <div className=''>
  <Navbar></Navbar>
            <div className="hero  min-h-screen">
    
    <div className="card bg-black text-teal-300   p-5 rounded-2xl w-full max-w-sm shrink-0 shadow-2xl">
      <div className="card-body">
      <h1 className="text-4xl  mb-10 font-bold text-center">Login now!</h1>
        <form  onSubmit={handleLogin} className="fieldset">
          <label className="label font-semibold">Email</label>
          <input type="email" required name='email' className="input text-black font-semibold" placeholder="Email"   value={email}
              onChange={(e) => setEmail(e.target.value)}/>
          <label className="label font-semibold">Password</label>
          <input type="password" required name='password' className="input text-black font-semibold" placeholder="Password" />
         

        
          <button type='submit' className="btn btn-info mt-4">Login</button><ToastContainer />
          <button onClick={handleGoogleLogin} className="btn bg-red-500 text-white ">
 
  Login with Google
</button> 

          <p className=' font-semibold text-center mt-3'>Don’t Have An Account ? <Link to='/reg'> <span className='text-yellow-400 font-semibold'>Register</span></Link></p>
        </form>
      </div>
    </div>
    
  </div>
  
</div>
    );
};

export default LoginBox;