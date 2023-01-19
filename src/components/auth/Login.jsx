import React from "react";
import style from "./Login.module.css";
import AxiosInstance from "../../Apis/AxiosInstance";
import { useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
  let navigate = useNavigate();
  let [users, setUsers] = useState({
    /*   Firstname: "",
    Lastname: "", */
    // UserName: "",
    email: "",
    password: "",
    // passwordConfirmation: "",
  });

  let {
    /* Firstname, Lastname, */
    // name,
    email,
    password,
    // passwordConfirmation,
  } = users;

  let handleChange = e => {
    setUsers({ ...users, [e.target.name]: e.target.value });
  };

  let handleSubmit = async e => {
    e.preventDefault();
    try {
      let payload = {
        email,
        password,
      };
      console.log(payload);
      let { data } = await AxiosInstance.post("auth/login", payload);
      toast.success(`successfully ${email} logged In`);
      console.log(data);
      if (data.success === true) {
        window.localStorage.setItem("token", data.token);
      } else {
        window.localStorage.removeItem("token", data.token);
      }
      // navigate("/");
      window.location.assign("/");
    } catch (error) {
      toast.error(error.code);
    }
  };

  return (
    <section id={style.mainBlock}>
      <article id={style.articleBlock}>
        <img
          src="https://geeks.madrasthemes.com/wp-content/uploads/2021/10/logo-icon.svg"
          alt=""
        />
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
          {/*      <div>
            <label htmlFor="Username">UserName</label>
            <input
              type="text"
              name="Username"
              id="Username"
              value={Username}
              onChange={handleChange}
            />
          </div> */}
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

          {/* --------------------------- */}
          <p>
            Don't have an Account? <a href="/signup">Sign Up</a>
          </p>
          {/* ------------------- */}
          <div>
            <button id={style.btn}>Submit</button>
          </div>
        </form>
      </article>
    </section>
  );
};

export default SignIn;
