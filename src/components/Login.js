import { useState } from "react";
import { validateEmail } from "../utilis/validateEmail";

const PasswordErrorMessage = () => {
  return (
    <p className="text-xs text-red-600 m-1">
      The password should contain 8 characters
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

  const lableStyle = "flex flex-col mx-4 my-8 font-semibold";

  const inputStyle =
    "border-slate-400 border-2 p-1 mt-1 font-normal rounded-md";
  return (
    <form onSubmit={handleSubmit} className="flex items-center justify-center">
      <fieldset className="w-1/4 bg-white shadow shadow-slate-500 rounded-lg h-full">
        <h2 className="text-3xl font-bold text-center py-4 ">Sign In</h2>
        <label className={lableStyle}>
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
          Login
        </button>
      </fieldset>
    </form>
  );
};

export default Login;
