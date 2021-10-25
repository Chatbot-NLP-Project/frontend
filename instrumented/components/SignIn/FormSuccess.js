import { ArrowForwardIcon } from "@chakra-ui/icons";
import { Button, Text } from "@chakra-ui/react";
import React from "react";
import "./LogIn.css";

const FormSuccess = () => {
  return (
    <div className="form-content-right">
      <h1 className="form-success">
        You have successfully registered!
        <br />
        Now Log In{" "}
        <a href="signin">
          <Button
            rightIcon={<ArrowForwardIcon />}
            colorScheme="red"
            variant="outline"
          >
            Sign In
          </Button>
        </a>
      </h1>
      <img className="form-img-2" src="img/img-3.svg" alt="success-image" />
    </div>
  );
};

export default FormSuccess;
