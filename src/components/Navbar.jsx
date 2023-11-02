import React from 'react'
import { NavLink } from 'react-router-dom'
import {DATA} from "../static"

export default function Navbar() {
    return (
        <nav>
            {
                DATA?.map(i=> <NavLink className={"nav__link"} to={`/single/${i.path}`} key={i.id}>
                    <button id={i.path.slice(0,2)}>{i.title}</button>
                </NavLink>)
            }
        </nav>
    )
}
