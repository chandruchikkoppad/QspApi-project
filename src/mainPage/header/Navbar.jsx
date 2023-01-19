import React, { useEffect } from "react";
import Styles from "./_header.module.css";
import Logout from "../../components/auth/Logout";
import Menu from "./Menu";
import { BsSearch } from "react-icons/bs";
import AxiosInstance from "../../Apis/AxiosInstance";

const Navbar = () => {
  let token = window.localStorage.getItem("token");
  let UserName = "",
    UserRole = "";
  useEffect(() => {
    let fetchData = async () => {
      try {
        let { data } = await AxiosInstance.get("/auth/me", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        console.log(data);
        UserName = data.data.name;
        UserRole = data.data.role;
        console.log(UserName, UserRole);
      } catch (error) {
        console.log(error.code);
      }
    };
    fetchData();
  }, [token]);
  return (
    <section className={Styles.navheader}>
      <nav>
        <article>
          <div id={Styles.mainNav1}>
            <div>
              <img
                width="112"
                height="29"
                src="https://geeks.madrasthemes.com/wp-content/uploads/2021/09/logo.svg"
                alt="Geeks"
              ></img>
            </div>
            <div>
              <ul>
                <Menu />
                {/*
                <li>
                  Browse <RiArrowDropDownLine />
                </li>
                <li>
                  Landing <RiArrowDropDownLine />
                </li>
                <li>
                  Pages <RiArrowDropDownLine />
                </li>
                <li>
                  Accounts <RiArrowDropDownLine />
                </li>
                <li>
                  <BsThreeDots />
                </li>
  <li></li> */}
              </ul>
              <div className={Styles.searchdiv}>
                <input
                  type="search"
                  name="search"
                  id={Styles.search}
                  placeholder="Search Course"
                />
                <BsSearch />
              </div>
            </div>
          </div>
           <h1>{UserName}</h1>
          <div>
            {/*  <Link to="/bootcamp">
              <button className={Styles.whiteBtn}>Add Courses</button>
            </Link>
            <Link to="/login">
              <button className={Styles.whiteBtn}>Sign In</button>
            </Link>
            <Link to="/signup">
              <button className={Styles.blueBtn}>Sign Up</button>
            </Link>*/}
            <Logout />
          </div>
        </article>
      </nav>
    </section>
  );
};

export default Navbar;
