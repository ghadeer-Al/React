import { useState } from "react";

const AddUser = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [status, setStatus] = useState("");

  const handleUserName = (event) => {
    setUserName(event.target.value);
  };

  const handlePassword = (event) => {
    setPassword(event.target.value);
  };

  const handleStatus = (event) => {
    setStatus(event.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const body = { userName, password, status };

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
    <div className="card text-center ">
      <h3 style={{textAlign : 'center', fontSize: 35 }}>Add User page</h3>
      <form onSubmit={handleSubmit}>
        <div className="form-group" style={{ fontSize: 19 }}>
          <label for="text">User name</label>
          <input
            type="text"
            className="form-control"
            id="text"
            placeholder="User Name"
            value={userName}
            onChange={(event) => handleUserName(event)}
          />
        </div>
        <div className="form-group" style={{ fontSize: 19 }}>
          <label for="text">Status</label>
          <input
            type="text"
            className="form-control"
            id="text"
            placeholder="Status"
            value={status}
            onChange={(event) => handleStatus(event)}
          />
        </div>

        <div className="form-group" style={{ fontSize: 19}}>
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

        <button type="submit" className="btn btn-primary">
          Add User
        </button>
      </form>
      {/* <h5 className="card-header">Add user</h5> */}
      {/* <div className="card-body">Return Id: {addId}</div> */}
    </div>
  );
};

export default AddUser;
