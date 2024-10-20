import {FaLinkedin, FaFacebook, FaYoutube, FaLock, FaGithub} from "react-icons/fa";
import {FaTwitter} from "react-icons/fa6";
import {Link} from "react-router-dom";
import pinCodeGif from "./assets/pinCode.gif";
import crossPlatformGif from "./assets/crossPlatform.gif";
import easyGif from "./assets/easy.gif";
import updateGif from "./assets/update.gif";

const App = () => {
  return (
    <div className="min-h-screen bg-green-50 text-green-600 relative">
      {/* Navbar */}
      <nav className=" font-semibold bg-slate-600 text-white flex justify-around items-center h-12">
        <div>
          <span className=" font-bold text-green-600"> &lt;P</span>ass<span className=" font-bold text-green-600">OP/&gt;</span>{" "}
        </div>
        <Link
          to={"https://github.com/SatyabratDivedi"}
          target="_blank"
          className=" border flex gap-1 items-center bg-green-500 rounded-3xl p-1 px-5 cursor-pointer hover:bg-green-600 active:scale-95 duration-100"
        >
          Login
        </Link>
      </nav>
      {/* Hero Section */}
      <section className="bg-green-50 py-20 text-center">
        <h1 className="text-4xl font-bold mb-6 animate-pulse">Manage Your Passwords Safely</h1>
        <p className="text-xl mb-12">Start securing your data with ease and confidence</p>
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

      {/* Social Media Links */}
      <div className=" fixed bottom-6 right-6 flex flex-col gap-1">
        <a
          href="https://www.linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-600 text-white rounded-full p-4 shadow-md border-4 border-white hover:shadow-xl hover:bg-blue-700 transform hover:scale-110 hover:rotate-12 transition-all duration-300"
        >
          <FaLinkedin className="text-2xl" />
        </a>
        <a
          href="https://www.facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-500 text-white p-4 rounded-full shadow-md border-4 border-white hover:shadow-xl hover:bg-black transform hover:scale-110 hover:rotate-12 transition-all duration-300"
        >
          <FaGithub className="text-2xl" />
        </a>
        <a
          href="https://www.youtube.com"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-600 text-white p-4 rounded-full shadow-md border-4 border-white hover:shadow-xl hover:bg-blue-700 transform hover:scale-110 hover:rotate-12 transition-all duration-300"
        >
          <FaTwitter className="text-2xl" />
        </a>
      </div>

      {/* Footer */}
      <footer className="py-6 text-center text-gray-500">© 2024 Password Manager, Inc. All Rights Reserved.</footer>
    </div>
  );
};

export default App;
