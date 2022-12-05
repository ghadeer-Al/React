import React, { useEffect, useState } from "react";

import Button from "@mui/material/Button";

import Switch from "@mui/material/Switch";

import FormControl from "@mui/material/FormControl";

import FormDialog from "./formDialog";
import DoubleClick from "./doubleClick";
import axios from "axios";

import DeleteIcon from "@mui/icons-material/Delete";

import alertify from "alertifyjs";
// import SearchIcon from '@mui/icons-material/Search';
import { useNavigate } from "react-router-dom";

import { Table } from "react-bootstrap";

const User = () => {
  const [users, setUsers] = useState<any>("");

  const reversed = [...users].reverse();
  const [, setChecked] = useState<boolean>(false);

  const navigate = useNavigate();
  const navigateToHom = () => {
    navigate("/Hom");
  };

  const handleChecked = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };

  const handleDoubleClick = () => {
    //doubleClickCopmonent
    console.log("Double click");
  };

  const deleteOperation = (id: string) => {
    alertify.confirm("Delete", "Delete User!!").set({
      onok: function () {
        fetch("https://localhost:7027/api/Users/" + id, {
          method: "Delete",
        })
          .then(async (response) => {
            var result = await response.text();
            if (response.status === 200) {
              // alertify.alert("Delete", "Delete User!!", function () {
              //   alertify.message("OK");
              window.location.reload();
              console.log("successful");
              // });
            } else {
              throw result;
            }
          })
          .catch((err) => {
            console.log(err);
          });
        // alertify.success("ok");
      },
      oncancel: function () {
        // alertify.error("cancel");
      },
      labels: {
        ok: "Yes",
        cancel: "No!",
      },
    });
  };

  const fetchUsers = async () => {
    const data = await fetch("https://localhost:7027/api/Users");

    const jsonData = await data.json();

    setUsers(jsonData);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const handlerSearch = async (searchText: string) => {
    axios
      .post(`https://localhost:7027/api/Users/Search?search=${searchText}`)
      .then((response) => {
        setUsers(response.data);
      })
      .catch((error) => {
        console.log("error", error);
      });
  };

  const handleClose = () => {
    alertify.confirm("close","LogOut!!").set({
      onok: function () {
        navigateToHom();
      },
      oncancel: function () {},
      labels: {
        ok: "logOut!",
        cancel: "Cancle",
      },
    });
  };

  return (
    <div>
      <h4 style={{ textAlign: "center", fontSize: 40 }}>User List</h4>

      <input
        style={{
          width: "30%",
          paddingLeft: "8px",
          paddingTop: "6px",
          paddingBottom: "6px",
        }}
        type="text"
        placeholder="Search..."
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          handlerSearch(e.target.value);
        }}
      />

      <div
        style={{
          justifyContent: "center",
          display: "flex",
          textAlign: "center",
        }}
      >
        <Table className="table table-striped center" style={{ gap: "13px" }}>
          <thead>
            <tr>
              <th style={{ fontSize: 23 }}>UserName</th>
              <th style={{ fontSize: 23 }}>Status</th>
              <th style={{ fontSize: 23 }}>Operations</th>
            </tr>
          </thead>
          <tbody>
            {/* users?.map((user) */}

            {reversed.map((user) => {
              return (
                <tr key={user.id} onDoubleClick={handleDoubleClick}>
                  <td>{user.username}</td>
                  {/* <td> {user.status}</td> */}
                  <div style={{ display: "flex", justifyContent: "center" }}>
                    <td>
                      {user.status ? "Active" : "Deactive"}

                      <FormControl>
                        <Switch
                          checked={user.status}
                          // checked={checked}
                          onChange={handleChecked}
                        />
                      </FormControl>
                    </td>
                  </div>

                  <td>
                    <div style={{ display: "flex", justifyContent: "center" }}>
                      <Button
                        onClick={() => {
                          deleteOperation(user.id);
                        }}
                        style={{
                          padding: " 3px",
                        }}
                      >
                        <DeleteIcon fontSize="medium" />
                      </Button>
                      <FormDialog open={true} id={user.id} />
                      <DoubleClick open={true} id={user.id} />

                      {/* <a
                      style={{
                        padding: "4px",
                        margin: "15px",
                        borderRadius: "5px",
                      }}
                      href={`/Edit/${user.id}`}
                    >
                     edit
                    </a> */}
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>

        {/* </div> */}
      </div>
      <button
        onClick={() => {
          handleClose();
          // navigateToHom();
        }}
      >
        Log out
      </button>
    </div>
  );
};

export default User;
