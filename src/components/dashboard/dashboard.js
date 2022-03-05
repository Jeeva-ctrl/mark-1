import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const history = useNavigate();
  return (
    <div>
      Welcome to the portal , {localStorage.getItem("email")}
      <button
        onClick={() => {
          localStorage.setItem("token", "");
          localStorage.setItem("email", "");
          localStorage.setItem("firstName", "");
          localStorage.setItem("lastName", "");
          history("/");
        }}
      >
        Log Out
      </button>
    </div>
  );
};

export default Dashboard;
