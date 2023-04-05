import { useState } from "react";
import Dashboard from "../components/NavBar";
import { validateEmail } from "../utils/validateEmail";
import LabelledInput from "../utils/LabelledInput";
import PasswordErrorMessage from "../utils/PasswordError";

const SignUp = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState({ value: "", isTouched: false });

  const handleChange = (e) => {
    switch (e.target.name) {
      case "firstName":
        setFirstName(e.target.value);
        break;
      case "lastName":
        setLastName(e.target.value);
        break;
      case "email":
        setEmail(e.target.value);
        break;
      case "password":
        setPassword({ ...password, value: e.target.value });
        break;
      default:
        console.log(e.target.value);
        break;
    }
  };

  const formValidity = () => {
    return (
      firstName.length >= 3 &&
      lastName.length >= 3 &&
      email &&
      password &&
      validateEmail(email) &&
      password.value.length >= 8
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Accound Created!");
    clearForm();
  };

  const clearForm = () => {
    setFirstName("");
    setLastName("");
    setEmail("");
    setPassword({ value: "", isTouched: false });
  };

  return (
    <>
      <div>
        <Dashboard />
      </div>
      <form
        onSubmit={handleSubmit}
        className="flex items-center justify-center">
        <fieldset className="w-1/4 bg-white shadow shadow-slate-500 rounded-lg h-full">
          <h2 className="text-3xl font-bold text-center py-4 ">Sign Up</h2>

          <LabelledInput
            labelName="First Name"
            name="firstName"
            type="text"
            placeholder="Enter First Name"
            value={firstName}
            onChange={handleChange}
          />
          <LabelledInput
            labelName="Last Name"
            name="lastName"
            type="text"
            placeholder="Enter Last Name"
            value={lastName}
            onChange={handleChange}
          />
          <LabelledInput
            labelName="Email "
            name="email"
            type="email"
            placeholder="Enter Email"
            value={email}
            onChange={handleChange}
          />
          <LabelledInput
            labelName="Password"
            name="password"
            type="password"
            placeholder="Enter Password"
            value={password.value}
            onChange={handleChange}
            onBlur={(e) => setPassword({ ...password, isTouched: true })}
          />
          {password.isTouched && password.value.length < 8 ? (
            <PasswordErrorMessage />
          ) : null}

          <button
            type="submit"
            disabled={!formValidity()}
            className={
              !formValidity()
                ? "bg-slate-300 py-2 px-4 m-4 rounded-md"
                : "bg-cyan-600 py-2 px-4 m-4 rounded-md"
            }>
            Sign Up
          </button>
        </fieldset>
      </form>
    </>
  );
};

export default SignUp;
