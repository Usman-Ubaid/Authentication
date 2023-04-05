import { Routes, Route } from "react-router";
import "./App.css";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/dash" element={<Dashboard />} />
      </Routes>
    </div>
  );
}

export default App;
