import React from 'react'
import { Link } from 'react-router-dom'

import './Header.css'

const Header = () => {
  return (
<div className='header'>
     <div>
     <Link to='/'>
         <img src='https://www.dbs.com/in/iwov-resources/flp/splitter/images/dbs_logo.svg'></img>
     </Link>
     </div>   
    <div className='options'>
    <span><Link to='/VmDashboard'>VMDashboard</Link></span>  
    <span><Link to='/HniDashboard'>HniDashboard</Link></span>   
    </div>
</div>
  )
}

export default Header