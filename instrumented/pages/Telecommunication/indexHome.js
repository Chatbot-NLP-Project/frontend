import BottomFooter from "../../components/Footer/BottomFooter";
import Footer from "../../components/Sections/Footer";
import EducationMain from "../../components/Chatbot-Telecommunication/EducationMain";
import ImageSlider from "../../components/Slider/ImageSlider";
import {SliderData} from "../../components/Slider/SliderData";

function Education() {
    return(
        <>
            <EducationMain />
            {/* <ImageSlider slides = {SliderData} /> */}
            <Footer />
            {/* <BottomFooter botName="XYRON" /> */}
        </>
    );
}

export default Education;
