import React, { useEffect } from "react";
import BottomFooter from "../../components/Footer/BottomFooter";
import BottomItems from "../../components/Footer/BottomItems";
import Footer from "../../components/Footer/Footer";
import LogIn from "../../components/SignIn/LogIn";

function SignIn(props) {
  
  return (
    <>
      <LogIn setSignInClicked={props.setSignInClicked}/>
      <Footer />
      <BottomFooter botName="XYRON" />
    </>
  );
}

export default SignIn;
