import React from "react";
import iitrpImg from "../media/iitmrp.jpg";
import { ReactComponent as CallLogo } from "../media/call-outline.svg";
import { ReactComponent as MailLogo } from "../media/mail-outline.svg";
import { ReactComponent as LinkedIn } from "../media/logo-linkedin.svg";
// import { GoogleMap, withScriptjs, withGoogleMap } from "react-google-maps";


// function Map() {
//     return (
//         <GoogleMap
//             defaultZoom={10}
//             defaultCenter={{ lat: 12.990409030413858, lng:80.24227386443107 }}
//         />
//     )
// }

// const WrappedMap = withScriptjs(withGoogleMap(Map));

function Contact() {
    return (
        <div id="contact">
            {/* <nav id="contact-nav">
                <div id = "contact-brand" className="navbar-brand">
                    <img src={aavrtti_logo} alt="Aavrtti Logo" />
                    <div>
                        <p>AAVRTTI</p>
                        <p>Technologies</p>
                    </div>
                </div>
                <div id="contact-home">
                    
                        <div id="home-logo"><HomeLogo /></div>
                        <Link to={"/"} ><p>Home</p></Link>
                    
                </div>
            </nav> */}
            <div id="contact-intro">

                <div id="contact-img"><img src={iitrpImg} alt="IITM-img"/></div>
                <div id="contact-us">
                    <div id="contact-us-heading"><p>Contact Us</p></div> {/*data-aos="fade-up" data-aos-duration="800" data-aos-easing="ease-in-sine" data-aos-delay="200" data-aos-anchor-placement="bottom-bottom"> */}
                    <div id = "contact-detail"> {/*data-aos="zoom-in" data-aos-duration="800" data-aos-easing="ease-in-sine" data-aos-delay="200" data-aos-anchor-placement="bottom-bottom">*/}
                        <p>AAVRTTI Technologies</p>
                        <div className="address">
                            IITM Incubation Cell, IITM Research Park, Taramani, Chennai - 600113 (Corp.)
                        </div> 
                        <div className="address">
                            Registered office: Kalinga Vihar, Patrapada, Bhubaneswar - 751019
                        </div>                                               
                        <div id="ph-mail">
                            {/* <div className="spacer"></div> */}
                            <div className="logo">
                                <MailLogo />
                                <p><a href="mailto:pragyan@aavrtti.com" style={{color: 'white'}}>pragyan@aavrtti.com</a></p>
                            </div>
                            
                        </div>
                    </div>
                    <a href="https://www.linkedin.com/company/aavrtti/" target="_blank"><LinkedIn className="linked-logo"/></a>
                </div>
            </div>
            {/* <div id="gmap" >
                <WrappedMap
                    googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
                    loadingElement={<div style={{ height: `100%` }} />}
                    containerElement={<div style={{ height: `100%` }} />}
                    mapElement={<div style={{ height: `100%` }} />}
                />
            </div> */}
            
        </div>
        
    )
}

export default Contact;
