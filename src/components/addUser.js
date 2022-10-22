import { useState } from "react";

const AddUser = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [status, setStatus] = useState("true");
  const [description, setDescription] = useState("description");
  const [cdate, setCdate] = useState(new Date());
  const [statusToDo, setStatusToDo] = useState("true");

  const handleUserName = (event) => {
    console.log("777777", event.target.value);
    setUserName(event.target.value);
  };

  const handlePassword = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const body = { userName, password, status, description, cdate, statusToDo };

    const addOption = {
      method: "Post",
      headers: { "content-Type": "application/json" },
      body: JSON.stringify(body),
    };

    fetch("https://localhost:7027/api/Users", addOption).then((e) => {
      console.log("then", e);
    });
  };
  return (
    <div className="card text-center m-30 p-50">
      <h3>Add User page</h3>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label for="text">User name</label>
          <input
            type="text"
            className="form-control"
            id="text"
            aria-describedby="emailHelp"
            placeholder="User Name"
            value={userName}
            onChange={(event) => handleUserName(event)}
          />
        </div>
        <div className="form-group">
          <label for="password">Password</label>
          <input
            type="password"
            className="form-control"
            id="password"
            placeholder="Password"
            value={password}
            onChange={(event) => handlePassword(event)}
          />
        </div>
        <div className="form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="exampleCheck1"
          />
          <label className="form-check-label" for="check">
            Check me out
          </label>
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
      <h5 className="card-header">Add user</h5>
      {/* <div className="card-body">Return Id: {addId}</div> */}
    </div>
  );
};

export default AddUser;
