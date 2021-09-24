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
    const [changeImage, setChangeImage] = useState(false)
    const [email, setEmail] = useState(null);
    const [firstName,setFirstName] = useState(null);
    const [lastName,setLastName] = useState(null);
    const [phoneNumber,setPhoneNumber] = useState(null);

      Axios.get("http://localhost:5000/profile", {
        params : {
            user_id:1   // set the user id by session_id
        }
      }).then((response) => {
        //   setUser(response.data)
          setFirstName(response.data.first_name);
          setLastName(response.data.last_name);
          setPhoneNumber(response.data.phone_number);
          setEmail(response.data.email);
        
      }).catch((error) => {
          console.log(error);
      })

    return (  
        <div className="details-container">
            

            {(!changeDetails && !changePassword) && (
                <>
                    <ProfileImage changeImage={changeImage} setChangeImage={setChangeImage} changeDetails={changeDetails}/>
                    <Labels firstName={firstName} lastName={lastName} phoneNumber={phoneNumber} email={email}  setChangeDeatils={setChangeDeatils} setChangePassword={setChangePassword} changeImage={changeImage}/>
                </>
            )}

            {changeDetails && (
                <>
                    <ProfileImage changeImage={changeImage} setChangeImage={setChangeImage} changeDetails={changeDetails} />
                    <FormDetails firstName={firstName} lastName={lastName} phoneNumber={phoneNumber} email={email} setFirstName={setFirstName}  setLastName={setLastName} setPhoneNumber={setPhoneNumber} setEmail={setEmail} setChangeDeatils={setChangeDeatils} setChangePassword={setChangePassword} />
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