import instance from "../api/api"

const otpverificationreducer = (state=[],action)=>{

if(action.type==="otpverification"){
console.log(action.payload.email);
const verify =async (otp,email)=>{
    
try{
    
const bool = await instance.post(`server/users/forgotpassword/${otp}`,{email:email});

localStorage.setItem("otp",bool.data.otp);

}
catch(err){
    console.log(err);
}



}
verify(action.payload.OTP,action.payload.email);
}
return state;




}

export default otpverificationreducer;