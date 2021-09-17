import BottomFooter from "../../components/Footer/BottomFooter";
import Footer from "../../components/Footer/Footer";
import Details from "../../components/Profile/Details";
import { useParams } from "react-router";

const Profile = () => {
    
    const { id } = useParams(); 

    return ( 
        <>
            <Details id={ id } />
            <Footer />
            <BottomFooter />
        </>
     );
}
 
export default Profile;