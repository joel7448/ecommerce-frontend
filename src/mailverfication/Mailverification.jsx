import { useFormik } from 'formik'
import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { actionCreators } from '../Action-creator';
import { useSelector,useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import "./mailverification.css"

function Mailverification() {

    const verify = useSelector(state=>state.otpverification);
const dispatch = useDispatch();
const {otpverification}=bindActionCreators(actionCreators,dispatch);



const navigation = useNavigate();
const formik = useFormik({
    initialValues :{
          OTP :"",
       
    },
    validate : (values)=>{
        const errors={};
      if(!values.OTP){
        errors.OTP = "please enter Email Address"
      }
     
     
      return errors;
    },
    onSubmit:(values)=>{
    values.email = localStorage.getItem("email");
        otpverification(values);
        navigation("/passwordchange")
  
      }
})


  return (
    <div className='mailverficationwrapper'>
    <form className='mailverificationform' onSubmit={formik.handleSubmit}>
        <h1 style={{color:"darkblue"}}>OTP VERIFICATION</h1>
        <input type="text" name="OTP" onChange={formik.handleChange} value={formik.values.OTP} placeholder="Enter OTP"/>
        <button className='mailverificationbutton'>Submit</button>
        
    </form>
    </div>
  )
}

export default Mailverification