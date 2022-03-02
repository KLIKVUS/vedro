function Card(props) {
    const {cardParamData, cardParam, cardText} = props;

    return (
    <div className="main-cards__card card">
        <div className="card__title-wrapper">
            <h2 className="card__param-data">{cardParamData}</h2>
            <p className="card__param">{cardParam}</p>
        </div>
        <p className="card__text">{cardText}</p>
    </div>
    );
}

export default Card;