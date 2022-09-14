import './register.css'
import {Link,useNavigate} from "react-router-dom";
import { useFormik } from 'formik';
import axios from 'axios';
import {userregister} from "../Action-creator/account-action"
import { bindActionCreators } from 'redux';
import { actionCreators } from '../Action-creator';

import { useDispatch, useSelector } from 'react-redux';
function Register() {

  const account = useSelector(state=>state.account);
  const dispatch = useDispatch();
  const {userregister} = bindActionCreators(actionCreators,dispatch);
const navigate = useNavigate();
const formik = useFormik({
  initialValues : {
    firstname : "",
    lastname : "",
    address:"",
    city :"",
    country:"",
    pincode:"",
    email:"",
    password:"" 
  },
 onSubmit: (values)=>{
 userregister(values);
 navigate("/login")
 }
})



  return (
    <div className='register'>
        <div className='picture'>
         <h1>Cranberry</h1>
        </div>
        <div className='forms'>
            
            <form onSubmit={formik.handleSubmit}>
                <input className='name x' type="text" name='firstname' value={formik.values.firstname}  onChange={formik.handleChange} placeholder='First Name'></input> 
                <input className='lastname x' type="text" name='lastname' value={formik.values.lastname}  onChange={formik.handleChange} placeholder='Last Name'></input>
                <input className='Block x' type="text" name='address' value={formik.values.address}  onChange={formik.handleChange} placeholder='Address'></input>
                <input className='city x' type="text" name='city' value={formik.values.city}  onChange={formik.handleChange} placeholder='city'></input>
                <div className='country'>
                <input className='country y' type="text" name="country" value={formik.values.country}  onChange={formik.handleChange} placeholder = "country"></input>
                <input className='pincode y' type="text" name="pincode"  value={formik.values.pincode}  onChange={formik.handleChange} placeholder="pincode"></input>
                </div>
                <input className='email x' type="email" name="email"  value={formik.values.email}  onChange={formik.handleChange} placeholder="Email"></input>
                <input className='password x' type="password" name="password"  value={formik.values.password}  onChange={formik.handleChange} placeholder="Password"></input>
                <div className='buttons'>
                <button className='btn' type='submit'>Submit</button>
                <hr/>
                <span>Already a user?<Link className='loginlink' to="/login"> Login</Link></span>
                </div>
             </form>
        </div>

    </div>
  )
}

export default Register