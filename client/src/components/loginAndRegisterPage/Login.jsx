import {useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import {IoMdArrowBack} from "react-icons/io";
import toast from "react-hot-toast";
import Cookies from 'js-cookie';
import style from './login.module.css';


const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!email) newErrors.email = "Email is required";
    if (!password) newErrors.password = "Password is required";
    return newErrors;
  };



  return (
    <div className={style.signUpFormContainer}>
      <IoMdArrowBack size={28} className={style.backIcon} onClick={() => navigate("/")} />
      <form onSubmit={} className={style.signUpForm}>
        <div className={style.formGroup}>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={`${errors.email && style.borderError} ${style.formGroupBorder}`}
          />
          {errors.email && <p className={style.error}>{errors.email}</p>}
        </div>
        <div className={style.formGroup}>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            placeholder="***********"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className={`${errors.password && style.borderError} ${style.formGroupBorder}`}
          />
          {errors.password && <p className={style.error}>{errors.password}</p>}
        </div>
        <button type="submit" className={style.signUpButton}>
          Sign In
        </button>
        <p className={style.loginLink}>
          Don't have an account? <Link to={"/register"}>Register Now</Link>
        </p>
      </form>
    </div>
  );
};

export default Login;