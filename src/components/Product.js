import "./Product.css";
import ProductData from "./ProductData";
import Label1 from "../asset/photoshoot1.JPG";
import Label2 from "../asset/label2.jpg";
import Label3 from "../asset/label3.jpg";


function Product(){
    return(
        <div className="product">
            <h1>Recent Product</h1>
            <p>Product Offer from DIAM Production</p>
            <div className="product-card">
                <ProductData
                image={Label1}
                heading = "Photoshoot"
                text="DIAM production offers photoshoot for individu or business from a local brand"
                />
                <ProductData
                image={Label2}
                heading = "Social Media Marketing"
                text="DIAM production offers social media designs and marketing from a local brand"
                />
                <ProductData
                image={Label3}
                heading = "Website Marketing & Operasional"
                text="DIAM production offers website marketing & opearsional designs from a PT BANGUN CIPTA NUSAKARYA"
                />
            </div>
        </div>
    )
}

export default Product;