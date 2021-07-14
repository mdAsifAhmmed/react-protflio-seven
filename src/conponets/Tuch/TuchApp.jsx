import React from 'react'
import './Tuch.css'
import TuchCom from './TuchCom'


const TuchApp = () => {
    return (
        <>
            <section>
                <div className="Tuch">
                    <div className="container">
                        <div className="Tuch__headding">
                            <h2>Get <span>In Touch</span></h2>
                            <p>In a professional context it often happens that private clients corder a publication to be made.</p>
                        </div>
                        <div className="Touch__body">
                            <TuchCom />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default TuchApp
