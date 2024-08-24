import Layar from "../components/Layar";
import Navbar from "../components/Navbar";
import bg from "../asset/bgDIAM.jpeg"
import Footer from "../components/Footer";
import Product from "../components/Product";


function Service(){
    return(
        <>
        <Navbar/>
        <Layar
        cName="layar-mid"
        layarIMG={bg}
        title="Service"
        // text="Choose Your Favorite Destination"
        // buttonText="DIAM PRODUCTION"
        // url="/"
        // btnClass="show"
        btnClass="hide"
        />
        <Product/>
        <Footer/>
        </>
    )
}

export default Service;