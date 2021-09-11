import React from "react";
import validate from "./validateInfo";
import useForm from "./useForm";
import "./Register.css";
// Promise based HTTP client for the node.js
// import Axios from "axios";
import { Badge, Box, Center } from "@chakra-ui/react";

const FormSignup = ({ submitForm }) => {

  const { handleChange, handleSubmit, values, errors, backEndErrors } = useForm(
    submitForm,
    validate
  );
  
  return (
    <div className="form-content-right">
      <form onSubmit={handleSubmit} className="form" noValidate>
        <h1>
          Register to get service through an intelligent chatbot!!!
          <br />
          Create your account by filling out the information below.
        </h1>
        {backEndErrors.error === "" ? (
          ""
        ) : (
          <Box w="80%" h="40px" bg="red.500" borderRadius="5px">
            <Center>
              <Badge variant="solid" m="2%" colorScheme="red">
                {backEndErrors.error}
              </Badge>
            </Center>
          </Box>
        )}
        <div className="form-inputs">
          <label className="form-label">First Name</label>
          <input
            className="form-input"
            type="text"
            name="firstname"
            placeholder="Enter your first name"
            value={values.firstname}
            onChange={handleChange}
          />
          {/*If there are errors that means left side term is true, errors.username will be shown*/}
          {errors.firstname && <p>{errors.firstname}</p>}
        </div>
        <div className="form-inputs">
          <label className="form-label">Last Name</label>
          <input
            className="form-input"
            type="text"
            name="lastname"
            placeholder="Enter your last name"
            value={values.lastname}
            onChange={handleChange}
          />
          {/*If there are errors that means left side term is true, errors.username will be shown*/}
          {errors.lastname && <p>{errors.lastname}</p>}
        </div>
        <div className="form-inputs">
          <label className="form-label">Phone Number</label>
          <input
            className="form-input"
            type="tel"
            name="phonenumber"
            placeholder="Enter your phone number"
            value={values.phonenumber}
            onChange={handleChange}
          />
          {errors.phonenumber && <p>{errors.phonenumber}</p>}
        </div>
        <div className="form-inputs">
          <label className="form-label">Email</label>
          <input
            className="form-input"
            type="email"
            name="email"
            placeholder="Enter your email"
            value={values.email}
            onChange={handleChange}
          />
          {errors.email && <p>{errors.email}</p>}
        </div>
        <div className="form-inputs">
          <label className="form-label">Password</label>
          <input
            className="form-input"
            type="password"
            name="password"
            placeholder="Enter your password"
            value={values.password}
            onChange={handleChange}
          />
          {errors.password && <p>{errors.password}</p>}
        </div>
        <div className="form-inputs">
          <label className="form-label">Confirm Password</label>
          <input
            className="form-input"
            type="password"
            name="password2"
            placeholder="Confirm your password"
            value={values.password2}
            onChange={handleChange}
          />
          {errors.password2 && <p>{errors.password2}</p>}
        </div>
        {backEndErrors.error == "" ? (
          ""
        ) : (
          <Box  mt='20px'>
            <Badge variant="outline" colorScheme="red">
              Sign Up Failed
            </Badge>
          </Box>
        )}
        <button className="form-input-btn" type="submit" >
          Sign up
        </button>
        <span className="form-input-login">
          Already have an account? Login <a href="signin">here</a>
        </span>
      </form>
    </div>
  );
};

export default FormSignup;
