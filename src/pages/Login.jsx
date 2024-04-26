import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Form, FormGroup } from "react-bootstrap";
import { login } from '../authSlice';

export default function LoginPage() {
  const users = useSelector((state) => state.auth.users);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Basic validation
    if (!email || !password) {
      alert("Please fill in all fields");
      return;
    }
    // Check if user exists and credentials match
    const user = users.find(
      (user) => user.email === email && user.password === password
    );
    if (user) {
      dispatch(login(user));
      navigate("/");
    } else {
      alert("Invalid email or password");
    }
  };

  return (
    <div className="container">
      <h1 className="text-2xl my-4">
        <b>Login</b>
      </h1>
      <Form onSubmit={handleSubmit}>
        <FormGroup className="mb-3">
          <Form.Label htmlFor="email">Email:</Form.Label>
          <Form.Control
            type="email"
            id="email"
            value={email}
            placeholder="Enter your email..."
            onChange={(e) => setEmail(e.target.value)}
          />
        </FormGroup>
        <FormGroup className="mb-3">
          <Form.Label htmlFor="password">Password:</Form.Label>
          <Form.Control
            type="password"
            id="password"
            value={password}
            placeholder="Enter your password..."
            onChange={(e) => setPassword(e.target.value)}
          />
        </FormGroup>
        <button className="btn bg-primary text-white" type="submit">
          Log In
        </button>
      </Form>
    </div>
  );
}
