import React from 'react'
import ServiceCard from './ServiceCard'
import SData from './SData'
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
const sCard = (val) => {
    return (
        <ServiceCard
            icon={val.icon}
            titles={val.title}
            peras={val.pera}
        />
    )
}

const ServiceCom = () => {
    return (
        <>
            {SData.map(sCard)}
        </>
    )
}

export default ServiceCom
