import React from 'react'
import '../../design/design.scss'
import './header.scss'
import  Navbar from '../navbar/navbar'


function Header () {
    return (
        <header>
          <h1>RESTy</h1>
          <Navbar/>
        </header>)
}

export default Header;
