import "./favorites.css";
import Navbar from "../Navbar/Navbar";
import Search from "../Search/Search";
import { Favorite,StarOutlined,StarBorderOutlined } from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../Action-creator";
import {getproducts,addtofavorites} from "../Action-creator/account-action"
import { useEffect } from "react";
import instance from "../api/api";

function Favorites() {


  const favorites = useSelector(state=>state.favorites);
  const dispatch = useDispatch();
  const {getproducts,addtofavorites} = bindActionCreators(actionCreators,dispatch);

const fetchdata = async()=>{
  try{
  const data = await instance.get(`/server/products/favorites`,{
    headers: {
      Authorization: `${localStorage.getItem("token")}`,
    },
  })
  addtofavorites(data.data);
}
catch(err){
  console.log(err);
}
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
    <div className="favorite-item">
 <Navbar></Navbar>
 <div className='card-containers' >
   
 

     
     {favorites.map((x)=>{
      return(<div className="card">
      <div className="favorite-box">
      <Favorite  className="favorites" /> 
      </div>
<img src={x.image}/>
<h3>{x.Productname}</h3>
<div className="stars">
<StarOutlined className="staricons"/>
<StarOutlined className="staricons"/>
<StarOutlined className="staricons"/>

<StarBorderOutlined className="staricon"/>
<StarBorderOutlined className="staricon"/>
</div>
<div>
<div className="pricetag">
<p className="pricetag-p">Price <h4 className="pricetag-h4">${x.price}</h4></p>
</div>
<div className="addtocart">
<button onClick={()=>{cartitems(x)}}>Add to cart</button>
</div></div>
   </div>)
     })}



    </div></div>
  )
}

export default Favorites