import { combineReducers } from "redux";
import RegisterReducer from "./accountreducer"
import product from "./productreducer"
import cart from "./cartreducer"
import forgotpasswordreducer from "./forgotpasswordreducer";
import  otpverificationreducer from "./otpverifyreducer"
import passwordchangereducer from "./passwordchangereducer";
import favorites from "./addfavorites";


const reducers = combineReducers({
    account : RegisterReducer,
     product : product,
     cart : cart,
     forgotpasswordreducer : forgotpasswordreducer,
     otpverification:otpverificationreducer,
     passwordresetreducer : passwordchangereducer,
     favorites:favorites
})

export default reducers