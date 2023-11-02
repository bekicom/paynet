import React from 'react'
// import ucell from "../Data"
import { Link } from 'react-router-dom';
import {INNER_ROUTS} from "../static"

// import Uzmobilee from './Uzmobilee';
export default function Menu({id}) {

  return (
    <div className='ucell_carts'>
      {
        INNER_ROUTS?.map((i, inx)=> (
          <Link to={`${i.path}/${id}`} className='card'>   
            {i.icon} {i.title}
          </Link>
        ))
      }
      <div className="deg">

      </div>

    </div>
  )
}
