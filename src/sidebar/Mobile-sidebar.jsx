import { FilterList } from "@mui/icons-material"
import "./mobile-sidebar.css"

function Mobilesidebar() {
  return (
    <div className='mobilesidebar'>
        <hr className="mobile-sidebar-divider"/>
     
<div className='mobilesidebar-components'>
<h3><FilterList></FilterList></h3>

    <h4 className='mobilesidebar-components-heading'>Gardening</h4>
    <h4 className='mobilesidebar-components-heading'>Planters</h4>
    <h4 className='mobilesidebar-components-heading'>Bulbs</h4>
    <h4 className='mobilesidebar-components-heading'>Seeds</h4>
    <h4 className='mobilesidebar-components-heading'>Fertilizers</h4>
    <h4 className='mobilesidebar-components-heading'>Offers</h4>
    <h4 className='mobilesidebar-components-heading'>Others</h4>
   
</div>

    </div>
  )
}

export default Mobilesidebar