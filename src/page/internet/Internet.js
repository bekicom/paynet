import React from 'react'
import { useParams } from 'react-router-dom'
import {INTERNETS} from "../../static"

function Internet() {
    const params = useParams()
    const oneItem = INTERNETS?.find(({depId})=> depId === params.id)
  return (
    <div>
        <h2>Internet</h2>
        <ul>
            {
                oneItem?.items?.map((i,inx)=><li key={inx}>{i.title} <b>{i.price}</b> so'm</li>)
            }
        </ul>
    </div>
  )
}

export default Internet