import { useState } from "react";
import { useHistory } from "react-router";
import Axios from 'axios';

const FormDetails = ({setChangeDeatils}) => {

    // const { profileImage, firstName, lastName, phoneNumber, email } = useFetch('dblink' + id)
    
    const [isPending, setIsPending] =  useState(false);
    const history = useHistory();

    const [email, setEmail] = useState('');
    const [firstName,setFirstName] = useState('');
    const [lastName,setLastName] = useState('');
    const [phoneNumber,setPhoneNumber] = useState('');

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


    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(lastName)

        setIsPending(true);
        // post request to update profile details
        Axios.post("http://localhost:5000/profile", {
            params : {
                user_id:1,   // set the user id by session_id
                email: email,
                first_name: firstName,
                last_name: lastName,
                phone_number: phoneNumber,
                
            }
          }).then((response) => {
            console.log(response);
        }).catch((error) => {
            console.log(error);
        })

        setChangeDeatils(false);
    }
 
    return (  
        <div className="details-content-right">
            <div id="edit-details">
                <h3>Edit Details</h3>
                <form onSubmit={handleSubmit}>
                    <label>First Name</label>
                    <input 
                        type="text"
                        required
                        value = {firstName}
                        // onChange = {(e) => setFirstName(e.target.value)}
                        onChange = {(e) => console.log(e.target.value)}
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
    );
}
 
export default FormDetails;