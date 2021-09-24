import React, { useEffect, useState } from "react";
import "./LogIn.css";
import FormLogIn from "./FormLogIn";
import FormSuccess from "./FormSuccess";
import { Redirect } from "react-router-dom";




function LogIn(props) {

  
  const [isSubmitted, setIsSubmitted] = useState(false);

  function submitForm() {
    setIsSubmitted(true);
  }
  return (
    <>
      {/**background-image: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('../img/Midwife.jpg') !important;
    background-size: cover !important; <Redirect to='/' />*/}
      <div className="login-container">
        <div className="login-content-left">
          <img className="login-img" src="imgs/sapiens login.png" alt="Security" />
        </div>
        {!isSubmitted ? (
          <FormLogIn submitForm={submitForm} setSignInClicked={props.setSignInClicked}/>
        ) : (
          <Redirect to='/' />
        )}
        {/* <FormLogIn submitForm={submitForm} /> */}
      </div>
    </>
  );
};

export default LogIn;
