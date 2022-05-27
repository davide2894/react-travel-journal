import "./Entry.scss";
import pinIcon from "../../assets/icons/pin_icon.png";

export default function Entry(props) {
    console.log(props);
    return(
        <div className="entry">
            <div className="entry__childContainer entry__imgContainer">
                <img 
                    className="entry__img"
                    aria-hidden="true"
                    src={props.entryData.imageUrl}
                />
            </div>
            <div className="entry__childContainer entry__infoContainer">
                <div className="entry__locationContainer">
                    <div className="entry__locationRow">
                        <img className="icon entry__locationPinIcon" src={props.entryData.pinIcon}></img>
                        <h2 className="entry__location">{props.entryData.location}</h2>
                    </div>
                    <h3 className="entry__locationRow entry__title">{props.entryData.title}</h3>
                </div>
                <p className="entry__dates">
                    {props.entryData.startDate} - {props.entryData.endDate}
                </p>
                <p className="entry__description">{props.entryData.description}</p>
            </div>
        </div>
    )
}