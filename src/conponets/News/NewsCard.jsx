import React from 'react'


const NewsCard = (props) => {
    return (
        <>
            <div className="NewsCard col-md-5 col-sm-12 col-lg-4">
                <img src={props.imgSrc} alt="News__img"/>
                <div className="Card__descipson">
                    <div className="mini_titel">
                        <span>{props.somy}</span>
                    </div>
                    <h3>{props.title}</h3>
                    <ul className="Card__icon">
                        <li className="news_card_icon">{props.icons1}</li>
                        <li>{props.mini_titel}</li>
                        <li className="news_card_icon">{props.icons2}</li>
                        <li>{props.mini__massge}</li>
                    </ul>
                    <p>{props.lorem}</p>
                    <button className="Card__btn">
                        <a href="#">Read More...</a>
                    </button>
                </div>
            </div>
        </>
    )
}

export default NewsCard
