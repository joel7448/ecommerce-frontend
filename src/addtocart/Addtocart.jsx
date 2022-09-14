
import { ArrowForward, Delete, ShoppingCart } from '@mui/icons-material'
import { IconButton, Tooltip } from '@mui/material'
import Navbar from '../Navbar/Navbar'
import Sidebar from '../sidebar/Sidebar'
import {addtocart} from "../Action-creator/account-action"
import { useSelector, useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from "../Action-creator";
import instance from "../api/api"
import { useEffect } from "react"
import './addtocart.css'
import { useState } from 'react'

function Addtocart() {

  const carts = useSelector(state=>state.cart);
  const dispatch = useDispatch();
  const {addtocart} = bindActionCreators(actionCreators,dispatch);
const [total,setotal]=useState();
  const fetchdata=async()=>{
    const email = localStorage.getItem("email");
    const data = await instance.get(`/server/addtocart/cart/${email}`,{
      headers: {
        Authorization: `${localStorage.getItem("token")}`,
      },
    })
    addtocart(data.data.cart);
    setotal(data.data.pipeline[0].Amount)

  }

  useEffect(()=>{
    fetchdata();

  },[])

  const handledelete = async(productid)=>{
    try{
await instance.delete(`/server/addtocart/cart/${productid}`,{
  headers: {
    Authorization: `${localStorage.getItem("token")}`,
  },
});
alert("successfully deleted");
    }
    catch(err){
      console.log(err);
    }
  }
const increment = async(productid)=>{
  try{
    await instance.put(`/server/addtocart/cart/increase/${productid}`,{
      headers: {
        Authorization: `${localStorage.getItem("token")}`,
      },
    })

  }
  catch(err){
    console.log(err);
  }
}

const decrement = async(productid)=>{
  try{
await instance.put(`/server/addtocart/cart/decrease/${productid}`,{
  headers: {
    Authorization: `${localStorage.getItem("token")}`,
  },
})
  }
  catch(err){
    console.log(err);
  }
}

  return (
  <>
<Navbar></Navbar>
<div className='CartPage'>
  <div className='cartitems'>

<h2 className='shopping-cart'>
  Shopping Cart
</h2>
<hr/>
<div className='product-details'>
<span className='titles product-detail'>PRODUCT DETAILS</span>
<span className='titles-quantity'>QUANTITY</span>
<span className='titles-price'>PRICE</span>
<span className='titles-total'>TOTAL</span>
</div>
<hr/>
{carts.map((x)=>{
  return(<><div className='cart-products'>
  <img className='product-image' src={x.image} alt=""/>
 <div className='product-description'>
 <h4 className="product-title">{x.Productname}</h4>
 <p className='product-size'>Category :<span className='inline'>{x.category}</span>  </p>
 <p className='product-code'>Product code : <span className='inline'>8638423</span></p>
 </div>
 <div className='product-details-others'>
 <div className='quantity'>
  <button className='add-quantity' onClick={()=>{increment(x._id)}}>+</button><p className='product-quantity'>{x.quantity}</p>
  <button className='add-quantity' onClick={()=>{decrement(x._id)}}>-</button>
 </div>
 <div className='price'>
  $ {x.price}
 </div>
 <div className='total-price'>
 $ {x.total}
 </div>
 <div className='total-delete'>

 <Tooltip title="Delete">
  <IconButton>
    <Delete onClick={()=>{handledelete(x._id)}} />
  </IconButton>
</Tooltip>
 </div>

 </div>
 
</div>

<hr/></>)
})}




<div className='grand-total-price'>
<h2>Total</h2>
<h2>$ {total}</h2>

</div>
<div className='buynow-button'>
<button className='buynow-btn'><h1 className='buynow'>Buy Now</h1><ArrowForward/> </button>
</div>



  </div>
  
</div>


</>
  )
}

export default Addtocart