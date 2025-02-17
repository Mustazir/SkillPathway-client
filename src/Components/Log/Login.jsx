import { Link, useNavigate } from "react-router-dom";
import login from "../../assets/register.png";
import { useContext, useState } from "react";
import { AuthContext } from "../Main/AuthProvider";
import Swal from "sweetalert2";
import axios from "axios";

const Login = () => {
  const { handelSignin, googleSign } = useContext(AuthContext);
  const [flag, setFlag] = useState(false);
  const [showDummyUsers, setShowDummyUsers] = useState(false); // State to toggle the container
  const navg = useNavigate();

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

  const handleAutoFill = () => {
    document.querySelector("input[name='email']").value = "test@gmail.com";
    document.querySelector("input[name='password']").value = "1234567809@Aa";
  };

  const handelSubmit = (e) => {
    e.preventDefault();
    setFlag(true);
    const email = e.target.email.value;
    const password = e.target.password.value;

    if (email === "" || password === "") {
      Toast.fire({
        icon: "error",
        title: "All fields must be filled out.",
      });
      setFlag(false);
      return;
    }

    handelSignin(email, password)
      .then((user2) => {
        Toast.fire({
          icon: "success",
          title: `Welcome ${user2.user.displayName}`,
        });

        setFlag(false);
        navg(location.state ? location.state : "/");
      })
      .catch((error) => {
        console.error(error);
        Toast.fire({
          icon: "error",
          title: error.code,
        });
        setFlag(false);
      });
  };

  const handelgoogle = () => {
    googleSign()
      .then((user2) => {
        Toast.fire({
          icon: "success",
          title: `Welcome ${user2.user.displayName}`,
        });

        const user = { email: user2.user.email, role: "Student" };
        axios
          .post("https://skillpath-bay.vercel.app/users", user)
          .then((res) => console.log(res.data))
          .catch((error) => console.error(error));

        navg(location.state ? location.state : "/");
      })
      .catch((error) => {
        console.error(error);
        Toast.fire({
          icon: "error",
          title: error.code,
        });
      });
  };

  const handleDummyUser = (role) => {
    let email = "";
    let password = "1234567809@Aa";

    if (role === "ADMIN") {
      email = "admin@example.com"; // Admin's predefined email
    } else if (role === "TUTOR") {
      email = "tutor@example.com"; // Tutor's predefined email
    } else if (role === "STUDENT") {
      email = "student@example.com"; // Student's predefined email
    }

    // Simulate login for the dummy user with the predefined role
    handelSignin(email, password)
      .then((user2) => {
        Toast.fire({
          icon: "success",
          title: `Welcome ${user2.user.displayName} (${role})`,
        });
        navg(location.state ? location.state : "/");
      })
      .catch((error) => {
        console.error(error);
        Toast.fire({
          icon: "error",
          title: error.code,
        });
      });
  };

  return (
    <div className="hero bg-gray-200 py-32">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center w-1/2 lg:text-left">
          <img src={login} alt="" />
        </div>

        <div className="card bg-base-100 w-1/2 max-w-sm shrink-0">
          <div className="w-full max-w-md p-8 space-y-3 rounded-xl bg-gray-50 text-gray-800">
            <h1 className="text-4xl text-color1 font-bold text-center">Login</h1>

            <form onSubmit={handelSubmit} className="space-y-6">
              <div className="space-y-1 text-sm">
                <label className="block text-gray-600">Email</label>
                <input
                  type="text"
                  name="email"
                  placeholder="email"
                  className="w-full px-4 py-3 rounded-md border-gray-300 border-2 bg-gray-50 text-gray-800"
                />
              </div>

              <div className="space-y-1 text-sm">
                <label className="block text-gray-600">Password</label>
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  className="w-full border-2 px-4 py-3 rounded-md border-gray-300 bg-gray-50 text-gray-800"
                />
              </div>

              {flag ? (
                <button
                  disabled
                  className="block w-full p-3 text-center rounded-sm text-gray-50 bg-[#80A5DC]"
                >
                  <span className="loading loading-bars loading-sm"></span>
                </button>
              ) : (
                <button className="block w-full p-3 text-center hover:bg-color1 rounded-sm text-gray-50 bg-color2 duration-200">
                  Sign In
                </button>
              )}

              <button
                type="button"
                onClick={handleAutoFill}
                className="mt-4 w-full py-2 uppercase bg-green-500 hover:bg-green-950 text-white font-semibold transition duration-300"
              >
                dummy user (ADMIN)
              </button>
            </form>

            <div className="flex items-center pt-4 space-x-1">
              <div className="flex-1 h-px sm:w-16 bg-gray-300"></div>
              <p className="px-3 text-sm text-gray-600">Login with social accounts</p>
              <div className="flex-1 h-px sm:w-16 bg-gray-300"></div>
            </div>

            <div className="flex justify-center space-x-4">
              <button onClick={handelgoogle} aria-label="Log in with Google" className="p-3 rounded-sm">
                <img src="/google-icon.svg" alt="Google" className="w-5 h-5" />
              </button>
            </div>

            <p className="text-xs text-center sm:px-6 text-gray-600">
              Don't have an account?
              <Link to="/register" className="underline text-gray-800"> Sign up</Link>
            </p>

            {/* Toggle Button to Show/Hide the Dummy Users */}
            <button
              onClick={() => setShowDummyUsers(!showDummyUsers)}
              className="mt-4 w-full py-2 uppercase bg-blue-500 hover:bg-blue-950 text-white font-semibold transition duration-300"
            >
              {showDummyUsers ? "Hide Dummy Users" : "Show Dummy Users"}
            </button>

            {/* Container with the three dummy user buttons */}
            {showDummyUsers && (
              <div className="mt-4 space-y-3">
                <button
                  type="button"
                  onClick={() => handleDummyUser("ADMIN")}
                  className="w-full py-2 uppercase bg-red-500 hover:bg-red-950 text-white font-semibold transition duration-300"
                >
                  dummy user (ADMIN)
                </button>

                <button
                  type="button"
                  onClick={() => handleDummyUser("TUTOR")}
                  className="w-full py-2 uppercase bg-yellow-500 hover:bg-yellow-950 text-white font-semibold transition duration-300"
                >
                  dummy tutor
                </button>

                <button
                  type="button"
                  onClick={() => handleDummyUser("STUDENT")}
                  className="w-full py-2 uppercase bg-teal-500 hover:bg-teal-950 text-white font-semibold transition duration-300"
                >
                  dummy student
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
