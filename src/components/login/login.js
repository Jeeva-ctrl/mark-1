import React from "react";
import { Link } from "react-router-dom";
const Login = () => {
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
          <h1>Login</h1>
          <p>Welcome to the portal ! </p>

          <form class="flex-c">
            <div class="input-box">
              <span class="label">
                E-mail <span style={{ color: "red" }}>*</span>
              </span>
              <div class=" flex-r input">
                <input type="text" placeholder="name@abc.com" />
                <i class="fas fa-at"></i>
              </div>
            </div>

            <div class="input-box">
              <span class="label">
                Password <span style={{ color: "red" }}>*</span>{" "}
              </span>
              <div class="flex-r input">
                <input type="password" placeholder="8+ (a, A, 1, #)" />
                <i class="fas fa-lock"></i>
              </div>
            </div>

            <input class="btn" type="submit" value="Login" />

            <span class="extra-line">
              <span>Have to create new account?</span>
              <Link to="/signup">Sign up</Link>
            </span>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
