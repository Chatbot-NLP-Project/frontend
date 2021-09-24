import React, { useState } from 'react';
import './Register.css';
import FormSignup from './FormSignup';
import FormSuccess from './FormSuccess';
// import Axios from "axios";
import useForm from "./FormSignup";
// import { Redirect } from 'react-router-dom';

const Register = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  function submitForm() {
    setIsSubmitted(true);
  }
  
  return (
    <>
    {/**background-image: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('../img/Midwife.jpg') !important;
    background-size: cover !important; <Redirect to='/' />*/}
      <div className='form-container'>

        <div className='form-content-left'>
          <img className='form-img' src='imgs/sapiens 1.png' alt='Security' />
        </div>
        {!isSubmitted ? (
          <FormSignup submitForm={submitForm} />
        ) : (
          
          <FormSuccess />
        )}
      </div>
    </>
  );
};

export default Register;
