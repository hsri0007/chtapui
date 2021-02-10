import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";

const Table = ({ history }) => {
  const [data, setData] = useState([]);
  const [saveuser, setSaveuser] = useState({
    email: "",
    firstname: "",
    lastname: "",
    password: "",
    type: "User",
  });

  const deleteItem = (email) => {
    const datas = data.filter((item) => email !== item.email);
    window.localStorage.setItem("userData", JSON.stringify(datas));
    setData(datas);
  };

  useEffect(() => {
    const parsedData = JSON.parse(window.localStorage.getItem("userData"));
    setData(parsedData);
    const savedData = JSON.parse(window.localStorage.getItem("saveUser"));
    setSaveuser(savedData);
  }, []);
  return (
    <div className="table__main__box">
      {saveuser.type === "Admin" ? (
        <h1>Logged in as Admin</h1>
      ) : (
        <h1>Logged in as User</h1>
      )}
      <button
        onClick={() => {
          // window.localStorage.removeItem("saveUser");
          history.push("/login");
        }}
        className="btn">
        {" "}
        Logout
      </button>
      {saveuser.type === "Admin" ? (
        <table>
          <tr>
            <th>Email</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>remove User</th>
          </tr>
          {data &&
            data.map((val) => {
              const { email, firstname, lastname, type } = val;
              return (
                <tr>
                  <td>{email}</td>
                  <td>{firstname}</td>
                  <td>{lastname}</td>
                  <td>
                    <button
                      onClick={() => deleteItem(email)}
                      disabled={type === "Admin"}>
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
        </table>
      ) : (
        <table>
          <tr>
            <th>Email</th>
            <th>First Name</th>
            <th>Last Name</th>
          </tr>
          <tr>
            <td>{saveuser.email}</td>
            <td>{saveuser.firstname}</td>
            <td>{saveuser.lastname}</td>
          </tr>
        </table>
      )}
    </div>
  );
};

export default withRouter(Table);
