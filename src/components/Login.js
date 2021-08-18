import React from "react";
import TextField from "@material-ui/core/TextField";
import { useState } from "react";
import { useHistory } from "react-router";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const onFormSubmit = (e) => {
    e.preventDefault();
    if (
      email === process.env.React_App_EMAIL &&
      password === process.env.React_App_PASSWORD
    ) {
      sessionStorage.setItem("token", process.env.React_App_TOKEN);
      history.push("/choices");
    } else {
      toast.warn("Invalid Credentials", {
        position: "top-center",
        autoClose: 2000,
      });
      setTimeout(() => {
        window.location.reload();
      }, 2000);
    }
  };
  return (
    <>
      <div className="h-screen w-screen grid place-items-center">
        <div className="lg:w-4/12 -mt-28 shadow-2xl p-10 md:w-full">
          <img src="images/S.png" alt="logo" />
          <form onSubmit={onFormSubmit}>
            <h1 className="text-2xl my-5  text-center text-white bg-gradient-to-r from-blue-700 to-blue-500 p-2 rounded">
              IT Admin Panel
            </h1>
            <TextField
              id="outlined-basic"
              label="Email"
              variant="outlined"
              autoComplete="off"
              className="w-full"
              onChange={(e) => setEmail(e.target.value)}
            />
            <br /> <br />
            <TextField
              id="outlined-password-input"
              label="Password"
              type="password"
              autoComplete="off"
              variant="outlined"
              className="w-full"
              onChange={(e) => setPassword(e.target.value)}
            />
            <button className="text-white font-medium p-1 bg-gradient-to-r from-green-700 to-green-400 w-full my-5 text-2xl">
              Login
            </button>
          </form>
        </div>
      </div>
      <ToastContainer />
    </>
  );
};

export default Login;
