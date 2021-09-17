import { useState } from "react";

const ProfileImage = ({id}) => {

    // const { profileImage, firstName, lastName, phoneNumber, email } = useFetch('dblink' + id)
    const [profileImage, setProfileImage] = useState('imgs/svg-9.svg')
    const [changeImage, setChangeImage] = useState(false)
    const [selectImage, setSelectImage] = useState(null)
    const handleChangePic = (e) => {
        console.log(e);
        setChangeImage(true);
    }

    const fileSelectedHandler = (e) => {
        setSelectImage(e.target.files[0]);
    }

    const fileUploadHandler = (e) => {
        const imgpath = 'imgs/' + selectImage.name;
        // console.log(imgpath);
        setProfileImage(imgpath);
        setChangeImage(false)
        // configure this part to upload the image to database and set path
    }


    return ( 
            <div className="details-content-left">
                <img className="profile-img" src={profileImage} alt="Security" />
                { !changeImage && (<button id="edit-pic-btn" type="submit" onClick={handleChangePic}>
                    <img id="edit-pic-btn-icon" src="imgs/icon1.png" alt="" />
                    {/* <input type="file" Upload /> */}

                </button>)}

                { changeImage && (
                    <><input type="file" onChange={fileSelectedHandler} /><button onClick={fileUploadHandler}>Upload</button></>
                )}
            </div>
     ); 
}
 
export default ProfileImage;