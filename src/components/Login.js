import { useState } from "react";
import { validateEmail } from "../utils/validateEmail";
import LabelledInput from "./LabelledInput";

const PasswordErrorMessage = () => {
  return (
    <p className="text-xs text-red-600 mx-4 -mt-6">
      The password should contain at least 8 characters.
    </p>
  );
};

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState({ value: "", isTouched: false });

  const formValidity = () => {
    return (
      email && password && validateEmail(email) && password.value.length >= 8
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Accound Created!");
    clearForm();
  };

  const clearForm = () => {
    setEmail("");
    setPassword({ value: "", isTouched: false });
  };

  return (
    <form onSubmit={handleSubmit} className="flex items-center justify-center">
      <fieldset className="w-1/4 bg-white shadow shadow-slate-500 rounded-lg h-full">
        <h2 className="text-3xl font-bold text-center py-4 ">Sign In</h2>

        <LabelledInput
          labelName="Email"
          type="email"
          placeholder="Enter Email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <LabelledInput
          labelName="Password"
          type="password"
          placeholder="Enter Password"
          name="password"
          value={password.value}
          onChange={(e) => setPassword({ ...password, value: e.target.value })}
          onBlur={() => setPassword({ ...password, isTouched: true })}
        />
        {password.isTouched && password.value.length < 8 ? (
          <PasswordErrorMessage />
        ) : null}
        <button
          type="submit"
          disabled={!formValidity()}
          className={[
            !formValidity()
              ? "bg-slate-300 py-2.5 px-4 m-4 rounded-md "
              : "bg-cyan-600 py-2.5 px-4 m-4 rounded-md ",
          ]}
        >
          Login
        </button>
      </fieldset>
    </form>
  );
};

export default Login;

/* <label className={lableStyle}>
          Email
          <input
            className={inputStyle}
            type="email"
            placeholder="Enter Email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </label>
        <label className={lableStyle}>
          Password
          <input
            className={inputStyle}
            type="password"
            name="password"
            value={password.value}
            placeholder="Enter Password"
            onChange={(e) =>
              setPassword({ ...password, value: e.target.value })
            }
            onBlur={() => setPassword({ ...password, isTouched: true })}
          />
          {password.isTouched && password.value.length < 8 ? (
            <PasswordErrorMessage />
          ) : null}
        </label> */
