import "./UserProfile.css";
import ProfileImage from "./ProfileImage";
import Password from "./Password";
import Mid from "./Mid";


const UserProfile = () => {


    return (  
        <div className="details-container">
        
            <ProfileImage />
            <Mid />
            <Password />

        </div>
    ); 
}
 
export default UserProfile;