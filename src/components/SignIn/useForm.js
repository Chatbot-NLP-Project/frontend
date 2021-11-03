import { useState, useEffect } from "react";
import Axios from "axios";
import { Redirect } from "react-router";
//custom hook

const useForm = (callback, validate, setSignInClicked) => {
  // Axios.defaults.withCredentials = true;
  const [values, setValues] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [backEndErrors, setBackEndErrors] = useState("");

  const email = values.email;
  const password = values.password;

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
    if (Object.keys(errors).length === 0 && Object.keys(JSON.stringify(validate(values))).length === 2) {
      Axios.post("http://xyrontelecom.azurewebsites.net/login", {
        email: email,
        password: password,
      }).then((response) => {
        if (!response.data.auth) {
          console.log("error");
          setBackEndErrors(response.data.msg);
        } else {
          localStorage.setItem("access_token", response.data.access_token);
          localStorage.setItem("user", JSON.stringify(response.data.user));
          setSignInClicked(true);
          setIsSubmitting(true);
        }
      });
    }
  };

  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitting) {
      callback();
    }
  }, [errors]);

  return { handleChange, handleSubmit, values, errors, backEndErrors };
};

export default useForm;
