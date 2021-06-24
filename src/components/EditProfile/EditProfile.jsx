/* eslint-disable react/prop-types */
import React, { useState } from "react";
import axios from "axios";
import { Button, TextField, MenuItem } from "@material-ui/core";
import "./EditProfile.css";

function EditProfile({ user }) {
  const [notify, setNotify] = useState(user.notify);
  const [error, setError] = useState(false);
  const [sucess, setSuccess] = useState(false);

  const onChange = (e) => {
    setNotify(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const obj = {
      name: user.name,
      userId: user.userId,
      userEmail: user.userEmail,
      userPhone: user.userPhone,
      notify,
    };

    axios
      .put(`${process.env.REACT_APP_DJANGO}/user/detail/${user.id}/`, obj)
      .then(() => {
        setSuccess(true);
        setError(false);
      })
      .catch(() => {
        setError(true);
        setSuccess(false);
      });
  };

  const errorMessage = (
    <p
      style={{
        color: "red",
        fontStyle: "italic",
      }}
    >
      Opps! Can not update Please check Network.
    </p>
  );

  const sucessMessage = (
    <p
      style={{
        color: "blue",
        fontStyle: "italic",
      }}
    >
      Updates successFully!!.
    </p>
  );

  return (
    <form className="form-data">
      <div className="form-field-select">
        <TextField
          id="select-field"
          label="Notification"
          variant="outlined"
          name="notify"
          value={notify}
          onChange={onChange}
          select
        >
          <MenuItem value="email">Email</MenuItem>
          <MenuItem value="phone">Phone</MenuItem>
        </TextField>
      </div>
      {error && errorMessage}
      {sucess && sucessMessage}
      <div className="signup-button">
        <Button variant="contained" color="primary" onClick={handleSubmit}>
          Save Changes
        </Button>
      </div>
    </form>
  );
}

export default EditProfile;
