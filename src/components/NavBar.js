import React, { Component } from 'react'
import logo from '../itslit.png'

export default class NavBar extends Component {
  render () {
    return (
      <div>
        <nav className="navbar sticky-top navbar-light bg-faded">
          <span>
            <img src={logo} width="30" height="30" className="d-inline-block align-top" alt="Logo" />
            <a className="navbar-brand" href="/">Fire Jams!</a>
          </span>
        </nav>
      </div>
    )
  }
}
