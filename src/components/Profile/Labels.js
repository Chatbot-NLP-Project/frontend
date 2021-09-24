import { useState, useEffect } from "react";
import Axios from 'axios';
// const Labels = ({email, firstName, lastName,phoneNumber, setChangeDeatils, setChangePassword, changeImage}) => {
const Labels = ({setChangeDeatils, setChangePassword, changeImage}) => {

    const [email, setEmail] = useState('');
    const [firstName,setFirstName] = useState('');
    const [lastName,setLastName] = useState('');
    const [phoneNumber,setPhoneNumber] = useState('');

    useEffect(()=> {
        Axios.get("http://localhost:5000/profile", {
            params : {
                user_id:1   // set the user id by session_id
            }
          }).then((response) => {
              console.log('Loading Labels');
            //   setUser(response.data)
              setFirstName(response.data.first_name);
              setLastName(response.data.last_name);
              setPhoneNumber(response.data.phone_number);
              setEmail(response.data.email);
            
          }).catch((error) => {
              console.log(error);
          })
    }, [])

    const handleEditDetails = () => {
        setChangeDeatils(true);
    }

    const handleEditPassword = () => {
        setChangePassword(true);
    }

    return ( 
        <div className="details-content-right">
                <div id="profile-details">
                <h3>Profile Details</h3>
                    { (!changeImage) && (<button id="edit-details-btn" type="submit" onClick={handleEditDetails}>Edit Details</button>)}
                    <ul>
                    <li>First Name : <span>{firstName}</span></li>
                    <li>Last Name : <span>{lastName}</span></li>
                    <li>Phone Number : <span>{phoneNumber}</span></li>
                    <li>Email :  <span>{email}</span></li>
                    </ul>
                </div>
                <div className="edit-profile-btns">
                    
                    <button id="edit-password-btn" type="submit" onClick={handleEditPassword}>Change Password</button>
                </div>
            </div>
     );
}
 
export default Labels;