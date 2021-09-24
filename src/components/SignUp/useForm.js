import { useState, useEffect } from "react";
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
    setIsSubmitting(true);

    if (Object.keys(errors).length === 0) {
      Axios.post("http://localhost:5000/register", {
        firstName: firstName,
        lastName: lastName,
        email: email,
        phoneNumber: phoneNumber,
        password: password,
      }).then((response) => {
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
