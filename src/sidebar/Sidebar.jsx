import './sidebar.css'
import {KeyboardArrowDownOutlined} from  "@mui/icons-material"
function Sidebar() {
  return (<>
    <div className='sidebar'>
    <p className='filter'>Filter</p>
    <hr className='sidebar-border'/>
    <div className='categories'>
        <p>Categories</p>
        <div className='formss'>
            <div>
        <input  type="checkbox" name="Gardening" id="Gardening" value="Gardening"/>
        <label for="Gardening">Gardening</label>
        </div>
        <div>
        <input type="checkbox" name="Plants" id="Plants" value="Plants"/>
        <label for="Plants">Plants</label>
        </div>
        <div>
        <input type="checkbox" name="Seeds" id="Seeds" value="Seeds"/>
        <label for="Seeds">Seeds</label>
        </div>
        <div>
        <input type="checkbox" name="Bulbs" id="Bulbs"value="Bulbs"/>
        <label for="Bulbs">Bulbs</label>
        </div>
        <div>
        <input type="checkbox" name="planters" id="planters"  value="Planters"/>
        <label for="planters">Planters</label>
        </div>
        <div className='down' >
            <p className='others' style={{marginLeft:"20px"}}>Others</p>
       <KeyboardArrowDownOutlined />
        </div>

        </div>

    </div>
    <hr className='sidebar-border'/>
    <div className='Price-range'>
<p>Price range</p>
<div className='price'><button className='min-button'>Min</button>
<input className='min-price' placeholder=' $ 0'></input></div>
    </div>
    <button className='setprice'>Set price</button>
    <hr className='sidebar-border'/>

    <div className='discount'>
   
        <div className='glass'>
        <h3>Get 30% OFF</h3>
        <p>Share Your referal code and get discount</p>
        </div>
    </div>
    </div>

  

    </>
  )
}

export default Sidebar