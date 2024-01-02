import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);

  const NavLinks = (
    <>
      <li>
        {" "}
        <Link>Home</Link>{" "}
      </li>
      <li>
        {" "}
        <Link>About Us</Link>{" "}
      </li>
      <li>
        {" "}
        <Link>Contact Us</Link>{" "}
      </li>
      <li>
        {" "}
        <Link>Major Crops</Link>{" "}
      </li>
      <li>
        {" "}
        <Link to="/feedback">Feedback</Link>{" "}
      </li>
      <li>
        <Link to="/products">Products</Link>
      </li>
      {user && (
        <li>
          <Link to="/dashboard">Dashboard</Link>
        </li>
      )}
    </>
  );
  return (
    <div className="navbar bg-blue-500 text-white">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 font-medium text-black"
          >
            {NavLinks}
          </ul>
        </div>
        <a
          id="gradientText"
          className="btn btn-ghost lg:text-2xl text-xl font-bold text-"
        >
          Agriculture
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 font-medium">{NavLinks}</ul>
      </div>
      <div className="navbar-end">
        {user ? (
          <div className=" flex items-center gap-5">
            <button className="btn btn-primary" onClick={logOut}>
              Logout
            </button>
          </div>
        ) : (
          <Link to="/auth/login">
            {" "}
            <button className="btn btn-primary">Login</button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Header;
