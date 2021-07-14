import React from 'react'
import { MdKeyboardArrowDown } from "react-icons/md";

const Sub__Body = () => {
    return (
        <div className="sub__body__whapper">
            <div className="container">
                <div className="row sub__body__content">
                    <div className="col-12 col-md-12 col-lg-12 col-sm-12 sub__body__content_whapper">
                        <h1><span>I'M</span> Asif Ahmed</h1>
                        <p>
                            In a professional context it often happens that private clients corder a publication to be made.
                        </p>
                        <button className="sub__body_btns">Download Cv</button>
                        <div className="sub__body__animishon">
                            <div className="sub__body__animishon_div">
                                <div>
                                    <div><MdKeyboardArrowDown /></div>
                                    <div className="sub__body__animishon_fIcon"><MdKeyboardArrowDown /></div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Sub__Body
