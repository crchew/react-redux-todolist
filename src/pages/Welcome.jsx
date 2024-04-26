import { Link } from "react-router-dom";

export default function WelcomePage() {
  return (
    <div className="flex flex-col mx-20 mt-20">
      <h1 className="text-4xl text-center p-4">Create your To Do List.</h1>
      <h2 className="text-2xl text-center p-4">Get organized, get ahead</h2>

      {/* Was requested to make the signup and login buttons work, but they work just fine on my end */}
      <div className="flex justify-around mt-20">
        <button className="bg-cyan-500 text-white px-4 py-4 rounded w-80">
          <Link to="/signup">Sign Up</Link>
        </button>
        <button className="bg-emerald-500 text-white px-4 py-4 rounded w-80">
          <Link to="/login">Log In</Link>
        </button>
      </div>
    </div>
  );
}
