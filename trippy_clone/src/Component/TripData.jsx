import "./TripStyle.css"
function TripData(props) {
    return (
        <div className="t-card">
            <div className="t-image">
                <img src={props.image} alt="image" />
            </div>
            <h1>{props.heading}</h1>
            <p>{props.text}</p>
        </div>
    )
}
export default TripData;