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

      Axios.get("/localhost:5000/profile", {
        id: 1
      }).then((response) => {
          console.log(response);
      }).catch((error) => {
          console.log(error);
      })

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