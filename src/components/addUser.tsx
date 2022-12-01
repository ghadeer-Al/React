import { useState } from "react";
import { useNavigate } from "react-router-dom";
import alertify from "alertifyjs";
import "alertifyjs/build/css/alertify.css";
import React from 'react';
// import AddDialog from "./addDialog";

const AddUser = () => {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [status, setStatus] = useState<string>("");

  const navigate = useNavigate();

  const navigateToUser = () => {
    navigate("/User");
  };
  // const refreshPage = () => {
  //   navigate(0);
  // };

  const handleUserName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value);
  };

  const handlePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleStatus = (event: React.ChangeEvent<HTMLInputElement>) => {
    setStatus(event.target.value);
  };

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    const body = { username, password, status };

    const addOption = {
      method: "Post",
      headers: { "content-Type": "application/json" },
      body: JSON.stringify(body),
    };

    fetch("https://localhost:7027/api/Users", addOption).then((e) => {
      console.log("then", e);
    });
    
     navigateToUser();
    // refreshPage();
  };
  const clickHandle = () => {
    alertify.alert("Add ","Add User!", function () {
      alertify.message("OK");
      window.location.reload();
    });
  };
  return (
    <div>
      <h3 style={{ textAlign: "center", fontSize: 40, height:"5vh"}}>Add User page</h3>
      <div
        className=" text-center "
        style={{
          justifyContent: "center",
          display: "flex",
          alignItems: "center",
          height: "40vh",
        }}
      >
        
        <form
          onSubmit={handleSubmit}
          style={{ textAlign: "center", fontSize: 35 }}
        >
          <div className="form-group" style={{ fontSize: 19 }}>
            <label >User name</label>
            <input
              type="text"
              className="form-control"
              // required="required"
              placeholder="User Name"
              value={username}
              onChange={(event) => handleUserName(event)}
            />
          </div>
          <div /*className="form-group"*/ style={{ fontSize: 19 }}>
            <label className="switch">Status</label>
            <input
           
              type="text"
             
              className="form-control"
              placeholder="Status"
              value={status}
              onChange={(event) => handleStatus(event)}
            />
    
          
          </div>
          

          <div className="form-group" style={{ fontSize: 19 }}>
            <label >Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Password"
              value={password}
              onChange={(event) => handlePassword(event)}
            />
          </div>
          
          <button
            type="submit"
            className="btn btn-primary"
            onClick={() => {
              clickHandle();
            }}
          >
            Add User
          </button>
          {/* <AddDialog/> */}
        </form>
      </div>
    </div>
  );
};

export default AddUser;
