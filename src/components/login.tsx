import React, { useState } from "react";
import { Button } from "react-bootstrap";
import axios from "axios";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

    const navigate = useNavigate();
    const navigateToUser = () => {
      navigate("/User");
    };

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
  };

  const Login = () => {
    axios
      .post("https://localhost:7027/api/Users/Login", {
        headers: {
          "Content-Type": "application/json",
        },
        username: username,
        password: password,
      })
      .then((res) => {
        console.log(res.data);
        navigateToUser();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div
      className=" text-center "
      style={{
        justifyContent: "center",
        width: "40%",

        alignItems: "center",
        height: "40vh",
        paddingLeft: "100px",
        paddingRight: "70px",
        marginLeft: "490px",
      }}
    >
      <Form onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Label>UserName</Form.Label>

          <Form.Control
            autoFocus
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="password">
          <Form.Label>Password</Form.Label>

          <Form.Control
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>

        <div
          className="col text-center "
          style={{
            paddingTop: "15px",
          }}
        >
          {
            <Button type="submit" onClick={() => Login()}>
              Login
            </Button>
          }
        </div>
      </Form>
    </div>
  );
};

export default Login;
