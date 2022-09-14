

const cart = (state=[],action)=>{

    
if(action.type==="addtocart"){
   
    return state=action.payload;
   
}
return state;
 
}

export default cart