import { useFormik } from "formik"
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { bindActionCreators } from "redux";
import { actionCreators } from "../Action-creator";
import "./passwordchange.css"

function Passwordchange() {
const navigate = useNavigate();
const verify = useSelector(state=>state.passwordresetreducer);
const dispatch = useDispatch();
const {passwordchange}=bindActionCreators(actionCreators,dispatch);



const formik = useFormik({
    initialValues:{
        password:"",
        confirmpassword:""
    },
    validate : (values)=>{
        const errors={};
        if(!values.password){
            errors.password = "please enter password"
          }
          if(values.password!=values.confirmpassword){
            errors.confirmpassword="please enter the same password"
          }
          return errors;
    },
    onSubmit : (values)=>{
        console.log(values);
        if(localStorage.getItem("otp")){
          values.email = localStorage.getItem("email");
      passwordchange(values);
      localStorage.removeItem("otp");
      localStorage.removeItem("email");
      alert("Password has been updated successfully");
      navigate("/login");
        }
        else{
          alert("Password reset unsuccessful !")
        }
        
    }
})

  return (
    <div>
        <form className="passwordresetform" onSubmit={formik.handleSubmit}>
            <h1 className="resetheader">Password Reset</h1>
            <input type="password" name="password" onChange={formik.handleChange}  values={formik.values.password} placeholder="password"/>
            <input type="password" name="confirmpassword"  onChange={formik.handleChange} values={formik.values.confirmpassword}  placeholder="Confirm password"/>
            {formik.errors.confirmpassword ? <p style={{marginTop:"0px"}}>{formik.errors.confirmpassword}</p>:null}
            <button className="passwordresetbutton">Reset Password</button>
        </form>
    </div>
  )
}

export default Passwordchange