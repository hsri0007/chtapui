import React from "react";
import { Link } from "react-router-dom";
const Crud = ({ history }) => {
  const [input, setInput] = React.useState("");
  const [crudData, setCrudData] = React.useState([]);
  const addItem = () => {
    if (input) {
      const data = {
        id: Math.random(),
        input,
      };
      window.localStorage.setItem(
        "cruddata",
        JSON.stringify([...crudData, data])
      );
      setCrudData([...crudData, data]);
      setInput("");
    } else {
      alert("enter some values in input");
    }
  };

  const deleteItem = (id) => {
    const data = crudData.filter((item) => id !== item.id);
    window.localStorage.setItem("cruddata", JSON.stringify(data));
    setCrudData(data);
  };

  React.useEffect(() => {
    const parsedData = JSON.parse(window.localStorage.getItem("cruddata"));

    if (parsedData === null) {
      setCrudData([]);
      console.log(parsedData, "if");
    } else {
      setCrudData(parsedData);
    }
  }, [setCrudData]);
  return (
    <div className="todo__grid">
      <div>
        <Link to="/login" className="btn">
          Login
        </Link>
        <Link to="/Registration" className="btn">
          Registration
        </Link>
      </div>
      <h1 style={{ marginTop: "40px" }}>Crud Page</h1>
      <div>
        <div className="Todo_controll">
          <input
            type="text"
            onChange={(e) => setInput(e.target.value)}
            name="input"
            value={input}
            className="input__todo"
          />
          <button onClick={addItem} className="btn">
            AddItem
          </button>
        </div>
      </div>
      <div className="input_box">
        {crudData &&
          crudData.map((item, i) => (
            <div className="input__Box__item" key={i}>
              <h1>{item.input}</h1>
              <button onClick={() => deleteItem(item.id)} className="btn">
                Delete
              </button>
              <button
                onClick={() => history.push(`/edit/${item.id}`)}
                className="btn">
                Edit
              </button>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Crud;
