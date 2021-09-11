import React, { useEffect } from "react";
import validate from "./validateInfo";
import useForm from "./useForm";
import "./LogIn.css";
// Promise based HTTP client for the node.js
//import Axios from "axios";
import { Badge, Box, Button, Center } from "@chakra-ui/react";

function FormLogIn(props) {
  const { handleChange, handleSubmit, values, errors, backEndErrors } = useForm(
    props.submitForm,
    validate,
    props.setSignInClicked
  );

  return (
    <div className="login-content-right">
      <form onSubmit={handleSubmit} className="form" noValidate>
        <h1>
          Welcome!!!
          <br />
          Sign in to use our service!
          <br />
        </h1>
        {backEndErrors == "" ? (
          ""
        ) : (
          <Box w="80%" h="40px" bg="red.500" borderRadius="5px">
            <Center>
              <Badge variant="solid" m="2%" colorScheme="red">
                {backEndErrors}
              </Badge>
            </Center>
          </Box>
        )}
        <div className="login-inputs">
          <label className="login-label">Email</label>
          <input
            className="login-input"
            type="email"
            name="email"
            placeholder="Enter your email"
            value={values.email}
            onChange={handleChange}
          />
          {errors.email && <p>{errors.email}</p>}
        </div>
        <div className="login-inputs">
          <label className="login-label">Password</label>
          <input
            className="login-input"
            type="password"
            name="password"
            placeholder="Enter your password"
            value={values.password}
            onChange={handleChange}
          />
          {errors.password && <p>{errors.password}</p>}
        </div>
        {backEndErrors == "" ? (
          ""
        ) : (
          <Box h='10%' mt='20px'>
            <Badge variant="outline" colorScheme="red">
              Sign In Failed
            </Badge>
          </Box>
        )}
        <button className="login-input-btn" type="submit">
          Sign In
        </button>
        <span className="login-input-login">
          Don't have an account? Sign up <a href="signup">here</a>
        </span>
      </form>
    </div>
  );
}

export default FormLogIn;
