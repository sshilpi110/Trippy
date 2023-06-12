import React from "react"
import { Component } from "react"
import { Link } from "react-router-dom"
import { MenuItems } from "./MenuItems"
import "./NavbarStyle.css"
class Navbar extends Component {
    state = { clicked: false }
    handleClick = () => {
      this.setState({clicked: !this.state.clicked})
    }
    render() {

        return (
            <nav className="navbarItem">
                <h1 className="navbar-logo">Trippy</h1>

                {/* <div className="Menu-icons" onClick={this.handleClick}>
                    <i className={this.state.clicked ? "fas fa-times" : "fas-fa-bars"}></i>
                </div> */}

                <ul className="nav-menu">
                    {MenuItems.map((item, index) => {
                        return (
                            <li key={index}>
                                <a className={item.cName} href="/"><i className={item.icon}></i>{item.title}</a>
                            </li>
                        )
                    })}
                    <button>SignUp</button>
                </ul>
            </nav>
        )
    }
}
export default Navbar;