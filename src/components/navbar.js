import React,{ useState } from 'react'
import { Link } from 'gatsby'
import LOGO from '../images/logo.svg'

import '../styles/navbar.sass'

const header = () => {
    const [open,setToggle] = useState(false)
  
    const handler = (e) =>{
        setToggle(!open)
    }
    return (
      <header>
          <div className="logo">
              <LOGO />
          </div>
           < div className = "menu-container"
           onClick = { handler }>
                  <div className="menu">
                      <div className={ open ? "hamburgerIcon open": "hamburgerIcon"} >
                      </div>
                  </div>
              </div>
          <nav className={open ? "scale": "" }>
              
              <ul className="nav_links">
                  <li className="nav_link"><Link to='/' activeClassName="active">Home</Link></li>
                  <li className="nav_link"><Link to='/about' activeClassName="active">About</Link></li>
                  <li className="nav_link"><Link to='/skills' activeClassName="active">Skills</Link></li>
                  <li className="nav_link"><Link to='/project' activeClassName="active">Projects</Link></li>
                  <li className="nav_link"><Link to='/contact' activeClassName="active">Contact</Link></li>
              </ul>
             
          </nav>
         
      </header>
    )
}

export default header