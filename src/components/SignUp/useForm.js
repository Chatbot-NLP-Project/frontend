import React, { useState, useEffect } from "react";
import Axios from "axios";
//custom hook

const useForm = (callback, validate) => {
  const [values, setValues] = useState({
    firstname: "",
    lastname: "",
    phonenumber: "",
    email: "",
    password: "",
    password2: "",
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [backEndErrors, setBackEndErrors] = useState({registered: false, error: ""});
  const firstName = values.firstname;
  const lastName = values.lastname;
  const email = values.email;
  const phoneNumber = values.phonenumber;
  const password = values.password;
  const simType = "";
  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors(validate(values));
    console.log(JSON.stringify(validate(values)))
    console.log(Object.keys(JSON.stringify(validate(values))).length)
    setIsSubmitting(true);
    if (Object.keys(errors).length === 0 && Object.keys(JSON.stringify(validate(values))).length === 2) {
      console.log(errors)
      console.log("registered called")

      Axios.post("http://xyrontelecom.azurewebsites.net/register", {
        firstName: firstName,
        lastName: lastName,
        email: email,
        phoneNumber: phoneNumber,
        password: password,
        simType: simType
      }).then((response) => {
        console.log(response);
        if (!response.data.registered) {
          console.log(response.data.error);
          setBackEndErrors({registered: false, error: response.data.error});
        } else {
          setBackEndErrors({registered: true, error: response.data.error});
        }
      });
    }
  };

  useEffect(() => {
    //If there are no errors and submitted it wil call submitForm function(callback())
    if (Object.keys(errors).length === 0 && isSubmitting) {
      if (!!backEndErrors.registered) {
        callback();
      }
    }
  }, [errors, backEndErrors.registered]);

  return { handleChange, handleSubmit, values, errors, backEndErrors };
};

export default useForm;
