import NavBar from "./components/NavBar";
import WelcomePage from "./pages/Welcome";
import HomePage from "./pages/Home";
import LoginPage from "./pages/Login";
import SignupPage from "./pages/Signup";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  return (
    <Router>
      <NavBar />
      <Routes>
        {/* display homepage if user is logged in, else show the welcome page */}
        {!isLoggedIn ? (
          <>
            <Route path="/" element={<WelcomePage />} />
            <Route
              path="/login"
              element={<LoginPage />}
            />
            <Route
              path="/signup"
              element={<SignupPage />}
            />
          </>
        ) : (
          <Route path="/" element={<HomePage />} />
        )}
      </Routes>
    </Router>
  );
}

export default App;
