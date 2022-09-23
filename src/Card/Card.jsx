import "./Card.css"
import {StarBorderOutlined, StarOutlined,Favorite,FavoriteBorderOutlined, FavoriteOutlined, FavoriteBorder} from "@mui/icons-material"
import Search from "../Search/Search"
import Sidebar from '../sidebar/Sidebar';
import Navbar from '../Navbar/Navbar';
import { useEffect, useState } from "react"
import { useSelector, useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from "../Action-creator";
import {getproducts} from "../Action-creator/account-action"
import Mobilesidebar from "../sidebar/Mobile-sidebar";
import instance from "../api/api"
import axios from "axios"
import { toast } from "react-toastify";
import SearchIcon from '@mui/icons-material/Search';
import { useFormik } from "formik";

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
const handlefavorites = async(productid)=>{
  try{
    
  const update = await instance.put(`server/products/addfavorites/${productid}`,{
    headers: {
      Authorization: `${localStorage.getItem("token")}`,
    },
    
  });
fetchdata();

  }
  catch(err){
    console.log(err);
  }
}

const formik = useFormik({
  initialValues:{
    name:""
  },
  onSubmit:async (values)=>{
    try{
 const data = await instance.get(`/server/products/menu/${values.name}`,{
    headers: {
      Authorization: `${localStorage.getItem("token")}`,
    },
   })

getproducts([data.data]);

  }
  catch(err){
    console.log(err);
  }
  }
})
  


  return (
    <>
    <Navbar></Navbar>
    <div className="flex" style={{display:"flex"}}>
     <Sidebar></Sidebar>

     
    <div className='card-container' >
    <Mobilesidebar></Mobilesidebar>
    <form onSubmit={formik.handleSubmit}>
      
      <div className='Searchbox' >
      <input className='Search' name="name" value={formik.values.name} onChange={formik.handleChange} placeholder='Search'></input>
      <button className="searchbutton" type="submit">
   <SearchIcon  className='searchicon'/>
   </button>
 
    </div>
    </form>
    <div></div>
 

     
   { product.map((x)=>{
    return(<div className="card">
    <div className="favorite-box" onClick={()=>{handlefavorites(x._id)}}>
    {x.favorites?<Favorite className="favorites"/>:<FavoriteBorder  className="favorites" /> }
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

