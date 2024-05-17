import { Component } from 'react';
import { NavLink } from 'react-router-dom'; // Importar NavLink
import './Navbar.css';
import logo from "./logo_turk.svg";

class Navbar extends Component {
  state = { clicked: false };

  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };

  render() {
    return (
      <>
        <nav>
          <a href="/">
            <img className='logotip' src={logo} alt="Logo" />
          </a>
          <div>
            <ul id='navbar' className={this.state.clicked ? "#navbar active" : "#navbar"}>
              <li>
                <NavLink exact to="/" activeClassName="active">home</NavLink>
              </li>
              <li>
                <NavLink to="/preinscription" activeClassName="active">about</NavLink>
              </li>
              <li>
                <NavLink to="/download" activeClassName="active">download</NavLink>
              </li>
            </ul>
          </div>
          <div id="mobile" onClick={this.handleClick}>
            <i id="bar" className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}></i>
          </div>
        </nav>
      </>
    );
  }
}

export default Navbar;
