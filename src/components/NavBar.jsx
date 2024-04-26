import { useNavigate, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from '../authSlice';


export default function NavBar() {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    navigate("/");
  };

  return (
    <nav className="p-4">
      <div className="container mx-auto flex justify-between items-center border-b-2 border-gray-500 pb-4">
        <div className="text-black text-3xl font-bold">
          <Link to="/">To-do List</Link>
        </div>

        {/* Sign-up and Login Buttons: If user is signed in, show Logout button and hide Sign up button*/}
        <div className="flex space-x-4">
          {!isLoggedIn ? (
            <>
              <Link
                to="/signup"
                className="bg-cyan-500 text-white px-4 py-2 rounded"
              >
                Sign Up
              </Link>
              <Link
                to="/login"
                className="bg-emerald-500 text-white px-4 py-2 rounded"
              >
                Log In
              </Link>
            </>
          ) : (
            <button
              className="bg-slate-800 text-white px-4 py-2 rounded"
              onClick={handleLogout}
            >
              Log Out
            </button>
          )}
        </div>
      </div>
    </nav>
  );
}
