import React from 'react'
import { useNavigate } from 'react-router-dom'
export default function Navbar() {

    const navigate = useNavigate()
    return (
        <nav>
            <button onClick={ ()=>navigate('ucell')} id='uc' >Ucell</button>
            <button onClick={ ()=>navigate('belline')} id='be'>Belline</button>
            <button onClick={ ()=>navigate('mobiuz')} id='mo'>Mobiuz</button>
            <button onClick={ ()=>navigate('uzmobile')} id='uz' >Uzmobile</button>
        </nav>
    )
}
