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

  if (!values.password2) {
    errors.password2 = "Confirmation password is required";
  } else if (values.password2 !== values.password) {
    errors.password2 = "Passwords do not match";
  }

  return errors;
}
