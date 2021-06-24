/* eslint-disable react/prop-types */
import React from "react";
import { Button, TextField, MenuItem } from "@material-ui/core";
import "./EditProfile.css";

function EditProfile({
  name,
  userId,
  userEmail,
  userPhone,
  notify,
  onChange,
  handleSubmit,
}) {
  return (
    <form className="form-data">
      <div className="form-field-signup">
        <div className="form-field">
          <TextField
            className="text-field"
            label="Enter Name"
            variant="outlined"
            name="name"
            value={name}
            onChange={onChange}
          />
        </div>
        <div className="form-field">
          <TextField
            className="text-field"
            label="Enter userId"
            variant="outlined"
            name="userId"
            value={userId}
            onChange={onChange}
          />
        </div>
      </div>
      <div className="form-field-signup">
        <div className="form-field">
          <TextField
            className="text-field"
            label="Enter Email"
            variant="outlined"
            name="userEmail"
            value={userEmail}
            onChange={onChange}
          />
        </div>
        <div className="form-field">
          <TextField
            className="text-field"
            label="Enter Phone"
            variant="outlined"
            name="userPhone"
            value={userPhone}
            onChange={onChange}
          />
        </div>
      </div>
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
      <div className="signup-button">
        <Button variant="contained" color="primary" onClick={handleSubmit}>
          Save Changes
        </Button>
      </div>
    </form>
  );
}

export default EditProfile;
