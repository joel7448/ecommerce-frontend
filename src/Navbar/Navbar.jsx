import { FavoriteBorderOutlined, LocalMallOutlined, Logout, Menu } from "@mui/icons-material"
import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import "./navbar.css"

function Navbar() {
const navigate = useNavigate();
const [bool,setbool]=useState(false);
const handledropdown = ()=>{
    if(! bool){
var dropdown=document.querySelector(".dropdowns");
dropdown.setAttribute("style", "display: none");
setbool(true);

    }
    else{
        var dropdown=document.querySelector(".dropdowns");
        dropdown.setAttribute("style", "display: inline");
setbool(false);

    }


}

const out = ()=>{
   localStorage.removeItem("user");
   localStorage.removeItem("token");
   localStorage.removeItem("email");
   navigate("/login");
}

  return (<>    <div className="navbar">
        <div className="navbar-contents">
            <div className="logo"><img src="https://scalebranding.com/wp-content/uploads/2020/06/green-tree-circle-01-1080x1080.png"/><h3>Cranberry</h3></div>
            <div className="navbar-sections">
                <Link className="homelink" to="/home">Home</Link>
             
                 <p>Plant Care</p> <p>Workshops</p> <p>Blogs</p>
            </div>
            <div className="profile-pic-container">
                <div className="cart"><div className="number">1</div><Link to="/mycart"><LocalMallOutlined className="mall" /></Link></div>
            
            <Link to="/myfavorites"><FavoriteBorderOutlined className="heart"/></Link>
            
            <div className="profile-pic">
               
                <img src="https://qph.cf2.quoracdn.net/main-qimg-7fb93146f5e4e470f5a590d2fc38be3b-lq" alt=""/>
            </div>
            <div className="logout" onClick={()=>{out()}}> <Logout className="logout"  ></Logout></div>

            </div>
        </div>

        <hr className="line"/>
        
    </div>

    <div className="mobile-navbar">
   <div className="mobile-logo"> <img src="https://scalebranding.com/wp-content/uploads/2020/06/green-tree-circle-01-1080x1080.png"/></div>
        <div className="mobile-nav"><Menu className="mobile-menu" onClick={()=>{handledropdown()}}></Menu></div>

    </div>
    
    <div className="dropdowns">
        <h3>Shops</h3>
        <hr className="dropdown-divider"/>
        <h3>Plant Care</h3>
        <hr className="dropdown-divider"/>
        <h3>Workshops</h3>
        <hr className="dropdown-divider"/>
        <h3>Blogs</h3>
        <hr className="dropdown-divider"/>
        <h3>Add to Cart</h3>
        <hr className="dropdown-divider"/>
        <h3>Favorites   </h3>
        <hr className="dropdown-divider"/>
        <h3>Logout</h3>
        <hr className="dropdown-divider"/>

    </div>
    
    </>

  )
}

export default Navbar