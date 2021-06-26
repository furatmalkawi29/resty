import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import './navbar.scss'
class Navbar extends Component {
  render() {
    return (
        <nav>
          <ul>
          <li><Link className="link_style " to="/">Home</Link></li>
          <li><Link className="link_style" to="/history">History</Link></li>
          <li><Link className="link_style" to="/help">Help</Link></li>
          </ul>
        </nav>
    )
  }
}

export default Navbar
