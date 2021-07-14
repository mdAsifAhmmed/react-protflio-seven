import React from 'react'
import './ServiceCss.css'
import ServiceCom from './ServiceCom'

const ServiceApp = () => {
    return (
        <>
            <div className="Service">
                <div className="container">
                    <div className="container_whapper">
                        <div className="Service_titel">
                            <h1>My <span>Services</span></h1>
                            <p>
                                In a professional context it often happens that private clients corder a publication to be made.
                            </p>
                        </div>
                        <div className="cardWhapper">
                            <div className="row RowWrapper">
                                <ServiceCom className="col-md-6 col-sm-12 col-lg-4" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ServiceApp
