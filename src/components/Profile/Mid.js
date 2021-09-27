import { useState, useEffect } from "react";
import Axios from "axios";

const Mid = () => {

    const [ChangeDetails, setChangeDetails] = useState(false);
    const [isPending, setIsPending] =  useState(false);

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
              setFirstName(response.data.first_name);
              setLastName(response.data.last_name);
              setPhoneNumber(response.data.phone_number);
              setEmail(response.data.email);     
          }).catch((error) => {
              console.log(error);
          })
    },[ChangeDetails])

    const handleEditDetails = () => {
        setChangeDetails(true);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        setIsPending(true);
        Axios.post("http://localhost:5000/profile", {
                user_id:1,   // set the user id by session_id
                email: email,
                first_name: firstName,
                last_name: lastName,
                phone_number: phoneNumber,
          }).then((response) => {
            console.log(response);
            setChangeDetails(false);
        }).catch((error) => {
            console.log(error);
            setChangeDetails(false);
        })
        setIsPending(false);
        
    }

    return ( 
        <div className="details-content-mid">
            {(!ChangeDetails) ? (
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
                    </div>
            ) : (
                <div className="details-content-right">
                <div id="edit-details">
                    <h3>Edit Details</h3>
                    <form onSubmit={handleSubmit}>
                        <label>First Name</label>
                        <input 
                            type="text"
                            required
                            defaultValue = {firstName}
                            onChange = {(e) => setFirstName(e.target.value)}
                            // onChange = {(e) => console.log(e.target.value)}
                        />
                        <label>Last Name</label>
                        <input 
                            type="text"
                            required
                            value = {lastName}
                            onChange = {(e) => setLastName(e.target.value)}
                        />
                        <label>Phone Number</label>
                        <input 
                            type="text"
                            required
                            maxLength = {10}
                            minLength = {10}
                            value = {phoneNumber}
                            onChange = {(e) => setPhoneNumber(e.target.value)}
                        />
                        <label>Email</label>
                        <input 
                            type="text"
                            required
                            value = {email}
                            // onChange = {(e) => setEmail(e.target.value)}
                        />
                        {!isPending && <button>Save Details</button>}
                        {isPending && <button>Saving...</button>}
                    </form>
                </div>
            </div>
            )}
        </div>
 ); 
}
 
export default Mid;