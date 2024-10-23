import {FaLinkedin, FaFacebook, FaYoutube, FaLock, FaGithub} from "react-icons/fa";
import {FaTwitter} from "react-icons/fa6";
import {json, Link} from "react-router-dom";
import pinCodeGif from "./assets/pinCode.gif";
import crossPlatformGif from "./assets/crossPlatform.gif";
import easyGif from "./assets/easy.gif";
import updateGif from "./assets/update.gif";
import Cookies from "js-cookie";
import {useEffect, useState} from "react";

const App = () => {
  const [isLogin, setIsLogin] = useState(JSON.parse(localStorage.getItem("isLogin")) || false);
  const [loginUserName, setLoginUserName] = useState("");
  const tokenId = Cookies.get("tokenId");
  const checkIsLogin = async () => {
    try {
      const res = await fetch("http://localhost:8000/api/check-login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: tokenId,
        },
        credentials: "include",
      });
      console.log(res);
      setIsLogin(res.ok);
      const result = await res.json();
      setLoginUserName(result.user.name);
      localStorage.setItem("isLogin", res.ok);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    checkIsLogin();
  }, []);
  return (
    <div className="min-h-screen bg-green-50 text-green-600 relative">
      {/* Navbar */}
      <nav className=" font-semibold bg-slate-600 text-white flex justify-around items-center h-12">
        <div>
          <span className=" font-bold text-green-600"> &lt;P</span>ass<span className=" font-bold text-green-600">OP/&gt;</span>{" "}
        </div>
        <Link
          to={!isLogin && "/login"}
          onClick={() => {
            if (isLogin) {
              Cookies.remove("tokenId");
              localStorage.setItem("isLogin", false);
              setIsLogin(false);
            }
          }}
          className=" border flex gap-1 items-center bg-green-500 rounded-3xl p-1 px-5 cursor-pointer hover:bg-green-600 active:scale-95 duration-100"
        >
          {isLogin ? "Logout" : "Login"}
        </Link>
      </nav>
      {/* Hero Section */}
      <section className="bg-green-50 py-20 text-center">
        {isLogin && <p>👋🏻 Hi! {loginUserName}</p>}
        <h1 className="text-4xl font-bold mb-6 animate-pulse px-2">Manage Your Passwords Safely</h1>
        <p className="text-xl mb-12 px-1">Start securing your data with ease and confidence</p>
        {/* Secure Lock Image */}
        <div className="flex justify-center mb-6">
          <FaLock className="text-9xl text-green-600 mb-4 animate-bounce" />
        </div>
        {/* Button */}
        <div className="flex justify-center">
          <Link to={"/dashboard"} className="bg-green-600 text-white py-3 px-6 rounded-lg flex items-center hover:bg-green-700 transform hover:scale-105 transition-transform duration-300">
            Start to Save Password
            <div className="flex ml-4">
              <FaLinkedin className="ml-2" />
              <FaFacebook className="ml-2" />
              <FaYoutube className="ml-2" />
            </div>
          </Link>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="pb-12">
        <h2 className="text-3xl font-bold text-center mb-8 animate-fade-in">What Our Users Say</h2>
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-center items-center gap-6">
          <div className="bg-white p-6 w-[80%] rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <p>"This password manager changed the way I secure my data!"</p>
            <div className="flex justify-between items-center mt-6">
              <span className="block mt-4 text-gray-500">- User A</span>
              <img src="https://tailwindui.com/plus/img/avatar-3.jpg" alt="" className="h-10 w-10 flex-none rounded-full"></img>
            </div>
          </div>
          <div className="bg-white p-6 w-[80%] rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <p>"A must-have tool for anyone who values their privacy."</p>
            <div className="flex justify-between items-center mt-6">
              <span className="block mt-4 text-gray-500">- User A</span>
              <img src="https://tailwindui.com/plus/img/avatar-2.jpg" alt="" className="h-10 w-10 flex-none rounded-full"></img>
            </div>
          </div>
          <div className="bg-white p-6 w-[80%] rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <p>"The interface is so easy to use, and it's extremely secure."</p>
            <div className="flex justify-between items-center mt-6">
              <span className="block mt-4 text-gray-500">- User A</span>
              <img src="https://tailwindui.com/plus/img/avatar-1.jpg" alt="" className="h-10 w-10 flex-none rounded-full"></img>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-12 bg-green-100">
        <h2 className="text-3xl font-bold text-center mb-8">Why Choose Us</h2>
        <div className="max-w-6xl px-5 lg:px-0 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md hover:bg-green-50 transition-colors duration-300">
            <div className="flex justify-between items-center  mb-4">
              <h3 className="text-xl font-bold mb-4">Secure</h3>
              <img src={pinCodeGif} width={50} alt="" />
            </div>
            <p>We use top-tier encryption to keep your passwords safe.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md hover:bg-green-50 transition-colors duration-300">
            <div className="flex justify-between items-center  mb-4">
              <h3 className="text-xl font-bold mb-4">Easy to use</h3>
              <img src={easyGif} width={50} alt="" />
            </div>
            <p>An intuitive interface that anyone can use without effort.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md hover:bg-green-50 transition-colors duration-300">
            <div className="flex justify-between items-center  mb-4">
              <h3 className="text-xl font-bold mb-4">Cross-Platform</h3>
              <img src={crossPlatformGif} width={50} alt="" />
            </div>
            <p>Available on all major platforms—use it anywhere, anytime.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md hover:bg-green-50 transition-colors duration-300">
            <div className="flex justify-between items-center  mb-4">
              <h3 className="text-xl font-bold mb-4">Free Updates</h3>
              <img src={updateGif} width={50} alt="" />
            </div>
            <p>We provide regular updates and new features without extra cost.</p>
          </div>
        </div>
      </section>
      {/* Footer */}
      <footer className="py-6 text-center text-gray-500">© 2024 Password Manager, Inc. All Rights Reserved.</footer>
    </div>
  );
};

export default App;
