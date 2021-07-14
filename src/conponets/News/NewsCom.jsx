import React from 'react'
import NewsCard from './NewsCard'
import NewsData from './NewsData'
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';


const NewsCom = (val) => {
    return (
        <>
            <NewsCard
                imgSrc={val.imge}
                somy={val.mini_titel}
                title={val.title}
                icons1={val.Mini_icon1}
                mini_titel={val.mini_titel1}
                icons2={val.Mini_icon2}
                mini__massge={val.mini_titel2}
                lorem={val.lorem}
            />
        </>
    )
}
const MapingData = () => {
    return (
        <>
            {NewsData.map(NewsCom)}
        </>
    )
}


export default MapingData
