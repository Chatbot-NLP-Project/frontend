import { useState } from "react";
import { useHistory } from "react-router";

const FormDetails = () => {

    // const { profileImage, firstName, lastName, phoneNumber, email } = useFetch('dblink' + id)
    const [firstName,setFirstName] = useState('First Name');
    const [lastName,setLastName] = useState('Last Name');
    const [email,setEmail] = useState('Email');
    const [phoneNumber,setPhoneNumber] = useState('Phone Number');
    const [isPending, setIsPending] =  useState(false);
    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();
        const profile = { firstName, lastName, email, phoneNumber};

        setIsPending(true);

        fetch('http://localhost:8000/blogs', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            profile: JSON.stringify(profile)
        }).then(() => {
            console.log('new blog added');
            setIsPending(false);
            history.push('/');
        })
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
                        onChange = {(e) => setFirstName(e.target.value)}
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
                        onChange = {(e) => setEmail(e.target.value)}
                    />
                    {!isPending && <button>Save Details</button>}
                    {isPending && <button>Saving...</button>}
                </form>
            </div>
        </div>
    );
}
 
export default FormDetails;