import React from "react";

const Edit = ({ match, history }) => {
  const [input, setInput] = React.useState("");
  const [crudData, setCrudData] = React.useState([]);
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = crudData.map((item) =>
      Number(match.params.id) === Number(item.id) ? { ...item, input } : item
    );

    window.localStorage.setItem("cruddata", JSON.stringify(data));

    history.push("/");
  };

  React.useEffect(() => {
    const parsedData = JSON.parse(window.localStorage.getItem("cruddata"));

    if (parsedData === null) {
      setCrudData([]);
      console.log(parsedData, "if");
    } else {
      setCrudData(parsedData);
      console.log(parsedData, "else");
    }
  }, [setCrudData]);
  return (
    <div className="login__main__container">
      <form className="login_container" onSubmit={handleSubmit}>
        <div className="Login__login__label">
          <label>Edit</label>
          <input
            type="text"
            onChange={(e) => setInput(e.target.value)}
            required
          />
        </div>

        <div className="Login__login__label">
          <input type="submit" className="btn" value="submit" />
        </div>
      </form>
    </div>
  );
};

export default Edit;
