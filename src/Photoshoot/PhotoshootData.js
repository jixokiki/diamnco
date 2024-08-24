import "./photoshoot.css";
import { NavLink } from "react-router-dom";

function PhotoshootData(props){
    return(
        <div className="p-card">
            <div className="photoshoot-image">
                <img src={props.image} alt="image"/>
            </div>
            <h4>{props.heading}</h4>
            <p>{props.text}</p>
            <p>{props.text2}</p>
            <nav>
                <NavLink exact="true" activeclassname="active" className="college-photoshoot-data-link" to="/college-photoshoot-data">
                    <button>Clicked Here</button>
                </NavLink>
            </nav>
        </div>

    );
}

export default PhotoshootData;