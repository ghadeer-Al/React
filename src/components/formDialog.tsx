import React, { useEffect } from "react";
import { useState } from "react";
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
import EditIcon from "@mui/icons-material/Edit";

import axios from "axios";

import alertify from "alertifyjs";

const FormDialog = ({ id, isOpen }: any) => {
  const [open, setOpen] = React.useState(isOpen);
  const [checked, setChecked] = useState<boolean>(false);
  const [user, setUser] = useState<any>("");
  const [username, setUserName] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    alertify.confirm("close", "will not save changes").set({
      onok: function () {
        setOpen(false);
      },
      oncancel: function () {},
      labels: {
        ok: "Yes",
        cancel: "No!",
      },
    });
  };

  const editUserId = async () => {
    const data = await fetch("https://localhost:7027/api/Users/" + id);
    const res = await data.json();
    setUser(res);
  };

  useEffect(() => {
    if (id) editUserId();
  }, [id]);

  useEffect(() => {
    setOpen(isOpen);
  }, [isOpen]);

  const saveData = () => {
    console.log({ id });

    EditOperation();
  };

  const EditOperation = () => {
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
  };

  return (
    <div>
      <Button onClick={handleClickOpen}>
        <EditIcon />  
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
              label="User Name"
              type="text"
              fullWidth
              value={user?.username}
              variant="standard"
              InputLabelProps={{
                shrink: true,
              }}
              onChange={handleEdit}
            />
            <TextField
              margin="dense"
              label="Password "
              type="password"
              fullWidth
              value={user?.password}
              variant="standard"
              InputLabelProps={{
                shrink: true,
              }}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />

            <FormControl>
              <Box>
                <FormLabel>Status</FormLabel>
                <FormHelperText>Active</FormHelperText>
              </Box>
              <Switch
                //  checked={user?.status}
                checked={checked}
                onChange={(event) => setChecked(event.target.checked)}
              />
            </FormControl>
          </DialogContent>
          <DialogActions>
            <div className="col-md-12">
              <Button
                type="submit"
                onClick={() => {
                  // handleClose();
                  clickHandle();
                  saveData();
                }}
              >
                Save
              </Button>
              <Button
                color="error"
                onClick={() => {
                  handleClose();
                }}
              >
                Cancel
              </Button>
            </div>
          </DialogActions>
        </form>
      </Dialog>
    </div>
  );
};
export default FormDialog;
