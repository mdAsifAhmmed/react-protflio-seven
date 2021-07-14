import React from 'react'
import './About.css'
import AboutImg from './about-01.jpg'
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
const AbutCom = () => {
    return (
        <>
            <div className="Abut">
                <div className="container">
                    <div className="Abut__whapper row">
                        <div className="Abut_img col-md-12 col-lg-6 col-sm-12">
                            <div className="Abut__img_whapper">
                                <img src={AboutImg} alt="Abut__imt"/>
                            </div>
                        </div>
                        <div className="Abut__content col-md-12 col-lg-6 col-sm-12">
                            <h1>About <span>Me</span></h1>
                            < sfa/>
                            <p>
                            There are many variations of passages of Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century
                            </p>
                            <div className="About__det">
                                <div className="About_dets">
                                    <ui>
                                        <li>Birhday:<span> 1 April 1990</span></li>
                                        <li>Website:<span> www.uone.com</span></li>
                                        <li>Phone:<span>+123 456 7890</span></li>
                                    </ui>
                                </div>                          
                                <div className="About_dets">
                                    <ui>
                                        <li>Degree:<span> Master</span></li>
                                        <li>Mail: <span>sample@uone.com</span></li>
                                        <li>Freelance:<span> Available</span></li>
                                    </ui>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AbutCom
