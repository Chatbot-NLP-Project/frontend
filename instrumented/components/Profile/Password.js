import React, { useEffect, useState } from "react";
import Axios from "axios";
import { Button } from "@chakra-ui/button";
import { EmailIcon } from "@chakra-ui/icons";
import { FaUser, FaUserEdit } from "react-icons/fa";
import { Input, InputGroup, InputRightElement } from "@chakra-ui/input";
import { Center } from "@chakra-ui/layout";

const Password = () => {
  const [changePassword, setChangePassword] = useState(false);
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [misMatch, setMisMatch] = useState("");
  const [backendErrors, setBackEndErrors] = useState({ error: false, msg: "" });
  const [show1, setShow1] = React.useState(false);
  const handleClick1 = () => setShow1(!show1);
  const [show2, setShow2] = React.useState(false);
  const handleClick2 = () => setShow2(!show2);
  const [show3, setShow3] = React.useState(false);
  const handleClick3 = () => setShow3(!show3);

  const handleClick = () => {
    setChangePassword(true);
  };

  const handleSubmit = (e) => {
    // process password
    e.preventDefault();
    Axios.post("http://localhost:5000/password", {
      user_id: JSON.parse(localStorage.getItem("user"))["user_id"], // set the user id by session_id
      currentPassword: currentPassword,
      newPassword: newPassword,
      confirmPassword: confirmPassword,
    })
      .then((response) => {
        console.log("Response");
        console.log(response);
        alert(response.data);
        // if (!response.data.error) {
        //     setBackEndErrors({error: false, msg: 'Password Updated Successfully!'})
        // }
      })
      .catch((error) => {
        console.log("Error");
        console.log(error);
        alert(error.data);
        // if (response.data.error) {
        //     setBackEndErrors({error: true, msg: 'Failed to Update Password'})
        // }
      });

    setChangePassword(false);
  };

  const handleCurrent = (psswrd) => {
    setCurrentPassword(psswrd);
  };

  const handleNew = (psswrd) => {
    setNewPassword(psswrd);
  };

  const handleConfirm = (psswrd) => {
    setConfirmPassword(psswrd);
  };

  useEffect(() => {
    if (newPassword !== confirmPassword && confirmPassword !== "") {
      setMisMatch("Confirm Password does not match.");
    } else {
      setMisMatch("");
    }
  }, [confirmPassword]);

  return (
    <div className="details-content-bottom">
      {!changePassword ? (
        // <button onClick={handleClick}>Change Password</button>
        <Button
          leftIcon={<FaUserEdit />}
          onClick={handleClick}
          colorScheme="teal"
          variant="solid"
        >
          Change Password
        </Button>
      ) : (
        <form onSubmit={handleSubmit}>
            <Center> 
          <InputGroup size="md" w="30%" mb="1%">
            <Input
              pr="4.5rem"
              type={show1 ? "text" : "password"}
              placeholder="Current password"
              onChange={(e) => handleCurrent(e.target.value)}
            />
            <InputRightElement width="4.5rem">
              <Button h="1.75rem" size="sm" onClick={handleClick1}>
                {show1 ? "Hide" : "Show"}
              </Button>
            </InputRightElement>
          </InputGroup>
          </Center>
          <Center> 
          <InputGroup size="md" w="30%" mb="1%">
            <Input
              pr="4.5rem"
              type={show2 ? "text" : "password"}
              placeholder="New password"
              onChange={(e) => handleNew(e.target.value)}
            />
            <InputRightElement width="4.5rem">
              <Button h="1.75rem" size="sm" onClick={handleClick2}>
                {show2 ? "Hide" : "Show"}
              </Button>
            </InputRightElement>
          </InputGroup>
          </Center>
          <Center> 
          <InputGroup size="md" w="30%" mb="1%">
            <Input
              pr="4.5rem"
              type={show3 ? "text" : "password"}
              placeholder="Confirm password"
              onChange={(e) => handleConfirm(e.target.value)}
            />
            <InputRightElement width="4.5rem">
              <Button h="1.75rem" size="sm" onClick={handleClick3}>
                {show3 ? "Hide" : "Show"}
              </Button>
            </InputRightElement>
          </InputGroup>
          </Center>
          {/* <label>
            Current Password:
            <input
              type="password"
              required
              placeholder="Current Password"
              onChange={(e) => handleCurrent(e.target.value)}
            />
          </label>
          <label>
            New Password:
            <input
              type="password"
              required
              placeholder="New Password"
              onChange={(e) => handleNew(e.target.value)}
            />
          </label>
          <label>
            Confirm Password:
            <input
              type="password"
              required
              placeholder="Confirm Password"
              onChange={(e) => handleConfirm(e.target.value)}
            />
          </label> */}
          {misMatch && <p>{misMatch}</p>}
          {/* <input type="submit" value="Update Password"><Button
          leftIcon={<FaUserEdit />}
          onClick={handleClick}
          colorScheme="teal"
          variant="solid"
        >
          Change Password
        </Button> </input> */}
        <Button
            mt={4}
            colorScheme="teal"
            // isLoading={props.isSubmitting}
            type="submit"
          >
            Confirm
          </Button>
        </form>
      )}
    </div>
  );
};

export default Password;
