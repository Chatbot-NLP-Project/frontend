import { useState } from "react";
import { Redirect } from "react-router-dom";
import Labels from "./Labels";
import "./Details.css";
import ProfileImage from "./ProfileImage";
import FormDetails from "./FormDetails";
import Axios from 'axios';


const Details = ({id}) => {

    const [changeDetails, setChangeDeatils] = useState(false);
    const [changePassword, setChangePassword] = useState(false);
    const [changeImage, setChangeImage] = useState(false);
    

    return (  
        <div className="details-container">
            

            {(!changeDetails && !changePassword) && (
                <>
                    <ProfileImage changeImage={changeImage} setChangeImage={setChangeImage} changeDetails={changeDetails}/>
                    <Labels setChangeDeatils={setChangeDeatils} setChangePassword={setChangePassword} changeImage={changeImage}/>
                </>
            )}

            {changeDetails && (
                <>
                    <ProfileImage changeImage={changeImage} setChangeImage={setChangeImage} changeDetails={changeDetails} />
                    <FormDetails  setChangeDeatils={setChangeDeatils} setChangePassword={setChangePassword} />

                </>
            )}

            {changePassword && (
                <>
                    <ProfileImage />
                    <h2>Change Password</h2>
                </>
            )}
        </div>
    ); 
}
 
export default Details;