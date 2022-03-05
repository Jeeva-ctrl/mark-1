import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSubmit, setIsSubmit] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const history = useNavigate();

  const handleSubmit = (e) => {
    setLoading(true);
    setIsSubmit(true);

    e.preventDefault();
    if (!email || !password) {
      setLoading(false);
    } else {
      setLoading(true);
      const obj = {
        email: email,
        password: password,
      };
      axios
        .post("http://localhost:4001/login", obj)
        .then((res) => {
          setLoading(false);
          console.log("res", res);
          const data = res.data;
          localStorage.setItem("token", data.token);
          localStorage.setItem("email", data.email);
          localStorage.setItem("firstName", data.first_name);
          localStorage.setItem("lastName", data.last_name);
          history("/dashboard");
        })
        .catch((err) => {
          console.log("err", err.response);
          toast.error(err.response.data, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
          setLoading(false);
        });
    }
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
          <h1>Login</h1>
          <p>Welcome to the portal ! </p>

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
                  value={email}
                  onChange={(e) => {
                    e.preventDefault();
                    setEmail(e.target.value);
                  }}
                  placeholder="name@abc.com"
                />
                <i class="fas fa-at"></i>
              </div>
            </div>

            <div class="input-box">
              <span class="label">
                Password <span style={{ color: "red" }}>*</span>{" "}
              </span>
              <div
                class={`flex-r input ${
                  isSubmit && password === "" ? "error" : ""
                }`}
              >
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => {
                    e.preventDefault();
                    setPassword(e.target.value);
                  }}
                  placeholder="8+ (a, A, 1, #)"
                />
                <i class="fas fa-lock"></i>
              </div>
            </div>

            <button class="btn" onClick={(e) => handleSubmit(e)}>
              Login In{" "}
              {isLoading && (
                <i
                  className="fa fa-refresh fa-spin"
                  style={{ marginRight: "5px" }}
                />
              )}
            </button>

            <span class="extra-line">
              <span>Have to create new account?</span>
              <Link to="/signup">Sign up </Link>
            </span>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
