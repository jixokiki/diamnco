import { Component } from "react";
import "./Division.css";
import PD from "../asset/IconPD.jpeg";
import VD from "../asset/IconVD.jpeg";
import IT from "../asset/IconIT.PNG";
import CC from "../asset/IconCC.PNG";
import DC from "../asset/IconDC.PNG";
import DM from "../asset/IconDM.PNG";

import bahtiar from "../asset/bahtiar.jpeg";
import gilang from "../asset/gilang.jpeg";
import iki from "../asset/iki.jpg";
import sila from "../asset/sila.PNG";
import najwa from "../asset/najwa.PNG";
import henry from "../asset/henry.PNG";

class Division2 extends Component{
    render(){
        return(
            <div className={this.props.className}>
            <div className="description-text">
                <h2>{this.props.heading}</h2>
                <p>
                    {this.props.text}
                </p>
            </div>
            <div className="image">
                <img alt="img" src={this.props.img1}/>
                <img alt="img" src={this.props.img2}/>
                {/* <img alt="img" src={this.props.img2}/> */}
            </div>
            </div>
        )
    }
}

export default Division2;