import React from 'react'

const CountCard = (props) => {
    return (
        <>
            <div className="count_Card col-md-3 col-sm-6 col-lg-3">
                <h2>{props.icon}</h2>
                <spna>{props.count}</spna>
                <p>{props.name}</p>
            </div>
        </>
    )
}

export default CountCard
