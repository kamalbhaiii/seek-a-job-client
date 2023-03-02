import Components from "../Pages/components/Components";
import Signin from "../Pages/signin/Signin";
import Signup from "../Pages/signup/Signup";
import Error from "../Pages/error/Error";
import JobOverview from "../Pages/job/JobOverview";
import CandidateOverview from "../Pages/candidate/CandidateOverview";

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
  {
    title: "Job Overview",
    path: "/job/:id",
    element: <JobOverview />,
  },
  {
    title: "Candidate Overview",
    path: "/candidate/:id",
    element: <CandidateOverview />,
  },
];
