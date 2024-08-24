import "./photoshoot.css";
import PhotoshootData from "./PhotoshootData";
import Label1 from "../asset/photoshoot1.JPG";
import Label2 from "../asset/photoshoot2.JPG";
import Label3 from "../asset/photoshoot3.JPG";
import Label4 from "../asset/Satay2.jpg";
import Label5 from "../asset/Satay3.jpg";
import Label6 from "../asset/Satay4.jpg";
import Label7 from "../asset/basreng1.jpg";
import Label8 from "../asset/basreng2.jpg";
import Label9 from "../asset/basreng3.jpg";
import Navbar from "../components/Navbar";

function Photoshoot(){
    return(
        <div className="photoshoot">
            <Navbar/>
            <h1>Recent Photoshoot Brands</h1>
            <p>Photoshoot Offer from DIAM Production</p>
            <div className="photoshoot-card">
                <PhotoshootData
                image={Label1}
                heading = "Photoshoot Model"
                text="photoshoot by : rafibahtiar"
                text2="model by : ghalyarsa"
                />
                <PhotoshootData
                image={Label2}
                heading = "Photoshoot Model"
                text="photoshoot by : rafibahtiar"
                text2="model by : ghalyarsa"
                />
                <PhotoshootData
                image={Label3}
                heading = "Photoshoot Model"
                text="photoshoot by : rafibahtiar"
                text2="model by : ghalyarsa"
                />
            </div>
            <div className="photoshoot-card">
                <PhotoshootData
                image={Label4}
                heading = "Photoshoot Food and beverage"
                text="photoshoot by : rafibahtiar"
                />
                <PhotoshootData
                image={Label5}
                heading = "Photoshoot Food and beverage"
                text="photoshoot by : rafibahtiar"
                />
                <PhotoshootData
                image={Label6}
                heading = "Photoshoot Food and beverage"
                text="photoshoot by : rafibahtiar"
                />
            </div>
            <div className="photoshoot-card">
                <PhotoshootData
                image={Label7}
                heading = "Photoshoot Food and beverage"
                text="photoshoot by : rafibahtiar"
                />
                <PhotoshootData
                image={Label8}
                heading = "Photoshoot Food and beverage"
                text="photoshoot by : rafibahtiar"
                />
                <PhotoshootData
                image={Label9}
                heading = "Photoshoot Food and beverage"
                text="photoshoot by : rafibahtiar"
                />
            </div>
            <div className="photoshoot-card">
                <PhotoshootData
                image={Label1}
                heading = "Photoshoot Model"
                text="photoshoot by : rafibahtiar"
                text2="model by : ghalyarsa"
                />
                <PhotoshootData
                image={Label2}
                heading = "Photoshoot Model"
                text="photoshoot by : rafibahtiar"
                text2="model by : rizkimaulana"
                />
                <PhotoshootData
                image={Label3}
                heading = "Website Marketing & Operasional"
                text="DIAM production offers website marketing & opearsional designs from a PT BANGUN CIPTA NUSAKARYA"
                />
            </div>
        </div>
    )
}

export default Photoshoot;