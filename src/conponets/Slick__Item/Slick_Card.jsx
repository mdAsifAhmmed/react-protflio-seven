const Card = (props) => { 
    return (
        <>
            <div className="col-12">
                <div className="Teams__card">
                    <div className="text-center">
                        <div id="Teams__img__preant" className="rounded mx-auto">
                            <img id="Teams__img" className="img-thumbnail" src={props.imgSrc} alt="Emon" />
                        </div>
                        <h6 className="pt-3">{props.TeamName}</h6>
                        <span> {props.TeamDates} </span>
                    </div>
                </div>
            </div>
        </>
    )

}

export default Card;