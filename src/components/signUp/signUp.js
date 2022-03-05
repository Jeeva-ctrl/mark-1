import React, { useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const [isSubmit, setIsSubmit] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const [consentment, setConsentment] = useState(false);
  const history1 = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmit(true);

    if (
      email === "" ||
      firstName === "" ||
      lastName === "" ||
      password === ""
    ) {
    } else {
      setLoading(true);
      const obj = {
        email: email,
        first_name: firstName,
        last_name: lastName,
        password: password,
      };

      axios
        .post("http://localhost:4001/register", obj)
        .then((res) => {
          history1("/");
          toast.success("User created successfully");
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
        });

      setLoading(false);

      console.log({ obj });
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
              <div
                class={`flex-r input ${
                  isSubmit && firstName === "" ? "error" : ""
                }`}
              >
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
              <div
                class={`flex-r input ${
                  isSubmit && lastName === "" ? "error" : ""
                }`}
              >
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
              <div
                class={`flex-r input ${
                  isSubmit && password === "" ? "error" : ""
                }`}
              >
                <input
                  type="password"
                  placeholder="8+ (a, A, 1, #)"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <i class="fas fa-lock"></i>
              </div>
            </div>

            <button
              class="btn"
              disabled={isLoading}
              onClick={(e) => handleSubmit(e)}
            >
              Create an Account
              {isLoading && (
                <i
                  className="fa fa-refresh fa-spin"
                  style={{ marginRight: "5px" }}
                />
              )}
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
