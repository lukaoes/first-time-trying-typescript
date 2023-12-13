import { Nav } from "./header.styled"
import { NavLink } from "react-router-dom"

const Header = () => {

    const activeStyle = {
        fontWeight: "bold",
        background: 'red'
    }

    return (
        <Nav>
            <div>
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Orange_logo.svg/240px-Orange_logo.svg.png" alt="logo" />
            </div>
            <div>
                <NavLink style={({ isActive }) => (isActive ? { background: 'red' } : undefined)} end to=".">Home</NavLink>
                <NavLink style={({ isActive }) => (isActive ? { background: 'red' } : undefined)} to="about">About Us</NavLink>
                <NavLink style={({ isActive }) => (isActive ? { background: 'red' } : undefined)} to="contact">Contact</NavLink>
            </div>

        </Nav >
    )
}

export default Header