import React from "react";
import { Link } from "react-router-dom";

const LoginPage = ({ history }) => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    const parsedData = JSON.parse(window.localStorage.getItem("userData"));
    const checkUser = parsedData.find(
      (item) => item.email === email && item.password === password
    );
    window.localStorage.setItem("saveUser", JSON.stringify(checkUser));
    if (checkUser) {
      alert("success");
      history.push("/dashboard");
    } else {
      alert("invalid credentials");
    }
  };
  return (
    <div className="login__main__container">
      <form className="login_container" onSubmit={handleSubmit}>
        <div className="Login__login__label">
          <label>Email</label>
          <input
            type="email"
            name="email"
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="Login__login__label">
          <label>Password</label>
          <input
            type="password"
            name="password"
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className="Login__login__label">
          <input type="submit" className="btn" value="login" />
        </div>
        <div
          className="Login__login__label"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}>
          <Link to="/Registration">SignUP</Link>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;
