import React from 'react'
import "./home.css"

import {Link} from "react-router-dom";

function Home() {
  return (<>
    <div className='home'>
        <div className='container'>
        <h1> Home is where Plants Are</h1>
        <p>There are many Variations Passages But The Majority Have Suffered </p>
        <Link to="/registration" className='button' >Start Now</Link>
        </div>
   
    </div>
   </>
  )
}

export default Home