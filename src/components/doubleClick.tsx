import React, { useEffect } from "react";
import { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";

import InfoIcon from "@mui/icons-material/Info";

const DoubleClick = ({ id, isOpen }: any) => {
  const [open, setOpen] = React.useState(isOpen);

  const [user, setUser] = useState<any>("");

  const handleDoubleClick = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
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

  return (
    <div>
      <Button onDoubleClick={handleDoubleClick}>
        <InfoIcon />
      </Button>

      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>User Information</DialogTitle>
        <DialogContent dividers>
          <TextField
            label="User Id"
            fullWidth
            value={user?.id}
            variant="standard"
            InputProps={{ disableUnderline: true }}
            disabled={true}
          />
          <TextField
            margin="dense"
            label="User Name"
            fullWidth
            value={user?.username}
            variant="standard"
            InputProps={{ disableUnderline: true }}
            disabled={true}
          />
          <TextField
            margin="dense"
            label="Password "
            type="password"
            fullWidth
            value={user?.password}
            variant="standard"
            InputProps={{ disableUnderline: true }}
            disabled={true}
          />
          <TextField
            InputProps={{ disableUnderline: true }}
            margin="dense"
            label="status "
            fullWidth
            value={user.status ? "Active" : "Deactive"}
            variant="standard"
            disabled={true}
          />
        </DialogContent>
        <DialogActions></DialogActions>
      </Dialog>
    </div>
  );
};
export default DoubleClick;
