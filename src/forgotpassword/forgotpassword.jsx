import { useFormik } from 'formik'
import React from 'react'
import { useSelector,useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import { bindActionCreators } from 'redux';
import { actionCreators } from '../Action-creator';
import "./forgotpassword.css"
function Forgotpassword() {


const forgetpassword = useSelector(state=>state.forgotpasswordreducer);
const dispatch = useDispatch();
const {forgotpassword }=bindActionCreators(actionCreators,dispatch);

const navigation = useNavigate();
const formik = useFormik({
    initialValues :{
        email :"",
       
    },
    validate : (values)=>{
        const errors={};
      if(!values.email){
        errors.email = "please enter Email Address"
      }
     
     
      return errors;
    },
    onSubmit:(values)=>{
        
      forgotpassword(values);
      alert("OTP has been mailed");
      navigation("/mailverification");
 
      }
})


  return (<>

    <div className='forgotpasswordwrapper'>
       
<form className='forgotpasswordform' onSubmit={formik.handleSubmit}>
<h1 className='forgotpasswordtitle'>Forgot Password</h1>
    <input type="email" name='email' onChange={formik.handleChange} value={formik.values.email} placeholder='Enter Email'></input>
       <button  className=' forgotpasswordsubmit'>Submit</button>
     
</form>

    </div>
 
    </>
  )
}

export default Forgotpassword