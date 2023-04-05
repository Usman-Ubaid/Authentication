import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { login, reset } from "../features/auth/authSlice";
import { useDispatch, useSelector } from "react-redux";
import Dashboard from "../components/NavBar";
// import { validateEmail } from "../utils/validateEmail";
import LabelledInput from "../utils/LabelledInput";
import PasswordErrorMessage from "../utils/PasswordError";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState({ value: "", isTouched: false });

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user, isSuccess, isError, isLoading, message } = useSelector(
    (state) => state.auth
  );

  const formValidity = () => {
    return username && password && password.value.length >= 8;
  };

  useEffect(() => {
    if (isSuccess || user) {
      navigate("/dash");

      // alert("Accound Created!");
    }
    dispatch(reset());
  }, [isSuccess, user, isError, isLoading, message, navigate, dispatch]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const userData = { username, password: password.value };
    dispatch(login(userData));

    clearForm();
  };

  const clearForm = () => {
    setUsername("");
    setPassword({ value: "", isTouched: false });
  };

  return (
    <>
      <Dashboard />
      <form
        onSubmit={handleSubmit}
        className="flex items-center justify-center">
        <fieldset className="w-1/4 bg-white shadow shadow-slate-500 rounded-lg h-full">
          <h2 className="text-3xl font-bold text-center py-4 ">Sign In</h2>

          <LabelledInput
            labelName="username"
            type="username"
            placeholder="Enter Username"
            name="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />

          <LabelledInput
            labelName="Password"
            type="password"
            placeholder="Enter Password"
            name="password"
            value={password.value}
            onChange={(e) =>
              setPassword({ ...password, value: e.target.value })
            }
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
            ]}>
            Login
          </button>
        </fieldset>
      </form>
    </>
  );
};

export default Login;
