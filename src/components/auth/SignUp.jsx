import React from "react";
import style from "./SignUp.module.css";
import { useState } from "react";
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";
import AxiosInstance from "../../Apis/AxiosInstance";

const SignUp = () => {
  let navigate = useNavigate();
  let [users, setUsers] = useState({
    /*   Firstname: "",
    Lastname: "", */
    name: "",
    email: "",
    password: "",
    passwordConfirmation: "",
  });

  let {
    /* Firstname, Lastname */ name,
    email,
    password,
    passwordConfirmation,
  } = users;

  let handleChange = e => {
    setUsers({ ...users, [e.target.name]: e.target.value });
  };

  let handleSubmit = async e => {
    e.preventDefault();
    try {
      let payload = {
        name,
        email,
        password,
        passwordConfirmation,
      };
      console.log(payload);
      if (password === passwordConfirmation) {
        await AxiosInstance.post("auth/register", payload);
        toast.success(`successfully ${name} added`);
        navigate("/login");
      } else {
        toast.error("password and confirm password not matched");
      }
    } catch (error) {
      toast.error(error.code);
    }
  };

  return (
    <section id={style.mainBlock}>
      <img
        src="https://geeks.madrasthemes.com/wp-content/uploads/2021/10/logo-icon.svg"
        alt=""
      />
      <h1>Sign Up</h1>
      <article id={style.articleBlock}>
        <form onSubmit={handleSubmit}>
          {/* --------------------- */}
          <div>
            <label htmlFor="Username">UserName</label>
            <input
              type="text"
              name="name"
              id="name"
              value={name}
              onChange={handleChange}
            />
          </div>
          {/* -------------------- */}
          <div>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              value={email}
              onChange={handleChange}
            />
          </div>
          {/* --------------------------- */}
          <div>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              id="password"
              value={password}
              onChange={handleChange}
            />
          </div>
          {/* ------------------------------------ */}
          <div>
            <label htmlFor="passwordConfirmation">passwordConfirmation</label>
            <input
              type="password"
              name="passwordConfirmation"
              id="passwordConfirmation"
              value={passwordConfirmation}
              onChange={handleChange}
            />
          </div>
          {/* --------------------------- */}
          <p>
            Already have an account? <Link to="/login">Sign in</Link>
          </p>
          {/* ------------------- */}
          <div>
            <button id={style.btn}>Register</button>
          </div>
        </form>
      </article>
    </section>
  );
};

export default SignUp;
