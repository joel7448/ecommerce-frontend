import "./favorites.css";
import Navbar from "../Navbar/Navbar";
import Search from "../Search/Search";
import { Favorite,StarOutlined,StarBorderOutlined } from "@mui/icons-material";


function Favorites() {
  return (
    <div className="favorite-item">
 <Navbar></Navbar>
 <div className='card-containers' >
   
 

     
     <div className="card">
        <div className="favorite-box">
        <Favorite  className="favorites" /> 
        </div>
<img src="https://media.istockphoto.com/photos/decorative-banana-plant-in-concrete-vase-isolated-on-white-background-picture-id1380361370?b=1&k=20&m=1380361370&s=170667a&w=0&h=kldDZg4W-vuQpFn8EXiHX0TQAALI80FVNEnQUzF1zc8="/>
<h3>Areca Palm</h3>
<div className="stars">
<StarOutlined className="staricons"/>
<StarOutlined className="staricons"/>
<StarOutlined className="staricons"/>
 
 <StarBorderOutlined className="staricon"/>
 <StarBorderOutlined className="staricon"/>
</div>
<div>
 <div className="pricetag">
 <p className="pricetag-p">Price <h4 className="pricetag-h4">$ 10</h4></p>
 </div>
 <div className="addtocart">
<button>Add to cart</button>
 </div></div>
     </div>

      
     <div className="card">
        <div className="favorite-box">
        <Favorite  className="favorites" /> 
        </div>
<img src="https://media.istockphoto.com/photos/decorative-banana-plant-in-concrete-vase-isolated-on-white-background-picture-id1380361370?b=1&k=20&m=1380361370&s=170667a&w=0&h=kldDZg4W-vuQpFn8EXiHX0TQAALI80FVNEnQUzF1zc8="/>
<h3>Areca Palm</h3>
<div className="stars">
<StarOutlined className="staricons"/>
<StarOutlined className="staricons"/>
<StarOutlined className="staricons"/>
 
 <StarBorderOutlined className="staricon"/>
 <StarBorderOutlined className="staricon"/>
</div>
<div>
 <div className="pricetag">
 <p className="pricetag-p">Price <h4 className="pricetag-h4">$ 10</h4></p>
 </div>
 <div className="addtocart">
<button>Add to cart</button>
 </div></div>
     </div>

 
     <div className="card">
        <div className="favorite-box">
        <Favorite  className="favorites" /> 
        </div>
<img src="https://media.istockphoto.com/photos/decorative-banana-plant-in-concrete-vase-isolated-on-white-background-picture-id1380361370?b=1&k=20&m=1380361370&s=170667a&w=0&h=kldDZg4W-vuQpFn8EXiHX0TQAALI80FVNEnQUzF1zc8="/>
<h3>Areca Palm</h3>
<div className="stars">
<StarOutlined className="staricons"/>
<StarOutlined className="staricons"/>
<StarOutlined className="staricons"/>
 
 <StarBorderOutlined className="staricon"/>
 <StarBorderOutlined className="staricon"/>
</div>
<div>
 <div className="pricetag">
 <p className="pricetag-p">Price <h4 className="pricetag-h4">$ 10</h4></p>
 </div>
 <div className="addtocart">
<button>Add to cart</button>
 </div></div>
     </div>

 
     <div className="card">
        <div className="favorite-box">
        <Favorite  className="favorites" /> 
        </div>
<img src="https://media.istockphoto.com/photos/decorative-banana-plant-in-concrete-vase-isolated-on-white-background-picture-id1380361370?b=1&k=20&m=1380361370&s=170667a&w=0&h=kldDZg4W-vuQpFn8EXiHX0TQAALI80FVNEnQUzF1zc8="/>
<h3>Areca Palm</h3>
<div className="stars">
<StarOutlined className="staricons"/>
<StarOutlined className="staricons"/>
<StarOutlined className="staricons"/>
 
 <StarBorderOutlined className="staricon"/>
 <StarBorderOutlined className="staricon"/>
</div>
<div>
 <div className="pricetag">
 <p className="pricetag-p">Price <h4 className="pricetag-h4">$ 10</h4></p>
 </div>
 <div className="addtocart">
<button>Add to cart</button>
 </div></div>
     </div>


    </div></div>
  )
}

export default Favorites