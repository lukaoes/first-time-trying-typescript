import { Nav } from "./header.styled"
import { NavLink } from "react-router-dom"

const Header = () => {

    return (
        <Nav>
            <div>
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Orange_logo.svg/240px-Orange_logo.svg.png" alt="logo" />
            </div>
            <div>
                <NavLink to=".">Home</NavLink>
                <NavLink to="about">About Us</NavLink>
                <NavLink to="contact">Contact</NavLink>
            </div>

        </Nav>
    )
}

export default Header