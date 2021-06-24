import React, { useState } from "react";
import "./UserPage.css";
import { Button } from "@material-ui/core";
import Logo from "../../images/bevy.png";
import SendMessage from "../../components/SendMessage/SendMessage";
import EditProfile from "../../components/EditProfile/EditProfile";

function UserPage() {
  const [menuSwitch, setMenuSwitch] = useState("message");

  const content = menuSwitch === "message" ? <SendMessage /> : <EditProfile />;

  return (
    <div className="user-page">
      <div className="user-details">
        <div className="user-card">
          <img src={Logo} alt="main logo" />
          <div className="user-name">
            <h4>Tony Stark</h4>
            <h6>iron_man</h6>
          </div>
        </div>
        <div className="user-menu">
          <Button id="menu-buttons" onClick={() => setMenuSwitch("message")}>
            Send Notifications
          </Button>
          <Button id="menu-buttons" onClick={() => setMenuSwitch("edit")}>
            Edit Profile
          </Button>
          <Button id="menu-buttons" color="secondary">
            Delete Profile
          </Button>
        </div>
      </div>
      <div className="user-actions">{content}</div>
    </div>
  );
}

export default UserPage;
