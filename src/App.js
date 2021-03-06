import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router";
import Login from "./components/login/login";
import SignUp from "./components/signUp/signUp";
import Dashboard from "./components/dashboard/dashboard";

function App() {
  return (
    <main>
      <Routes>
        <Route path="/mark-1//signUp" element={<SignUp />} />
        <Route exact path="/mark-1" element={<Login />} />
        <Route exact path="/mark-1/Dashboard" element={<Dashboard />} />
      </Routes>
    </main>
  );
}

export default App;
