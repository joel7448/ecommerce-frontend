import { CheckCircle } from "@mui/icons-material"
import { Link } from "react-router-dom"
import "./checkoutsuccess.css"

function Checkoutsuccess() {
  return (
    <div className='CHECKOUTSUCCESS'>
      <div >
        <CheckCircle className="success"/>
      Payment successfull....
      </div>
<Link to="/home" className="direct">Shop more</Link>
    </div>
  )
}

export default Checkoutsuccess