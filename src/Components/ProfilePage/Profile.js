import React, { useContext, useEffect } from "react";
import AuthContext from "../../Context/AuthContext";

const Profile = ({ userData }) => {
  const { user, setUser, isAuthenticated, setIsAuthenticated } =
    useContext(AuthContext);

  useEffect(() => {
    if (userData) {
      setUser(userData);
    }
  }, [userData, setUser]);

  useEffect(() => {
    if (!isAuthenticated) {
      setIsAuthenticated(true);
    }
  }, [isAuthenticated, setIsAuthenticated]);

  //<div className="flex-grow flex items-start justify-evenly min-h-96 bg-gray-100 py-20">
  //<div className="p-12 bg-white rounded-lg shadow-md w-80 space-y-6 text-center">

  /*
    TODO:
    - Add an edit button to edit the user's profile
    - Add an another element to show the form to edit the user's profile
    - useState to toggle the form
    - action to update the user's profile in the backend
    - reload the user's profile after updating
    - upadate the user's profile in the context
    - Better styling
  */
  return (
    <div className="flex-grow flex items-start justify-evenly min-h-full bg-gray-100 py-20">
      <div className="p-12 bg-white rounded-lg shadow-md w-80 space-y-6 text-center">
        <h1 className="text-3xl font-bold text-gray-700 mb-2">Profile</h1>
        <p className="text-gray-700">
          <span className="font-bold text-gray-500">Email:</span>{" "}
          {user.email || "Undefined"}
        </p>
        <p className="text-gray-700">
          <span className="font-bold text-gray-500">First Name:</span>{" "}
          {user.firstName || "Undefined"}
        </p>
        <p className="text-gray-700">
          <span className="font-bold text-gray-500">Last Name:</span>{" "}
          {user.lastName || "Undefined"}
        </p>
        <p className="text-gray-700">
          <span className="font-bold text-gray-500">Roles:</span>{" "}
          {user.role || "Undefined"}
        </p>
        <p className="text-gray-700">
          <span className="font-bold text-gray-500">Company:</span>{" "}
          {user.companyName || "Undefined"}
        </p>
      </div>
    </div>
  );
};

export default Profile;
