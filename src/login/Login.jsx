import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useFormik } from 'formik'
import './login.css'
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from '../Action-creator';
import {userlogin} from "../Action-creator/account-action"


function Login() {

let navigate = useNavigate();
const account = useSelector(state=>state.account);
const dispatch = useDispatch();
const {userlogin} = bindActionCreators(actionCreators,dispatch);


  const formik = useFormik({
    initialValues : {
     
      email:"",
      password:"" 
    },
   onSubmit: values=>{
    userlogin(values);
    
    navigate("/home")
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