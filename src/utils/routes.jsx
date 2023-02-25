import Components from "../Pages/Components/Components";
import Signin from "../Pages/Signin/Signin";
import Signup from "../Pages/signup/Signup";
import Error from "../Pages/error/Error";

export const routes = [
  {
    title: "Home",
    path: "/",
    element: <Signin />,
  },
  {
    title: "Signin",
    path: "/signin",
    element: <Signin />,
  },
  {
    title: "Signup",
    path: "/signup",
    element: <Signup />,
  },
  {
    title: "Components",
    path: "/components",
    element: <Components />,
  },
  {
    title: "Error",
    path: "*",
    element: <Error />,
  },
];
