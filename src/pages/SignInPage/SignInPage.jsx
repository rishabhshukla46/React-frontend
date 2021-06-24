import React, { useState } from "react";
import SignInForm from "../../components/SignInForm/SignInForm";
import Logo from "../../images/bevy.png";
import "./SignInPage.css";

function SignInPage() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const onChange = (e) => {
    const { value } = e.target;
    if (e.target.name === "name") {
      setName(value);
    } else {
      setPassword(value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setName("");
    setPassword("");
  };

  return (
    <div className="sign-in-page">
      <div className="main-logo">
        <img src={Logo} alt="main logo" />
      </div>
      <SignInForm
        name={name}
        password={password}
        onChange={onChange}
        handleSubmit={handleSubmit}
      />
    </div>
  );
}

export default SignInPage;
