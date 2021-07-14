import React from 'react'
import './Count.css'
import CountCard from './CountCard'
import datas from './CountData'

const Count = (val) => {
    return (
        <>
            <CountCard
                icon={val.icon}
                count={val.scour}
                name={val.name}
            />
        </>

    )
}
const maps = () => {
    return (
        <>
            {datas.map(Count)}
        </>
    )
}

export default maps










