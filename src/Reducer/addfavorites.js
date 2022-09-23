const favorites = (state=[],action)=>{

    
    if(action.type==="addtofavorites"){
       
        return state=action.payload;
       
    }
    return state;
     
    }
    
    export default favorites