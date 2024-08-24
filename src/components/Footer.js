import "./Footer.css";

const Footer =()=>{
    return(
        <div className="footer">
            <div className="top">
                <div>
                    <h1>DESAINERIAM & CO</h1>
                    <p>Digital Marketing Agency And Media Entertainment.</p>
                </div>
                <div>
                    <a href="/">
                        <i className="fa-brands fa-facebook-square"></i>
                    </a>
                    <a href="https://instagram.com/d.iamnco?igshid=MjEwN2IyYWYwYw==">
                        <i className="fa-brands fa-instagram-square"></i>
                    </a>
                    <a href="/">
                        <i className="fa-brands fa-behance-square"></i>
                    </a>
                    <a href="/">
                        <i className="fa-brands fa-twitter-square"></i>
                    </a>
                    {/* <a href="/">
                        <i className="fa-brands fa-tiktoker-square"></i>
                    </a> */}
                    <a href="/">
                        <i className="fa-brands fa-youtube-square"></i>
                    </a>
                    <a href="/">
                        <i className="fa-brands fa-whatsapp-square"></i>
                    </a>
                    {/* <a href="/">
                        <i className="fa-brands fa-email-square"></i>
                    </a> */}
                    <a href="/">
                        <i className="fa-brands fa-gmail-square"></i>
                    </a>
                </div>
            </div>
            <div className="bottom">
                <div>
                    <h4>Project</h4>
                    <a href="/">Photographer</a>
                    <a href="/">Photoshoot</a>
                    <a href="/">Photo Product</a>
                    <a href="/">Videographer</a>
                    <a href="/">Advertising Video</a>
                    <a href="/">Social Media Marketing</a>
                    <a href="/">Website Development</a>
                </div>
                <div>
                    <h4>Community</h4>
                    <a href="/">GitHub</a>
                    <a href="/">Issues</a>
                    <a href="/">Project</a>
                    <a href="/">Twitter</a>
                    <a href="https://instagram.com/d.iamnco?igshid=MjEwN2IyYWYwYw==">Instagram</a>
                    <a href="Officialdesakneriam@gmail.com">Gmail</a>
                    <a href="http://freelancer.co.id">Freelancer</a>
                    <a href="https://www.linkedin.com/in/d-iam-nco-0b44b0277">LinkedIn</a>
                </div>
                <div>
                    <h4>Help</h4>
                    <a href="/">Support</a>
                    <a href="/">Troubleshooting</a>
                    <a href="/">Contact Us</a>
                </div>
                <div>
                    <h4>Others</h4>
                    <a href="/">Terms of Service</a>
                    <a href="/">Privacy Policy</a>
                    <a href="/">License</a>
                </div>
            </div>
        </div>
    )
}

export default Footer;