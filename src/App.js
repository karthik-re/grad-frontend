import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import AboutPage from "./Pages/AboutPage";
import JobsPage from "./Pages/JobsPage";
import LoginPage, { action as loginAction } from "./Pages/LoginPage";
import Root from "./Pages/Root";
import RegisterPage from "./Pages/RegisterPage";
import ProfilePage, { loader as profileLoader } from "./Pages/ProfilePage";

const router = createBrowserRouter([
  //similar to controller in spring boot
  {
    path: "/",
    id: "root",
    element: <Root />,
    error: <h1>404 Not Found</h1>,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "about",
        element: <AboutPage />,
      },
      {
        path: "jobs",
        element: <JobsPage />,
      },
      {
        path: "login",
        element: <LoginPage />,
        action: loginAction,
      },
      {
        path: "register",
        element: <RegisterPage />,
      },
      {
        path: "profile",
        element: <ProfilePage />,
        loader: profileLoader,
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
