import React, { Suspense } from "react";
import Profile from "../Components/ProfilePage/Profile";
import { Await, defer, useLoaderData } from "react-router-dom";
import axios from "axios";
import axiosInstance from "../Utils/useAxios";

const ProfilePage = () => {
  const { data } = useLoaderData();
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <Await resolve={data}>{(data) => <Profile userData={data} />}</Await>
      </Suspense>
    </>
  );
};

export default ProfilePage;

const fetchData = async () => {
  try {
    // const token = localStorage.getItem("authToken");
    // const response = await axios.get("http://localhost:8080/api/auth/profile", {
    //   headers: {
    //     "Content-Type": "application/json",
    //     Authorization: token,
    //   },
    // });
    const response = await axiosInstance.get("/api/auth/profile");
    console.log(response.data);
    return response.data;
  } catch (e) {
    console.log(e.response.data);
    console.log(e.response.status);
    console.log(e.response.headers);
    return null;
  }
};

export const loader = async () => {
  return defer({ data: fetchData() });
};
