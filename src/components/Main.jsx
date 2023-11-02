import React from 'react'
import Navbar from './Navbar'
import { Route, Routes } from 'react-router-dom'
import Ucell from '../page/Ucell'
import Belline from '../page/Belline'
import Mobiuz from '../page/Mobiuz'
import Uzmobilee from '../page/Uzmobilee'
import Internet from '../page/Internet'

export default function Main() {
    return (
        <div className='main'>
            <Navbar />
            <div className="gapes">

                <Routes>
                    <Route path='/' element={<h2>HOME</h2>} />
                    <Route path='/:route' element={<Ucell />} />
                    <Route path='ucell/:internet' element={<Internet />} />


                </Routes>

            </div>

        </div>
    )
}
