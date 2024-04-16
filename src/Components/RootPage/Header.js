import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import AuthContext from "../../Context/AuthContext";

const Header = () => {
  const { isAuthenticated } = useContext(AuthContext);
  return (
    <>
      <header>
        <nav className="bg-gray-800 py-6">
          <ul className="flex justify-center space-x-4">
            {/* Add NavLink to an Image later */}
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? "font-bold text-yellow-400"
                    : "text-white hover:text-yellow-400"
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/jobs"
                className={({ isActive }) =>
                  isActive
                    ? "font-bold text-yellow-400"
                    : "text-white hover:text-yellow-400"
                }
                end
              >
                Jobs
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive
                    ? "font-bold text-yellow-400"
                    : "text-white hover:text-yellow-400"
                }
              >
                About
              </NavLink>
            </li>
            {isAuthenticated ? (
              <>
                <li>
                  <NavLink
                    to="/profile"
                    className={({ isActive }) =>
                      isActive
                        ? "font-bold text-yellow-400"
                        : "text-white hover:text-yellow-400"
                    }
                  >
                    Profile
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/profile"
                    className={({ isActive }) =>
                      isActive
                        ? "font-bold text-yellow-400"
                        : "text-white hover:text-yellow-400"
                    }
                  >
                    Logout
                  </NavLink>
                </li>
              </>
            ) : (
              <>
                <li>
                  <NavLink
                    to="/login"
                    className={({ isActive }) =>
                      isActive
                        ? "font-bold text-yellow-400"
                        : "text-white hover:text-yellow-400"
                    }
                  >
                    Login
                  </NavLink>
                </li>
              </>
            )}
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Header;
