import instance from "../api/api"

const passwordchangereducer = (state=[],action)=>{
if(action.type==="passwordchange"){
    console.log(action.payload);
    const postpassword = async(value)=>{
   await instance.put(`/server/users/updatepassword`,value);
   
    }
    postpassword(action.payload);
}
return state;

}

export default passwordchangereducer;