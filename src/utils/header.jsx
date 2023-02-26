import {
  FaArrowAltCircleLeft,
  FaArrowAltCircleRight,
  FaAddressBook,
  FaBox,
  FaUserPlus,
  FaHome,
  FaSearch
} from "react-icons/fa";

export const header = [
  {
    title: "Sign In",
    path: "/signin",
    icon: <FaArrowAltCircleLeft />,
  },
  {
    title: "Sign Up",
    path: "/signup",
    icon: <FaUserPlus />,
  },
  {
    title: "Contact Us",
    path: "/contact",
    icon: <FaAddressBook />,
  },
  {
    title: "Components",
    path: "/components",
    icon: <FaBox />,
  },
];

export const headerSeeker = [
  {
    title: "Dashboard",
    path: "/dashboard",
    icon: <FaHome />
  },
  {
    title: "Sign out",
    path: "/signout",
    icon: <FaArrowAltCircleRight />
  },
  {
    title: "Search Jobs",
    path: "/search-jobs",
    icon: <FaSearch />
  },
];

export const headerProvider = [
  {
    title: "Dashboard",
    path: "/dashboard",
    icon: <FaHome />,
  },
  {
    title: "Sign out",
    path: "/signout",
    icon: <FaArrowAltCircleRight />,
  },
  {
    title: "Search Candidates",
    path: "/search-candidates",
    icon: <FaSearch />
  },
];
