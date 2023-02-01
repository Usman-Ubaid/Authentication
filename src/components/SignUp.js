import { useState } from "react";
import { validateEmail } from "../utilis/validateEmail";

const PasswordErrorMessage = () => {
  return (
    <p className="text-xs text-red-600 m-1">
      The password should contain 8 characters
    </p>
  );
};

const SignUp = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState({ value: "", isTouched: false });

  const handleChange = (e) => {
    if (e.target.name === "firstName") {
      setFirstName(e.target.value);
    } else if (e.target.name === "lastName") {
      setLastName(e.target.value);
    } else if (e.target.name === "email") {
      setEmail(e.target.value);
    } else if (e.target.name === "password") {
      setPassword({ ...password, value: e.target.value });
    } else {
      console.log("nothing"); // fix this
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

  const lableStyle = "flex flex-col mx-4 my-8 font-semibold";

  const inputStyle =
    "border-slate-400 border-2 p-1 mt-1 font-normal rounded-md";

  return (
    <form onSubmit={handleSubmit} className="flex items-center justify-center">
      <fieldset className="w-1/4 bg-white shadow shadow-slate-500 rounded-lg h-full">
        <h2 className="text-3xl font-bold text-center py-4 ">Sign Up</h2>

        <label className={lableStyle}>
          First Name
          <input
            className={inputStyle}
            name="firstName"
            type="text"
            value={firstName}
            onChange={handleChange}
          />
        </label>

        <label className={lableStyle}>
          Last Name
          <input
            className={inputStyle}
            type="text"
            name="lastName"
            value={lastName}
            onChange={handleChange}
          />
        </label>

        <label className={lableStyle}>
          Email
          <input
            className={inputStyle}
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
          />
        </label>

        <label className={lableStyle}>
          Password
          <input
            className={inputStyle}
            type="password"
            name="password"
            value={password.value}
            onBlur={() => setPassword({ ...password, isTouched: true })}
            onChange={handleChange}
          />
          {password.isTouched && password.value.length < 8 ? (
            <PasswordErrorMessage />
          ) : null}
        </label>

        <button
          type="submit"
          disabled={!formValidity()}
          className={
            !formValidity()
              ? "bg-slate-300 py-2 px-4 m-4 rounded-md"
              : "bg-cyan-600 py-2 px-4 m-4 rounded-md"
          }
        >
          Sign Up
        </button>
      </fieldset>
    </form>
  );
};

export default SignUp;
