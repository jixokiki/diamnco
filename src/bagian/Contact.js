import Layar from "../components/Layar";
import Navbar from "../components/Navbar";
import bg from "../asset/bgDIAM.jpeg"
import Footer from "../components/Footer";
import ContactForm from "../components/ContactForm";


function Contact(){
    return(
        <>
        <Navbar/>
        <Layar
        cName="layar-mid"
        layarIMG={bg}
        title="Contact"
        // text="Choose Your Favorite Destination"
        // buttonText="DIAM PRODUCTION"
        // url="/"
        // btnClass="show"
        btnClass="hide"
        />
        <ContactForm/>
        <Footer/>
        </>
    )
}

export default Contact;