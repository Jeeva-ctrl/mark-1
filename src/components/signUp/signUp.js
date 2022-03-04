import React, { useState } from "react";
import { Link } from "react-router-dom";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const [isSubmit, setIsSubmit] = useState(false);
  const [consentment, setConsentment] = useState(false);

  const handleSubmit = (e) => {
    setIsSubmit(true);
    e.preventDefault();
    const obj = {
      email: email,
      firstName: firstName,
      lastName: lastName,
      password: password,
    };
    console.log({ obj });
  };
  return (
    <div class=" flex-r container">
      <div class="flex-r login-wrapper">
        <div class="login-text">
          <div class="logo">
            <span>
              <i class="fab fa-speakap"></i>
            </span>
            <span>Coders</span>
          </div>
          <h1>Sign Up</h1>
          <p>It's not long before you embark on this journey! </p>

          <form class="flex-c">
            <div class="input-box">
              <span class="label">
                E-mail <span style={{ color: "red" }}>*</span>
              </span>
              <div
                class={`flex-r input ${
                  isSubmit && email === "" ? "error" : ""
                }`}
              >
                <input
                  type="text"
                  id="email"
                  placeholder="name@abc.com"
                  value={email}
                  required
                  onChange={(e) => setEmail(e.target.value)}
                />
                <i class="fas fa-at"></i>
              </div>
            </div>
            <div class="input-box">
              <span class="label">
                First Name <span style={{ color: "red" }}>*</span>
              </span>
              <div class=" flex-r input">
                <input
                  type="text"
                  id="firstName"
                  placeholder=""
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
                <i class="fas fa-at"></i>
              </div>
            </div>
            <div class="input-box">
              <span class="label">
                Last Name <span style={{ color: "red" }}>*</span>
              </span>
              <div class=" flex-r input">
                <input
                  type="text"
                  id="lastName"
                  placeholder=""
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
                <i class="fas fa-at"></i>
              </div>
            </div>
            <div class="input-box">
              <span class="label">
                Password <span style={{ color: "red" }}>*</span>
              </span>
              <div class="flex-r input">
                <input
                  type="password"
                  placeholder="8+ (a, A, 1, #)"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <i class="fas fa-lock"></i>
              </div>
            </div>

            <div class="check">
              <input type="checkbox" name="consentment" value={consentment} />
              <span>
                {" "}
                <span style={{ color: "red" }}>*</span> I've read and agree with
                T&C{" "}
              </span>
            </div>

            <button class="btn" onClick={(e) => handleSubmit(e)}>
              Create an Account
            </button>
            <span class="extra-line">
              <span>Already have an account?</span>
              <Link to="/">Sign In</Link>
            </span>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
