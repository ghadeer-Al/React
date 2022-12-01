import React from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
// import EditIcon from "@mui/icons-material/Edit";
import axios from "axios";

import alertify from "alertifyjs";
import "alertifyjs/build/css/alertify.css";

import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";

import DialogTitle from "@mui/material/DialogTitle";

import Switch from "@mui/material/Switch";
import FormHelperText from "@mui/material/FormHelperText";
import Box from "@mui/material/Box";
import FormLabel from "@mui/material/FormLabel";
import FormControl from "@mui/material/FormControl";
import { useNavigate } from "react-router-dom";

// import EditIcon from "@mui/icons-material/Edit";

const EditUser = () => {
  const { id } = useParams();

  const [username, setUserName] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const [user, setUser] = useState<any>("");
  const [open, setOpen] = React.useState(false);
  // const [status] = useState<boolean>(false);
  const [checked, setChecked] = useState<boolean>(false);

  // const editUserId = async () => {
  //   const data = await fetch("https://localhost:7027/api/Users/" + id);
  //   const res = await data.json();
  //   setUser(await res);
  // };

  // useEffect(() => {
  //   editUserId();
  // }, [id]);



  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const navigate = useNavigate();
  const navigateToUser = () => {
    navigate("/User");
  };
  const saveData = () => {
    console.log({ id });

    EditOperation();
  };

  const EditOperation = () => {
   
// console.log('jujk');
// console.log(username, password, checked);

    axios.put("https://localhost:7027/api/Users/" + id, {
      
      username,
      password,
      status: checked,
    });

  };

  const handleEdit = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUser({ user, [e.target.name]: e.target.value });
    setUserName(e.target.value);
  };

  const clickHandle = () => {
    alertify.alert("Edit", "User has been modified", function () {
      alertify.message("OK");
      window.location.reload();
    });
  };
  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    navigateToUser();
  };

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        Edit User 
        {/* <EditIcon /> */}
      </Button> 

      <Dialog open={open} onClose={handleClose}>
        <form
          onSubmit={handleSubmit}
          style={{ textAlign: "center", fontSize: 35 }}
        >
          <DialogTitle>Edit User Information</DialogTitle>
          <DialogContent dividers>
            <TextField
              autoFocus
              margin="dense"
              value={user?.username}
              label="User Name"
              type="text"
              fullWidth
              variant="standard"
              onChange={handleEdit}
            />
            <TextField
              margin="dense"
              value={user?.password}
              label="Password "
              type="password"
              fullWidth
              variant="standard"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
            {/* <TextField
            autoFocus
            margin="dense"
           value={user?.status}
            label="Status "
            type="text"
            fullWidth
            variant="standard"
            onChange={(e) => {setStatus(e.target.value)}}
          /> */}

            <FormControl>
              <Box>
                <FormLabel>Status</FormLabel>
                <FormHelperText>Active</FormHelperText>
              </Box>
              <Switch
                checked={checked}
                onChange={(event) => setChecked(event.target.checked)}
              />
            </FormControl>
          </DialogContent>
          <DialogActions>
            <Button
              type="submit"
              onClick={() => {
                handleClose();
                clickHandle();
                saveData();
              }}
            >
              Edit User
            </Button>
          </DialogActions>
        </form>
      </Dialog>
    </div>
  );
};

export default EditUser;
