import React, { useState } from "react";
import { Button } from "react-bootstrap";
// import axios from "axios";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const navigateToUser = () => {
    navigate("/User");
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
        marginLeft: "400px",
      }}
    >
      <Form.Group>
        <Form.Label>UserName</Form.Label>

        <Form.Control
          autoFocus
          type="text"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
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
        <Button
          type="submit"
          onClick={() => {
            navigateToUser();
          }}
        >
          Login
        </Button>
      </div>
    </div>
  );
};

export default Login;

//     // const handleLogin = async (userName:string,password:string) => { */}
//     {/* //     axios
//     //       .post(`https://localhost:7027/api/Users/Login?username= ${userName} &password= ${password}`,
//     //       userName,
//     //       password

//     //       )
//     //       .then((response) => { */}

//     {/* //         setUserName(response.data);
//     //         setPassword(response.data);

//     //       })
//     //       .catch((error) => { */}
//     {/* //         console.log("error", error);
//     //       });
//     //   };
