

const product = (state=[],action)=>{

    
if(action.type==="getproduct"){
   
    return state=action.payload;
   
}
return state;
 
}

export default product