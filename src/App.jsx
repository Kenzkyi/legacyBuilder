import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/kenz/Home";
import Login from "../src/auth/Login";
import SignUp from "../src/auth/SignUp";
import Welcome from "./auth/welcomeback/Welcome";
import Congratulation from "./auth/welcomeback/Congratulation";
import ForgetPassword from "./auth/ForgetPassword";
import ResetLink from "./auth/ResetLink";
import ResetPassword from "./auth/welcomeback/ResetPassword";
import Loading from "./auth/welcomeback/Loading";
import LearnMore from "./pages/jacob/LearnMore";
import MainHolder from "./routes/MainHolder";
import Dashboard from "./pages/kenz/Dashboard";
import Overview from "./pages/kenz/Overview";
import Mockexam from "./pages/kenz/Mockexam";
import PastQuestion from "./pages/kenz/PastQuestion";
import Profile from "./pages/kenz/Profile";
import Subscription from "./pages/kenz/Subscription";

const routes = createBrowserRouter([
  { path: "*", element: <div>404 error</div> },
  {
    path: "",
    element: <MainHolder />,
    children: [
      { path: "", element: <Home /> },
      { path: "/learn-more", element: <LearnMore /> },
    ],
  },
  { path: "/signup", element: <SignUp /> },
  { path: "/login", element: <Login /> },
  { path: "/welcome", element: <Welcome /> },
  { path: "/congratulation", element: <Congratulation /> },
  { path: "/forgetpassword", element: <ForgetPassword /> },
  { path: "/resetlink", element: <ResetLink /> },
  { path: "resetpassword", element: <ResetPassword /> },
  { path: "/loading", element: <Loading /> },
  {path: '/dashboard',element:<Dashboard/>,children:[
    {path:'overview',element:<Overview/>,index:true},
    {path:'mock-exam',element:<Mockexam/>},
    {path:'past-questions',element:<PastQuestion/>},
    {path:'profile',element:<Profile/>},
    {path:'subscription',element:<Subscription/>}
  ]}
]);

const App = () => {
  return <RouterProvider router={routes} />;
};

export default App;
