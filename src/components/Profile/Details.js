import { useState } from "react";
import { Redirect } from "react-router-dom";
import Labels from "./Labels";
import "./Details.css";
import ProfileImage from "./ProfileImage";
import FormDetails from "./FormDetails";


const Details = ({id}) => {

    const [changeDetails, setChangeDeatils] = useState(false);
    const [changePassword, setChangePassword] = useState(false);

    return (  
        <div className="details-container">
            

            {(!changeDetails && !changePassword) && (
                <>
                    <ProfileImage />
                    <Labels id={id} setChangeDeatils={setChangeDeatils} setChangePassword={setChangePassword}/>
                </>
            )}

            {changeDetails && (
                <>
                    <ProfileImage />
                    <FormDetails id={id} setChangeDeatils={setChangeDeatils} setChangePassword={setChangePassword}/>
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