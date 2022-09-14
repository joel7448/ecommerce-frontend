

export const userregister = (user) =>{
  
    return (dispatch)=>{
       dispatch({
        type:'Register',
        payload : user
       })
       
    }
   }

   
export const userlogin = (user) =>{
  
    return (dispatch)=>{
       dispatch({
        type:'Login',
        payload : user
       })
       
    }
   }

   export const getproducts =(product)=>{
      
      return (dispatch)=>{
         dispatch({
          type:'getproduct',
          payload : product
         })
         
      }
   }

   export const addtocart =(product)=>{
      
      return (dispatch)=>{
         dispatch({
          type:'addtocart',
          payload : product
         })
         
      }
   }

   export const forgotpassword =(credentials)=>{
      
      return (dispatch)=>{
         dispatch({
          type:'forgotpassword',
          payload :credentials
         })
         
      }
   }

   export const otpverification =(otp)=>{
      
      return (dispatch)=>{
         dispatch({
          type:'otpverification',
          payload :otp
         })
         
      }
   }


   export const passwordchange =(password)=>{
      
      return (dispatch)=>{
         dispatch({
          type:'passwordchange',
          payload :password
         })
         
      }
   }