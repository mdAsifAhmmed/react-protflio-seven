import React from 'react'
import './Hadding.css'
import BackgroundSlider from '../../../node_modules/react-background-slider'
import HaddingBody from './HaddingBody'
import imageOne from './img/img_one.jpeg'
import imageTwo from './img/img_two.jpeg'
import imageThree from './img/img_three.jpeg'
import imageFour from './img/img_fore.jpeg'
import imageFive from './img/img_five.jpeg'







const HaddingApp = () => {
    return (
        <>
            <div className="Slider__img__conten">
                <div className="HeaderConten">
                    <HaddingBody />
                </div>

                <BackgroundSlider className="Slider__img"
                    images={[imageOne, imageTwo, imageThree, imageFour, imageFive]}
                    duration={8}
                    transition={1}
                />
            </div>

        </>
    )
}

export default HaddingApp
