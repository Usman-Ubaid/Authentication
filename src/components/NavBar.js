import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout, reset } from "../features/auth/authSlice";
const NavBar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.auth);

  const onLogout = (e) => {
    e.preventDefault();

    dispatch(logout());
    dispatch(reset());
    navigate("/");
  };

  return (
    <header className="header">
      <h1>
        <Link to="/dash">Dashboard</Link>
      </h1>
      <div className="nav-bar">
        <nav>
          <ul>
            {user ? (
              <li>
                <button type="submit" onClick={onLogout}>
                  Logout
                </button>
              </li>
            ) : (
              <>
                <li>
                  <Link to="/">Login</Link>
                </li>
                <li>
                  <Link to="/signup">SignUp</Link>
                </li>
              </>
            )}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default NavBar;
