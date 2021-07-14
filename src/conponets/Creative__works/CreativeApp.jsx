import React from 'react'
import './Creative.css'
import CreativeRuter from './CreativeRuter'
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
// import Creative_son from './Creative_son'
const CreativeApp = () => {
    return (
        <>
            <div className="creative">
                <div className="container">
                    <div className="creative__headding">
                        <h1>Creative <span>Works</span></h1>
                        <p>
                            In a professional context it often happens that private clients corder a publication to be made.
                        </p>
                    </div>
                    <div className="creative-body">
                        <CreativeRuter />
                        {/* <Creative_son/> */}
                    </div>
                </div>
            </div>
        </>
    )
}

export default CreativeApp
