import { useEffect, useState } from "react";
import { Button, Collapse } from "react-bootstrap";
import { json, useNavigate } from "react-router-dom";
import alertify from "alertifyjs";
import "alertifyjs/build/css/alertify.css";
import Toastify from "toastify-js";

const User = () => {
  const [users, setUsers] = useState();
  const [error, setError] = useState();

  useEffect(() => {
    const fetchUsers = async () => {
      const data = await fetch("https://localhost:7027/api/Users");

      const jsonData = await data.json();
      setUsers(jsonData);
    };

    fetchUsers();
  }, []);

  const deleteOperation = (id) => {
    // alertify.confirm(message, onok, oncancel);
    // alertify.confirm('Confirm Title', 'Confirm Message', function(){ alertify.success('Ok') }
    //             , function(){ alertify.error('Cancel')
    //             return false;
              //    alertify.confirm('a callback will be invoked on ok.')
              //  .set('onok', function(closeEvent){ alertify.success('Ok');} ); 

              //   alertify.confirm('a callback will be invoked on cancel.')
              //   .set('oncancel', function(closeEvent){ alertify.error('Cancel');} ); 
              // });
  
    fetch("https://localhost:7027/api/Users/" + id, {
      method: "Delete",
    })
      .then(async (response) => {
       var result = await response.text();
        if (response.status == 200) {
            alertify.alert("Delete", "Delete User!!", function () {
      alertify.message("OK");
      window.location.reload();
    console.log("successful")
     
    });

        
        
        } else {
          throw result;
        }
      })
      .catch((err) => {
        console.log(err);
        //alertify. 
      });
    alertify.alert("Error", "faild", function () {
      alertify.message("OK");
    });
  };

  // const clickHandle = () => {
  //   alertify.alert("Delete", "Delete User!!", function () {
  //     alertify.message("OK");
  //     window.location.reload();
  //   });
  // };

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
                        // clickHandle();
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
