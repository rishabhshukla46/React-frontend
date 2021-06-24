import React, { useState } from "react";
import "./SignUpPage.css";
import Logo from "../../images/bevy.png";
import SignUpForm from "../../components/SignUpForm/SignUpForm";

function SignUpPage() {
  const [name, setName] = useState("");
  const [userId, setUserId] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userPhone, setUserPhone] = useState("");
  const [notify, setNotify] = useState("Email");
  const [error, setError] = useState(false);

  const onChange = (e) => {
    const { value } = e.target;

    switch (e.target.name) {
      case "name":
        setName(value);
        break;

      case "userId":
        setUserId(value);
        break;

      case "userEmail":
        setUserEmail(value);
        break;

      case "userPhone":
        setUserPhone(value);
        break;

      case "notify":
        setNotify(value);
        break;

      default:
        setError(!error);
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="sign-up-page">
      <div className="main-logo">
        <img src={Logo} alt="main logo" />
      </div>
      <SignUpForm
        name={name}
        userId={userId}
        userEmail={userEmail}
        userPhone={userPhone}
        notify={notify}
        onChange={onChange}
        handleSubmit={handleSubmit}
      />
    </div>
  );
}

export default SignUpPage;
