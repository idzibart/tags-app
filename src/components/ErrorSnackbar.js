import { Alert, Snackbar } from "@mui/material";
import React from "react";

const ErrorSnackbar = ({ open, message, onClose }) => {
  return (
    <Snackbar open={open} autoHideDuration={6000} onClose={onClose}>
      <Alert severity="error" variant="filled">
        {message}
      </Alert>
    </Snackbar>
  );
};

export default ErrorSnackbar;
