import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useFormik } from 'formik'
import './login.css'

import instance from '../api/api';


function Login() {

let navigate = useNavigate();



  const formik = useFormik({
    initialValues : {
     
      email:"",
      password:"" 
    },
   onSubmit: async(values)=>{
    try{
      const data =  await instance.post('server/users/signin',values)
      
      localStorage.setItem("token",data.data.token);
      localStorage.setItem("user",data.data.userid);
      localStorage.setItem("email",data.data.email)
      alert("Successfully logged in !");
      navigate("/home")
   }
   catch(err){
       console.log(err);
   }

    
    
   }
  })




  return (
    <div className='login'>
    <div className='pictures'>
     <h1>Cranberry</h1>
    </div>
    <div className='form'>
        
        <form onSubmit={formik.handleSubmit}>
           
            <input className='email2' type="email" name="email" value={formik.values.email}  onChange={formik.handleChange} placeholder="Email"></input>
            <input className='password2' type="password" name="password"  value={formik.values.password}  onChange={formik.handleChange} placeholder="Password"></input>
          <button type='submit'  className='btn'>Submit</button>
          <Link to='/forgot-password' className='link'><p style={{marginTop:"10px"}}>Forgot Password</p></Link>
          <Link to="/registration" className='link'><p style={{marginTop:"0px"}}>New here Click to signup</p></Link>
         </form>
    </div>

</div>
  )
}

export default Login