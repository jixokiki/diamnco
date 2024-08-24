import Layar from "../components/Layar";
import Navbar from "../components/Navbar";
import bg from "../asset/bgDIAM.jpeg"
import Footer from "../components/Footer";
import AboutUs from "../components/AboutUs";


function About(){
    return(
        <>
        <Navbar/>
        <Layar
        cName="layar-mid"
        layarIMG={bg}
        title="About"
        // text="Choose Your Favorite Destination"
        // buttonText="DIAM PRODUCTION"
        // url="/"
        // btnClass="show"
        btnClass="hide"
        />
        <AboutUs/>
        <Footer/>

        </>
    )
}

export default About;