import React from 'react'
import Count from './Count'

const CountApp = () => {
    return (
        <>
            <section className="Count__all">
                <div className="container">
                    <div className="count_Card_whapper row">
                        <Count />
                    </div>
                </div>
            </section>
        </>
    )
}

export default CountApp
