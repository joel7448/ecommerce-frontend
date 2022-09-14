import "./Card.css"
import {StarBorderOutlined, StarOutlined,Favorite,FavoriteBorderOutlined} from "@mui/icons-material"
import Search from "../Search/Search"
import Sidebar from '../sidebar/Sidebar';
import Navbar from '../Navbar/Navbar';
import { useEffect } from "react"
import { useSelector, useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from "../Action-creator";
import {getproducts} from "../Action-creator/account-action"
import Mobilesidebar from "../sidebar/Mobile-sidebar";
import instance from "../api/api"
import axios from "axios"

function Card() {

  const product = useSelector(state=>state.product);
  
  const dispatch = useDispatch();
  const {getproducts} = bindActionCreators(actionCreators,dispatch);

  const fetchdata=async()=>{
    const data = await instance.get(`/server/products/menu`,{
      headers: {
        Authorization: `${localStorage.getItem("token")}`,
      },
    })
    getproducts(data.data);
  }

  useEffect(()=>{
    fetchdata();

  },[])
 
const cartitems = async(product)=>{
  try{
    product.quantity = 1;
    product.email = localStorage.getItem("email");
const cartdata = await instance.post(`/server/addtocart/cart`,product,{
  headers: {
    Authorization: `${localStorage.getItem("token")}`,
  },
  
});
console.log(cartdata.data);
  }
  catch(err){
    console.log(err);
  }



}
  


  return (
    <>
    <Navbar></Navbar>
    <div className="flex" style={{display:"flex"}}>
     <Sidebar></Sidebar>

     
    <div className='card-container' >
    <Mobilesidebar></Mobilesidebar>
    <div><Search></Search></div>
    <div></div>
 

     
   { product.map((x)=>{
    return(<div className="card">
    <div className="favorite-box">
    <Favorite  className="favorites" /> 
    </div>
<img src={x.image}/>
<h3>{x.Productname}</h3>

<div>
<div className="pricetag">
<p className="pricetag-p">Price <h4 className="pricetag-h4">$ {x.price}</h4></p>
</div>
<div className="addtocart">
<button onClick={()=>{cartitems(x)}} >Add to cart</button>
</div></div>
 </div>)
   }) }
    

    
     </div>
     </div>
    
  
    </>
  )
}

export default Card

