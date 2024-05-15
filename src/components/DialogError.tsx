"use client";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import { red } from "@mui/material/colors";

export interface DialogErrorProps {
  open: boolean;
  onClose: () => void;
}

export function DialogError(props: DialogErrorProps) {
  const { onClose, open } = props;

  const handleClose = () => {
    onClose();
  };

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title" sx={{ color: red[500] }}>
        <ErrorOutlineIcon color="inherit" /> Error fetching data
      </DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          An unexpected error occurred while fetching data. Please check your
          internet connection and try again later. If the problem persists,
          contact support.
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="error" autoFocus>
          OK
        </Button>
      </DialogActions>
    </Dialog>
  );
}
