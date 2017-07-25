import React, { Component } from 'react'
import logo from '../itslit.png'
import '../styles/NavBar.css'

export default class NavBar extends Component {
  render () {
    return (
      <div>
        <nav className="navbar fixed-top navbar-light bg-faded">
          <span>
            <img src={logo} width="30" height="30" className="d-inline-block align-top" alt="Logo" />
            <a className="navbar-brand" href="/">Fire Jams!</a>
          </span>
        </nav>
        <header className='header'>
          <div className="jumbotron jumbotron-fluid">
            <div className="container">
              <h1 className="display-3">Welcome to Fire Jams!</h1>
              <p className="lead">Load up your favorite jams below and become the life of the party!</p>
            </div>
          </div>
        </header>
      </div>
    )
  }
}
