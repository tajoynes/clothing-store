import React, { useState } from "react";
import {
  createAuthUserWithEmailandPassword,
  createUserDocumentFromAuth,
} from "../../utils/firebase.utils";

import FormInput from "../form-input/form-input.component";
import Button from "../button/button.component";

import "./sign-up-form.styles.scss";

const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};
const SignUpForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    try {
      const { user } = await createAuthUserWithEmailandPassword(
        email,
        password
      );

      await createUserDocumentFromAuth(user, { displayName });
      resetFormFields();
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        alert("Cannot create user, email is already in use try another");
      } else {
        console.log("Create user error", error.message);
      }
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <div className="sign-up-container">
      <h2>Don't have a account</h2>
      <span>Sign up with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Display Name"
          onChange={handleChange}
          required
          type="text"
          name="displayName"
          value={displayName}
        />
        <FormInput
          label="Email"
          onChange={handleChange}
          required
          type="email"
          name="email"
          value={email}
        />
        <FormInput
          label="Password"
          onChange={handleChange}
          required
          type="password"
          name="password"
          value={password}
        />
        <FormInput
          label="Confirm Password"
          onChange={handleChange}
          required
          type="password"
          name="confirmPassword"
          value={confirmPassword}
        />
        <Button type="submit"> Submit</Button>
      </form>
    </div>
  );
};

export default SignUpForm;
