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
                    <Route  path='ucell' element={<Ucell />} />
                    <Route path='belline' element={<Belline />} />
                    <Route path='mobiuz' element={<Mobiuz />} />
                    <Route path='uzmobile' element={<Uzmobilee />} />
                    <Route path='ucell/internet' element={  <Internet/>  } />


                </Routes>

            </div>

        </div>
    )
}
