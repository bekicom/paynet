import React from 'react'
import Navbar from './Navbar'
import { Route, Routes } from 'react-router-dom'

import SingleRoute from '../page/single-route/SingleRoute'
import Internet from '../page/internet/Internet'
import Tariflar from '../page/Tariflar/Tariflar'

export default function Main() {
    return (
        <div className='main'>
            <Navbar />
            <div className="gapes">

                <Routes>
                    <Route  path='/' element={<h2>Home</h2>} />
                    <Route path='/single/:path' element={<SingleRoute />} />
                    <Route path='/internet/:id' element={  <Internet/>  } />
                    <Route path='/tarif/:id' element={  <Tariflar/> } />
                </Routes>

            </div>

        </div>
    )
}
