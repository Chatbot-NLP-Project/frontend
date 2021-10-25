import BottomFooter from "../../components/Footer/BottomFooter";
import Footer from "../../components/Sections/Footer";
import UserProfile from "../../components/Profile/UserProfile";
import { useParams } from "react-router";

const Profile = () => {
    
    const { id } = useParams(); 

    return ( 
        <>
            <UserProfile />
            <Footer />
            {/* <BottomFooter /> */}
        </>
     );
}
 
export default Profile;