import { useEffect, useState } from "react";
import Axios from 'axios';

const Password = () => {

    const [changePassword, setChangePassword] = useState(false);
    const [currentPassword, setCurrentPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [misMatch, setMisMatch] = useState('');
    const [backendErrors, setBackEndErrors] = useState({error: false, msg: ''});

    const handleClick = () => {
        setChangePassword(true)
    }

    const handleSubmit = (e) => {
        // process password
        e.preventDefault();
        Axios.post("http://localhost:5000/password", {
                user_id:1,   // set the user id by session_id
                currentPassword: currentPassword,
                newPassword: newPassword,
                confirmPassword: confirmPassword,
          }).then((response) => {
            console.log('Response');
            console.log(response);
            alert(response.data)
            // if (!response.data.error) {
            //     setBackEndErrors({error: false, msg: 'Password Updated Successfully!'})
            // }
        }).catch((error) => {
            console.log('Error');
            console.log(error);
            alert(error.data)
            // if (response.data.error) {
            //     setBackEndErrors({error: true, msg: 'Failed to Update Password'})
            // }
        })

        setChangePassword(false);
    }

    const handleCurrent = (psswrd) => {
        setCurrentPassword(psswrd);
    }

    const handleNew = (psswrd) => {
        setNewPassword(psswrd);
    }

    const handleConfirm = (psswrd) => {
        setConfirmPassword(psswrd);
    }

    useEffect(() => {
        if (newPassword !== confirmPassword && confirmPassword !== '') {
            setMisMatch('Confirm Password does not match.');
        } else {
            setMisMatch('');
        }
    },[confirmPassword])


    return ( 
            <div className="details-content-bottom">
                {(!changePassword) ? (
                    <button onClick={handleClick}>Change Password</button>
                ) : (
                    <form onSubmit={handleSubmit}>
                    <label>
                      Current Password:
                      <input type="password" required placeholder="Current Password" onChange={(e) => handleCurrent(e.target.value)} />
                    </label>
                    <label>
                      New Password:
                      <input type="password" required placeholder="New Password" onChange={(e) => handleNew(e.target.value)}/>
                    </label>
                    <label>
                      Confirm Password:
                      <input type="password" required placeholder="Confirm Password" onChange={(e) => handleConfirm(e.target.value)} />
                    </label>
                    {(misMatch) && (
                        <p>{misMatch}</p>
                    )}
                    <input type="submit" value="Update Password" />
                  </form>
                )}
            </div>
     ); 
}
 
export default Password;