import React from 'react'
import '../../styles/header.css'
import menuBar from './assets/navBar.json'
import { Link, useLocation } from 'react-router-dom'

const Header = () => {
  const location = useLocation()
  console.log(location)
  return (
    <div className='header'>
      <div className="header-holder">
        <div className="header-holderImg">
          <img src="" alt="Legacy Builders" />
        </div>
        <div className="header-holderText">
          <ul>
            {
              menuBar.map((item,index)=>(
                <li key={index} style={{borderColor:location.pathname === item.link? '#804BF2' : 'white'}}>
                  <Link to={item.link} style={{color:'black',textDecoration:'none'}}>{item.name}</Link>
                </li>
              ))
            }
          </ul>
          <aside>
            <button className='header-signup'>SIGN UP</button>
            <button className='header-login'>LOGIN</button>
          </aside>
        </div>
      </div>
    </div>
  )
}

export default Header
