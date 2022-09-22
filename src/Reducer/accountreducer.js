import axios from "axios";
import instance from "../api/api"
import { Link, useNavigate } from 'react-router-dom'

const RegisterReducer = (state={},action)=>{

    //action:{
// payload:"",
// type:""
    //}
    



 switch(action.type){
    case "Register":

        const reg = async(values)=>{
            try{
       await instance.post('/server/users/register',values);
       
            }
            catch(err){
                console.log(err);
            }
        }
reg(action.payload);  //function call
        return state = action.payload;
        break;
        
        case "Login":
            const log = async(values)=>{
                try{
                   const data =  await instance.post('server/users/signin',values)
                   
                   localStorage.setItem("token",data.data.token);
                   localStorage.setItem("user",data.data.userid);
                   localStorage.setItem("email",data.data.email)
                }
                catch(err){
                    console.log(err);
                }
            }
            log(action.payload);
            return state = action.payload;
            break;
        

        default:
            return state;
            break;
 }
 
 
}

export default RegisterReducer