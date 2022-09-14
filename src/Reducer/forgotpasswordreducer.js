
import instance from "../api/api"
const forgotpasswordreducer = (state=[],action)=>{

    
    if(action.type==="forgotpassword"){
       
        const email =async (value)=>{
          try{
            // console.log(value);
           await instance.put(`/server/users/forgotpassword`,value);
           localStorage.setItem("email",value.email);
          
          }
          catch(err){
            console.log(err);
          }
        }
        email(action.payload);
    }
    return state;
     
    }
    
    export default forgotpasswordreducer;