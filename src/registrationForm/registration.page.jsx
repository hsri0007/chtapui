import React from "react";

const Registration = ({ history }) => {
  const [state, setState] = React.useState({
    email: "",
    password: "",
    firstname: "",
    lastname: "",
  });
  const [admin, setAdmin] = React.useState("User");
  const [registration, setRegistration] = React.useState([]);

  const [confirm, setConfirm] = React.useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (confirm === state.password) {
      const sendState = {
        ...state,
        type: admin,
      };
      window.localStorage.setItem(
        "userData",
        JSON.stringify([...registration, sendState])
      );
      alert("registered successfully");
      history.push("/login");
    } else {
      alert("make sure that password and confirm password must be match");
    }
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setState((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  React.useEffect(() => {
    const parsedData = JSON.parse(window.localStorage.getItem("userData"));
    if (parsedData) {
      setRegistration(parsedData);
    } else {
      setRegistration([]);
    }
  }, [setRegistration]);
  return (
    <div className="login__main__container">
      <form className="login_container" onSubmit={handleSubmit}>
        <div className="Login__login__label">
          <label>email</label>
          <input type="email" name="email" onChange={handleChange} required />
        </div>
        <div className="Login__login__label">
          <label>Password</label>
          <input
            type="password"
            name="password"
            onChange={handleChange}
            required
          />
        </div>
        <div className="Login__login__label">
          <label>FirstName</label>
          <input
            type="text"
            name="firstname"
            onChange={handleChange}
            required
          />
        </div>
        <div className="Login__login__label">
          <label>Lastname</label>
          <input type="text" name="lastname" onChange={handleChange} required />
        </div>
        <div className="Login__login__label">
          <label>Confirm password</label>
          <input
            type="password"
            onChange={(e) => setConfirm(e.target.value)}
            required
          />
        </div>
        <div className="Login__login__label">
          <label>User Type</label>
          <select
            onChange={(e) => setAdmin(e.target.value)}
            style={{ padding: "5px 3px" }}>
            <option value="Admin">Admin</option>
            <option value="User">user</option>
          </select>
        </div>
        <div className="Login__login__label">
          <input type="submit" className="btn" />
        </div>
      </form>
    </div>
  );
};

export default Registration;
