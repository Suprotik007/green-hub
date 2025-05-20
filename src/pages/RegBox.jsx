// // import React, { use, useEffect, useState } from 'react';
// // import { Link, useLocation, useNavigate } from 'react-router';
// // // import { AuthContext } from '../provider/AuthProvider';
// // import { AuthContext } from '../provider/Authprovider';
// // import { ToastContainer, toast } from 'react-toastify';
// // import { FaEye, FaEyeSlash } from "react-icons/fa";
// // import { IoEyeOutline } from "react-icons/io5";
// // import Google from '../Components/Google';
// // import { useContext } from 'react';



// // const RegBox = () => {
// //   const location = useLocation();

// //     useEffect(() => {
// //         document.title = ' Registration';  
// //     }, [location.pathname]);
  
// //   const [showPass,setShowPass]=useState(false)
// //   const {createUser,setUser,updateUser}=useContext(AuthContext)
// //   const navigate=useNavigate()
  
// //   const handleRegister=(e)=>{
// //     e.preventDefault()
// //     // console.log(e.target); 
// //     const name=e.target.name.value
// // const photo=e.target.photo.value
// // const email=e.target.email.value
// // const password=e.target.password.value
// // // console.log({name,photo,email,password});
// // const passVerify = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;

// //   if (!passVerify.test(password)) {
// //     toast.error("Password must be at least 6 characters long and include at least one uppercase and one lowercase letter.");
// //     return; 
// //   }
// // createUser(email,password)
// // .then(result=>{
// //   const user=result.user
// //   updateUser({displayName:name,photoURL:photo})
// //   .then(()=>{
// //     setUser({...user});
// //     navigate('/')
// //   })
// //   .catch((error)=>{
// //     console.log(error);
// //     setUser(user)
    
// //   })
// //   toast.success('Registration successful')
  
// // })
// // .catch((error) => {
// //   const errorCode = error.code;
// //   const errorMessage = error.message;
// //   // alert(errorMessage)
// //   toast.error(errorMessage);

// // });
    
// //   }


  
// //     return (
// //       <div>
// //       <div>
       
// //        <div className="hero my-10  min-h-screen">

// // <div className="card bg-black text-white  p-5 rounded-2xl w-full max-w-sm shrink-0 shadow-2xl">
// //  <div className="card-body">
// //  <h1 className="text-4xl font-mono mb-10 font-bold text-center">Register now!</h1>
// //    <form onSubmit={handleRegister}  className="fieldset">
// //    <label className="label font-semibold">Name</label>
// //     <input type="text" required name='name' className="input text-black font-semibold" placeholder="Enter your name" />
// //     <label className="label font-semibold">Photo URL</label> 
// //     <input type="text" required name='photo' className="input text-black font-semibold" placeholder="Photo URL" />
// //      <label className="label font-semibold">Email</label>
// //      <input type="email" required name='email' className="input text-black font-semibold" placeholder="Email" />
// //      <label className="label font-semibold">Password</label>
// //      <div className='relative'>
// //      <input type={showPass ? 'text' : 'password'} required name='password' className="input text-black font-semibold" placeholder="Password" />
// //      <button onClick={()=>{setShowPass(!showPass)}} className='absolute top-3 right-3 bg-black p-1'>{showPass? <FaEyeSlash></FaEyeSlash> : <IoEyeOutline />}</button>
// //      </div>
     


// //      <button type='submit' className="btn btn-info mt-4">Register</button>  <ToastContainer />

// //      <Google></Google>

// //      <p className=' font-semibold text-center mt-3'>Already Have An Account ? <Link to='/auth/login'> <span className='text-yellow-400 font-semibold'>Login</span></Link></p>
// //    </form>
// //  </div>
// // </div>
// // </div>
// // </div>
// //   </div>
// //     );
// // };

// // export default RegBox;


// import React, { useEffect, useState, useContext } from 'react';
// import { Link, useLocation, useNavigate } from 'react-router';
// import { AuthContext } from '../provider/Authprovider';
// import { ToastContainer, toast } from 'react-toastify';
// import { FaEye, FaEyeSlash } from "react-icons/fa";
// import { IoEyeOutline } from "react-icons/io5";
// import Google from '../Components/Google';

// const RegBox = () => {
//   const location = useLocation();

//   useEffect(() => {
//     document.title = ' Registration';  
//   }, [location.pathname]);

//   const [showPass, setShowPass] = useState(false);
//   const { createUser, setUser, updateUser } = useContext(AuthContext);
//   const navigate = useNavigate();

//   const handleRegister = (e) => {
//     e.preventDefault();

//     const name = e.target.name.value;
//     const photo = e.target.photo.value;
//     const email = e.target.email.value;
//     const password = e.target.password.value;

//     const passVerify = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9]).{8,}$/;


//     if (!passVerify.test(password)) {
//       toast.error("Password must be at least 8 characters long and include at least one uppercase and one lowercase letter and one special character.");
//       return; 
//     }

//     console.log({ name, photo, email, password });

//     createUser(email, password)
//       .then(result => {
//         const user = result.user;
//         updateUser({ displayName: name, photoURL: photo })
//           .then(() => {
//             setUser({ ...user });
//             navigate('/');
//           })
//           .catch(error => {
//             console.error('Update user error:', error);
//             setUser(user);
//           });
//         toast.success('Registration successful');
//       })
//       .catch(error => {
//         console.error('Create user error:', error);
//         toast.error(error.message);
//       });
//   };

//   return (
//     <div>
//       <div className="hero my-10 min-h-screen">
//         <div className="card bg-black text-white p-5 rounded-2xl w-full max-w-sm shrink-0 shadow-2xl">
//           <div className="card-body">
//             <h1 className="text-4xl font-mono mb-10 font-bold text-center">Register now!</h1>
//             <form onSubmit={handleRegister} className="fieldset">
//               <label className="label font-semibold">Name</label>
//               <input type="text" required name='name' className="input text-black font-semibold" placeholder="Enter your name" />
//               <label className="label font-semibold">Photo URL</label> 
//               <input type="text" required name='photo' className="input text-black font-semibold" placeholder="Photo URL" />
//               <label className="label font-semibold">Email</label>
//               <input type="email" required name='email' className="input text-black font-semibold" placeholder="Email" />
//               <label className="label font-semibold">Password</label>
//               <div className='relative'>
//                 <input type={showPass ? 'text' : 'password'} required name='password' className="input text-black font-semibold" placeholder="Password" />
//                 <button type="button" onClick={() => setShowPass(!showPass)} className='absolute top-3 right-3 bg-black p-1'>
//                   {showPass ? <FaEyeSlash /> : <IoEyeOutline />}
//                 </button>
//               </div>
//               <button type='submit' className="btn btn-info mt-4">Register</button>
//               <ToastContainer />
//               <Google />
//               <p className='font-semibold text-center mt-3'>
//                 Already Have An Account? <Link to='/login'><span className='text-yellow-400 font-semibold'>Login</span></Link>
//               </p>
//             </form>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default RegBox;
