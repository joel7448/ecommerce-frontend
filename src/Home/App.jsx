
import Card from '../Card/Card';

import Search from '../Search/Search';

import Register from '../Register/Register';
import Home from './Home';
import Login from '../login/Login';
import Addtocart from '../addtocart/Addtocart';

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Favorites from '../Favorites/Favorites';
import Mobilesidebar from '../sidebar/Mobile-sidebar';
import Forgotpassword from '../forgotpassword/forgotpassword';
import Mailverification from '../mailverfication/Mailverification';
import Passwordchange from '../passwordchange/Passwordchange';



function App() {





  return (
    <div className="App">
<BrowserRouter>
<Routes>
<Route path='/' element={<Home></Home>}/>
<Route path='/registration' element={<Register></Register>}/>
<Route path='/login' element={<Login></Login>}/>
<Route path='/home' element={<Card></Card>}/>
<Route path='/mycart' element={<Addtocart></Addtocart>}/>
<Route path='/myfavorites' element={<Favorites></Favorites>}/>
<Route path="/forgot-password" element={<Forgotpassword/>}/>
<Route path="/mailverification" element={<Mailverification/>}/>
<Route path="/passwordchange" element={<Passwordchange/>}/>
</Routes>
</BrowserRouter>



    </div>
  );
}

export default App;
