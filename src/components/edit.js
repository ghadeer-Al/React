import React, { Component } from "react";
import { Modal, Button, Row, Col, Form } from "react-bootstrap";
import User from "./user";
import { useState, useEffect } from "react";
import axios from "axios";
import { editableInputTypes } from "@testing-library/user-event/dist/utils";
import { useParams } from "react-router-dom";
import { getSuggestedQuery } from "@testing-library/react";

//  class EditUser extends Component{
export default function EditUser() {
  const [inputs, setInputs] = useState();
//   const { id } = useParams();
  useEffect(() => {
    getUser();
  }, []);
  function getUser() {
    const addOption = {
      method: "Get",
      headers: { "content-Type": "application/json" },
      // body: JSON.stringify(body),
    };

    fetch("https://localhost:7027/api/Users", addOption).then((e) => {
      console.log("then", e);
    });
  }
  const handleChange = (event) => {
    const userName = event.target.userName;
    const password = event.target.password;
    const status = event.target.status;
    setInputs((password) => ({ ...password, [userName]: password }));
    setInputs((status) => ({ ...status, [userName]: status }));
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    const addOption = {
      method: "Post",
      headers: { "content-Type": "application/json" },
      // body: JSON.stringify(body),
    };

    fetch("https://localhost:7027/api/Users", addOption).then((e) => {
      console.log("then", e);
    });
  };
  return (
    <div>
      <h1 style={{ textAlign: "center", backgroundColor:'LightGray' }}>Current User Info</h1>
      <form onSubmit={handleSubmit}>
        <table cellSpacing="10">
          <tbody>
            <tr>
              <th>
                <label>User Name</label>
              </th>
              <td>
                <input type="text" userName="userName"></input>
              </td>
            </tr>
            <tr>
              <th>
                <label>Password</label>
              </th>
              <td>
                <input type="password" password="password"></input>
              </td>
            </tr>
            <tr>
              <th>
                <label>Status</label>
              </th>
              <td>
                <input type="text" status="status"></input>
              </td>
            </tr>
          </tbody>
        </table>
        
      </form>
      <div>
      <h1 style={{ textAlign: "center", backgroundColor:'Violet' }}>New User Info</h1>
      <form onSubmit={handleSubmit}>
        <table cellSpacing="10">
          <tbody>
            <tr>
              <th>
                <label>User Name</label>
              </th>
              <td>
                <input type="text" userName="userName"></input>
              </td>
            </tr>
            <tr>
              <th>
                <label>Password</label>
              </th>
              <td>
                <input type="password" password="password"></input>
              </td>
            </tr>
            <tr>
              <th>
                <label>Status</label>
              </th>
              <td>
                <input type="text" status="status"></input>
              </td>
            </tr>
          </tbody>
        </table>
        <button type="submit" className="btn btn-primary">
          Edie User
        </button>
      </form>
    </div>
    </div>
  );
}
