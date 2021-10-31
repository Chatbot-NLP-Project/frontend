
import React, { useState } from "react";
import validator from 'validator'

export default function validateInfo(values) {
  let errors = {};

  if (!values.firstname.trim()) {
    errors.firstname = "First name required";
  } else if (!/^[A-Za-z]+/.test(values.firstname.trim())) {
    errors.firstname = "Enter a valid name";
  }

  if (!values.lastname.trim()) {
    errors.lastname = "Last name required";
  } else if (!/^[A-Za-z]+/.test(values.lastname.trim())) {
    errors.lastname = "Enter a valid name";
  }

  if (!Number(values.phonenumber)) {
    errors.phonenumber = "Phone number should be numeric";
  } else if (values.phonenumber.length < 10) {
    errors.phonenumber = "Phone number must consist of 10 digits"
  } else if (values.phonenumber.substr(0,3) == "036" ) {
    errors.phonenumber = "Phone number should be a mobile number. Not a land line"
  } else if (!(values.phonenumber.substr(0,3) == "071" || values.phonenumber.substr(0,3) == "072" || values.phonenumber.substr(0,3) == "075" || values.phonenumber.substr(0,3) == "076" || values.phonenumber.substr(0,3) == "077" || values.phonenumber.substr(0,3) == "078" || values.phonenumber.substr(0,3) == "070")) {
    errors.phonenumber = "This number is not valid. It must be 070, 071, 072, 075, 076, 077, or 078"
  }

  if (!values.email) {
    errors.email = "Email required";
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = "Email address is invalid";
  }

  if (!values.password) {
    errors.password = "Password is required";
  } else if (values.password.length < 8) {
    errors.password = "Password needs to be 8 characters or more";
  } 
  else if (values.password.toLowerCase() === values.password) {
    errors.password = "Password must contain an uppercase letter";
  }
  else if (values.password.toUpperCase() === values.password) {
    errors.password = "Password must contain a lowercase letter";
  }
  // else if (/\d/.test(values.password)) {
  //   errors.password = "Password must contain a number";
  // }
  // else if (/[ `!@#$%^&*()_+\-=\]{};':"\\|,.<>?~]/.test(values.password)) {
  //   errors.password = "Password must contain a special character  ";
  // }

  // ^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,10}$
  if (!values.password2) {
    errors.password2 = "Confirmation password is required";
  } else if (values.password2 !== values.password) {
    errors.password2 = "Passwords do not match";
  }

  return errors;
}
