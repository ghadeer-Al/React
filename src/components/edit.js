import React, { Component } from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import alertify from "alertifyjs";
import "alertifyjs/build/css/alertify.css";
import User from "./user";

const EditUser = () => {
  const { id } = useParams();

  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [status, setStatus] = useState("");
  const [user, setUser] = useState({ username: "", password: "", status: "" });

  useEffect(() => {
    const editUserId = async () => {
      const data = await fetch("https://localhost:7027/api/Users/" + id);
      const res = await data.json();
      setUser(await res);
    };
    editUserId();
  }, []);

  const navigate = useNavigate();
  const navigateToUser = () => {
    navigate("/User");
  };

  const handlePassword = (event) => {
    setPassword(event.target.value);
  };

  const handleStatus = (event) => {
    setStatus(event.target.value);
  };

  const saveData = () => {
    console.log({ id });

    EditOperation();
  };

  const EditOperation = () => {
    axios.put("https://localhost:7027/api/Users/" + id, {
      username,
      password,
      status,
    });
  };

  const handleEdit = (e) => {
    setUser({ user, [e.target.name]: e.target.value });
    setUserName(e.target.value);
  };

  const clickHandle = () => {
    alertify.alert("Edit", "User has been modified", function () {
      alertify.message("OK");
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    navigateToUser();
  };
  return (
    <div>
      <h3 style={{ textAlign: "center", fontSize: 35 }}>Edit User page</h3>

      <form
        onSubmit={handleSubmit}
        style={{ textAlign: "center", fontSize: 35 }}
      >
        <div className="form-group" style={{ fontSize: 19 }}>
          <label for="text">User Name</label>
          <input
            type="text"
            className="form-control"
            value={user.username}
            username="username"
            onChange={(e) => handleEdit(e)}
            // onChange={(event) => handleUserName(event)}
          />
        </div>
        <div className="form-group" style={{ fontSize: 19 }}>
          <label for="text">Status </label>
          <input
            type="text"
            className="form-control"
            value={user.status}
            status="status"
            onChange={(event) => handleStatus(event)}
          />
        </div>

        <div className="form-group" style={{ fontSize: 19 }}>
          <label for="password">Password </label>
          <input
            type="password"
            className="form-control"
            value={user.password}
            password="password"
            onChange={(event) => handlePassword(event)}
          />
        </div>

        <button
          type="submit"
          className="btn btn-primary"
          onClick={() => {
            saveData({ id, username, password, status });
            clickHandle();
          }}
        >
          Edit User
        </button>
      </form>
    </div>
  );
};

export default EditUser;
