import { useState } from "react";
const Labels = ({id, setChangeDeatils, setChangePassword}) => {

    // const { profileImage, firstName, lastName, phoneNumber, email } = useFetch('dblink' + id)
    const [firstName,setFirstName] = useState('First Name');
    const [lastName,setLastName] = useState('Last Name');
    const [email,setEmail] = useState('Email');
    const [phoneNumber,setPhoneNumber] = useState('Phone Number');

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
                    <button id="edit-details-btn" type="submit" onClick={handleEditDetails}>Edit Details</button>
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