import React from 'react'
import Navbar from './Navbar'
import { Route, Routes } from 'react-router-dom'
import Menu from './Menu'
import Belline from '../page/Belline'
import Mobiuz from '../page/Mobiuz'
import Uzmobilee from '../page/Uzmobilee'
import SingleRoute from '../page/single-route/SingleRoute'
import Internet from '../page/internet/Internet'

export default function Main() {
    return (
        <div className='main'>
            <Navbar />
            <div className="gapes">

                <Routes>
                    <Route  path='/' element={<h2>Home</h2>} />
                    <Route path='/single/:path' element={<SingleRoute />} />
                    <Route path='/internet/:id' element={  <Internet/>  } />
                </Routes>

            </div>

        </div>
    )
}
