import { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";

const AuthContext = createContext();

export default AuthContext;

export const AuthProvider = ({ children }) => {
  let [authToken, setAuthToken] = useState(() =>
    localStorage.getItem("authToken") ? localStorage.getItem("authToken") : null
  );

  let [isAuthenticated, setIsAuthenticated] = useState(false);

  //default user
  const defaultUser = () => ({
    email: null,
    firstName: null,
    lastName: null,
    roles: null,
    company: null,
  });

  let [user, setUser] = useState(defaultUser);

  const navigate = useNavigate();

  useEffect(() => {
    if (authToken) {
      const { exp, username } = jwtDecode(authToken);

      if (Date.now() >= exp * 1000) {
        setAuthToken(null);
        localStorage.removeItem("authToken");
        navigate("/login");
      } else {
        setUser((currentUser) => ({ ...currentUser, email: username }));
        setIsAuthenticated(true);
      }
    }
  }, [authToken, navigate]);

  let logoutUser = () => {
    setAuthToken(null);
    setIsAuthenticated(false);
    setUser(defaultUser);
    localStorage.removeItem("authToken");
    localStorage.removeItem("xsrfToken");
    navigate("/login");
  };

  let contextData = {
    authToken,
    isAuthenticated,
    setIsAuthenticated,
    setAuthToken,
    logoutUser,
    user,
    setUser,
  };

  return (
    <AuthContext.Provider value={contextData}>{children}</AuthContext.Provider>
  );
};
