import React from "react";
import Login from "../Components/LoginPage/Login";
import axios from "axios";
import { redirect } from "react-router-dom";

const LoginPage = () => {
  return (
    <>
      <Login />
    </>
  );
};

export default LoginPage;

//action
export const action = async ({ request, params }) => {
  const data = await request.formData();

  try {
    const response = await axios.get("http://localhost:8080/api/auth/login", {
      headers: {
        "Content-Type": "application/json",
        Authorization:
          "Basic " +
          window.btoa(data.get("email") + ":" + data.get("password")),
      },
    });
    console.log(response);

    localStorage.setItem("authToken", response.headers["authorization"]);
    //TODO
    //expose XSRF header to the client and store it in local storage
    //after implementing logout funtionality, store all URLs in a file
    return redirect("/profile");
  } catch (e) {
    console.log(e.response.data);
    console.log(e.response.status);
    console.log(e.response.headers);
  }
};

// const getCookie = (name) => {
//   const value = `; ${document.cookie}`;
//   const parts = value.split(`; ${name}=`);
//   if (parts.length === 2) return parts.pop().split(";").shift();
// };
