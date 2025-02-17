import { useContext, useEffect, useState } from "react";
import logo from "../../assets/icons8-book-96.png";
import { Link } from "react-router-dom";
import { AuthContext } from "../Main/AuthProvider";
import Swal from "sweetalert2";
import DarkModeToggle from "../DarkMode/DarkModelToggle";
const Nav = () => {
  const { user, logout } = useContext(AuthContext);
  const [isScrolled, setIsScrolled] = useState(false);

  const navLinks = (
    <>
      <Link to={"/"}>
        <li className="p-2">Home</li>
      </Link>
      <Link to={"/allsessions"}>
        <li className="p-2">Session</li>
      </Link>
      <Link to={"/tutors"}>
        <li className="p-2">Our Tutors</li>
      </Link>
      <Link to={"/"}>
        <li className="p-2">About us</li>
      </Link>
      <Link to={"/dashboard"}>
        <li className="p-2">DashBoard</li>
      </Link>
    </>
  );

  const guestNavLinks = (
    <>
      <Link to={"/allsessions"}>
        <li className="p-2">Session</li>
      </Link>
      <Link to={"/tutors"}>
        <li className="p-2">Our Tutors</li>
      </Link>
      <Link to={"/"}>
        <li className="p-2">About us</li>
      </Link>
    </>
  );

  // scroll

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const Toast = Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 1000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.onmouseenter = Swal.stopTimer;
      toast.onmouseleave = Swal.resumeTimer;
    },
  });

  const handleLogOut = () => {
    logout()
      .then(() => {
        Toast.fire({
          icon: "success",
          title: `Bye See You Again`,
        });
        localStorage.removeItem("user");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  // console.log(user)
  return (
    <div
      className={`text-white max-w-full  navbar justify-between px-3 md:px-6 fixed md:z-10 transition-all duration-300 ease-in-out dark:bg-d-color1
        ${isScrolled ? "bg-color1 bg-opacity-50 shadow-md" : "bg-color1"}`}
    >
      <div className="">
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
            className="menu menu-sm dropdown-content dark:text-white  dark:bg-gray-800 bg-primary rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            {navLinks}
            <DarkModeToggle></DarkModeToggle>
          </ul>
        </div>
        <div className="flex items-center">
          <div className="w-10">
            <img className="rounded-xl" src={logo} alt="Logo" />
          </div>
          <h1 className=" p-4 text-white text-2xl">SkillPathway</h1>
        </div>
      </div>
      <div className=" hidden lg:flex">
        <ul className="menu menu-horizontal text-lg px-1">
          {user ? navLinks : guestNavLinks}
          <DarkModeToggle></DarkModeToggle>
        </ul>
      </div>
      <div className="">
        {user ? (
          <div className="flex items-center gap-2">
            <div
              className="avatar tooltip tooltip-left"
              data-tip={user.displayName}
            >
              <div className="w-12  rounded-full">
                <img src={user.photoURL} />
              </div>
            </div>
            <button
              onClick={handleLogOut}
              className="text-white underline underline-offset-4 cursor-pointer"
            >
              Log Out
            </button>
          </div>
        ) : (
          <Link to={"/login"}>
            <h1 className="text-white underline underline-offset-4 cursor-pointer">
              Login
            </h1>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Nav;
