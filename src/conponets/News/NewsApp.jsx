import React from 'react'
import './News.css'
import NewsCom from './NewsCom'
const NewsApp = () => {
    return (
        <>
            <section>
                <div className="News__Whapper">
                    <div className="container">
                        <div className="News__Hadding">
                        <h1>Latest <span>News</span></h1>
                        <p>
                        In a professional context it often happens that private clients corder a publication to be made.
                        </p>
                        </div>
                        <div className="News__Card__Whapper row">
                            <NewsCom />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default NewsApp
