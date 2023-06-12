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

                <div className="Menu-icons" onClick={this.handleClick}>
                    <i className={this.state.clicked ? "fa-solid fa-xmark" : "fa-solid fa-bars"}></i>
                </div>

                <ul className={this.state.clicked ? "nav-menu" : "nav-menu active"}>
                    {MenuItems.map((item, index) => {
                        return (
                            <li key={index}>
                                <Link className={item.cName} to={item.url}><i className={item.icon}></i>{item.title}</Link>
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