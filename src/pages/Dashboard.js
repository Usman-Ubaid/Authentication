import NavBar from "../components/NavBar";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
const Dashboard = () => {
  const navigate = useNavigate();

  const { user } = useSelector((state) => state.auth);

  useEffect(() => {
    if (!user) {
      navigate("/");
    }
  }, [user, navigate]);

  return (
    <div>
      <NavBar />
      <h1 className="text-center text-xl font-semibold">Hello and Welcome!</h1>
    </div>
  );
};

export default Dashboard;
