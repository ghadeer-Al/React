import { useEffect, useState } from "react";
import {  Button, Collapse } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import alertify from "alertifyjs";
import "alertifyjs/build/css/alertify.css";

const User = () => {
  const [users, setUsers] = useState();

  const navigate = useNavigate();
    // const refreshPage = () => {
  //   navigate(0);
  // };

  const navigateToUser = () => {
    navigate("/User");
  };

 
  useEffect(() => {
    const fetchUsers = async () => {
      const data = await fetch("https://localhost:7027/api/Users");

      const jsonData = await data.json();
      setUsers(jsonData);
    };

    fetchUsers();
  }, []);

  const deleteOperation = (id) => {
    fetch("https://localhost:7027/api/Users/" + id, {
      method: "Delete",
    });
    navigateToUser();
    // refreshPage();
    // getData();
  };

  // const getData = () => {
  //   let result = fetch("https://localhost:7027/api/Users");
  //   let res = result.json()

  //   // .then (users=>{
  //   //   const username=[], password=[],status=[];
  //   //   users.result.forEash(users=>{
  //   //     username.push(users.username)
  //   //     password.push(users.password)
  //   //     status.push(users.status)
  //   //   });
  //   //   this.setState({

  //   //   })
  //   // })
  // setUsers(res);
  //   };
  // useEffect(()=>{
  //   let result= getData()
  //   setUsers(result)
  // },[])

  const clickHandle = () => {
    alertify.alert("Delete", "Delete User!!", function () {
      alertify.message("OK");
    window.location.reload();

    });
  };
  return (
    <div>
      <h4 style={{ textAlign: "center", fontSize: 40 }}>User List</h4>
      <div
        style={{
          justifyContent: "center",
          display: "flex",
          textAlign: "center",
        }}
      >
        <table
          className="table table-striped center"
          style={{ borderCollapse: Collapse, gap: "13px" }}
        >
          <thead>
            <tr>
              <th style={{ fontSize: 23 }}>UserName</th>
              <th style={{ fontSize: 23 }}>Status</th>
              <th style={{ fontSize: 23 }}>Operations</th>
            </tr>
          </thead>
          <tbody>
            {users?.map((user) => {
              return (
                <tr key={user.id}>
                  <td>{user.username}</td>
                  <td> {user.status}</td>
                  <td>
                    <Button
                      onClick={() => {
                        clickHandle();
                        deleteOperation(user.id);
                      }}
                      style={{
                        backgroundColor: "red",
                        color: "#fff",
                        padding: " 3px",
                      }}
                    >
                      Delete
                    </Button>

                    <a
                      style={{
                        backgroundColor: "green",
                        color: "#fff",
                        padding: "4px",
                        margin: "15px",
                        borderRadius: "5px",
                      }}
                      href={`/Edit/${user.id}`}
                    >
                      Edit
                    </a>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default User;
