import React from 'react';

import './NavBar.css'
import {Link} from 'react-router-dom';





function NavBar(props){
  const linkItems = props.links.filter(item => item.isLink).map((item,index) =>
        (
            <li className="nav-link" key={index}>
            <Link to={item.link} className="nav-link">
                {item.title}
            </Link>
            </li>
        )
        )

    
    return(
       
<nav className="navbar navbar-expand-lg" id="navColor">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/" id="nut" >nuts</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse " id="navbarNavAltMarkup">
      <div className="navbar-nav ml-auto" id="textFont">
      {linkItems}
      </div>
    </div>
  </div>
</nav>

    )
}

export default NavBar