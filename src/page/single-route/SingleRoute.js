import React from 'react'
import { useParams } from 'react-router-dom'
import { DATA } from "../../static"
import Menu from '../../components/Menu'

function SingleRoute() {
    const params = useParams()
    const single = DATA.find(({path})=> path === params.path)

    if(!single){
        return <h2>404</h2>
    }

    return (
    <div>
        <h2>{single?.title}</h2>
        <Menu id={single.id}/>
    </div>
  )
}

export default SingleRoute