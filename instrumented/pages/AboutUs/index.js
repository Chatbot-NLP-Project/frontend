import BottomFooter from "../../components/Footer/BottomFooter";
import Footer from "../../components/Sections/Footer";
import WeAre from "../../components/AboutUs/WeAre";
import WhatWeDo from "../../components/AboutUs/WhatWeDo";
import ContactUs from "../../components/AboutUs/ContactUs";
import { useParams } from "react-router";

const AboutUs = () => {
    
    const { id } = useParams(); 

    return ( 
        <>
            <WeAre />
            {/* <WhatWeDo /> */}
            <ContactUs />
            <Footer />
            {/* <BottomFooter /> */}
        </>
     );
}
 
export default AboutUs;