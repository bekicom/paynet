import React from 'react'
import { useNavigate, NavLink } from 'react-router-dom'
export default function Navbar() {

    const navigate = useNavigate()
    return (
        <nav>
            <NavLink to={"/"} id='uc' >Ucell</NavLink>
        </nav>
    )
}
