import React from 'react'

const ServiceCard = (props) => {
    return (
        <>
            <div className="ServiceCard">
                <div className="Card_whapper">
                    <span>{props.icon}</span>
                    <h1>{props.titles}</h1>
                    <p>{props.peras}</p>
                </div>
            </div>

        </>
    )
}

export default ServiceCard
