import "./collegePhoto.css";
import CollegeDataPhotoshoot from "./collegeDataPhoto";
import Label1 from "../asset/photoshoot1.JPG";
import Label2 from "../asset/label1.jpg";
import Label3 from "../asset/label3.jpg";
import Navbar from "../components/Navbar";

function CollegePhotoshoot(){
    return(
        <div className="college-photoshoot-data">
            <Navbar/>
            <h1>Recent Photoshoot Brands</h1>
            <p>Photoshoot Offer from DIAM Production</p>
            <div className="college-photoshoot-data-card">
                <CollegeDataPhotoshoot
                image={Label1}
                heading = "Photoshoot Model"
                text="photoshoot by : rafibahtiar"
                text2="model by : ghalyarsa"
                />
                <CollegeDataPhotoshoot
                image={Label2}
                heading = "Photoshoot Beverage Packaging"
                text="DIAM production offers beverage packaging designs from a local brand"
                />
                <CollegeDataPhotoshoot
                image={Label3}
                heading = "Website Marketing & Operasional"
                text="DIAM production offers website marketing & opearsional designs from a PT BANGUN CIPTA NUSAKARYA"
                />
            </div>
            <div className="college-photoshoot-data-card">
                <CollegeDataPhotoshoot
                image={Label1}
                heading = "Photoshoot Model"
                text="photoshoot by : rafibahtiar"
                text2="model by : ghalyarsa"
                />
                <CollegeDataPhotoshoot
                image={Label2}
                heading = "Photoshoot Model"
                text="photoshoot by : rafibahtiar"
                text2="model by : rizkimaulana"
                />
                <CollegeDataPhotoshoot
                image={Label3}
                heading = "Website Marketing & Operasional"
                text="DIAM production offers website marketing & opearsional designs from a PT BANGUN CIPTA NUSAKARYA"
                />
            </div>
            <div className="college-photoshoot-data-card">
                <CollegeDataPhotoshoot
                image={Label1}
                heading = "Photoshoot Model"
                text="photoshoot by : rafibahtiar"
                text2="model by : ghalyarsa"
                />
                <CollegeDataPhotoshoot
                image={Label2}
                heading = "Photoshoot Model"
                text="photoshoot by : rafibahtiar"
                text2="model by : rizkimaulana"
                />
                <CollegeDataPhotoshoot
                image={Label3}
                heading = "Website Marketing & Operasional"
                text="DIAM production offers website marketing & opearsional designs from a PT BANGUN CIPTA NUSAKARYA"
                />
            </div>
            <div className="college-photoshoot-data-card">
                <CollegeDataPhotoshoot
                image={Label1}
                heading = "Photoshoot Model"
                text="photoshoot by : rafibahtiar"
                text2="model by : ghalyarsa"
                />
                <CollegeDataPhotoshoot
                image={Label2}
                heading = "Photoshoot Model"
                text="photoshoot by : rafibahtiar"
                text2="model by : rizkimaulana"
                />
                <CollegeDataPhotoshoot
                image={Label3}
                heading = "Website Marketing & Operasional"
                text="DIAM production offers website marketing & opearsional designs from a PT BANGUN CIPTA NUSAKARYA"
                />
            </div>
        </div>
    )
}

export default CollegePhotoshoot;