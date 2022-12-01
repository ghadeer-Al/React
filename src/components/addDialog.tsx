import React, { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import alertify from "alertifyjs";
import DialogTitle from "@mui/material/DialogTitle";
import Switch from "@mui/material/Switch";
import FormHelperText from "@mui/material/FormHelperText";
import Box from "@mui/material/Box";
import FormLabel from "@mui/material/FormLabel";
import FormControl from "@mui/material/FormControl";

export default function AddDialog() {
  const [open, setOpen] = useState(false);
  //   const [user, setUser] = useState({
  //     usename: "",
  //     password: "",
  //   });
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [status] = useState<boolean>(false);

  //   const [ setUser] = useState<any>("");
  const [checked, setChecked] = useState<boolean>(false);

  console.log({ checked });

//   const clickHandle = () => {
//     alertify.alert("Add ", "Add User!", function () {
//       alertify.message("OK");
//       window.location.reload();
//     });
//   };
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    alertify.confirm("close", "will not save changes").set({
        onok: function () {
      setOpen(false)
},
    oncancel: function () {
        
      },
      labels: {
        ok: "Yes",
        cancel: "No!",
      },
    });
  };

  const handleChecked = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    const body = { username, password, status };
    body.status = checked;
    const addOption = {
      method: "Post",
      headers: { "content-Type": "application/json" },
      body: JSON.stringify(body),
    };
    alertify.alert("Add ", "Add User!", function () {
        alertify.message("OK");
        window.location.reload();
      });
    // let option=id!=""||id!=null
    // ? {
    //       method: "Put",
    //       headers: { "content-Type": "application/json" },
    //       body: JSON.stringify(body),
    //     }:

    //      {
    //         method: "Post",
    //         headers: { "content-Type": "application/json" },
    //         body: JSON.stringify(body),
    //       };

    fetch("https://localhost:7027/api/Users", addOption).then((e) => {
      console.log("then", e);
    });
  };

  //   const editUserId = async () => {
  //     const data = await fetch("https://localhost:7027/api/Users/" + id);
  //     const res = await data.json();
  //     setUser(res);
  //   };

  //   useEffect(() => {
  //     if (id)
  //    editUserId();
  //   }, [id]);
  // useEffect(() => {
  //   setOpen(open);
  // }, [open]);
  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        Add User
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <form
          onSubmit={handleSubmit}
          style={{ textAlign: "center", fontSize: 35 }}
        >
          <DialogTitle>Add New User</DialogTitle>
          <DialogContent dividers>
            <TextField
              autoFocus
              margin="dense"
              label="User Name"
              type="text"
              fullWidth
              required
              variant="standard"
              onChange={(e) => {
                setUsername(e.target.value);
              }}
            />
            <TextField
              margin="dense"
              label="Password "
              type="password"
              fullWidth
              required
              variant="standard"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
            {/* <TextField
              margin="dense"
              label="Status "
              type="text"
              fullWidth
              variant="standard"
              onChange={(e) => {
                setStatus(e.target.value);
              }}
            /> */}

            <FormControl>
              <Box>
                <FormLabel>Status</FormLabel>
                <FormHelperText>Active</FormHelperText>
              </Box>
              <Switch checked={checked} onChange={handleChecked} />
            </FormControl>
          </DialogContent>

          <DialogActions>
            <div className="col-md-12">
              <Button
                type="submit"
                // onClick={() => {
                //   clickHandle();
                // }}
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
}
