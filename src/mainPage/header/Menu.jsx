import React from "react";
import Styles from "./_header.module.css";
import { Link } from "react-router-dom";
import { RiArrowDropDownLine } from "react-icons/ri";
import { HiUser } from "react-icons/hi";
import { HiUserGroup } from "react-icons/hi";
import { BsThreeDots } from "react-icons/bs";
const Menu = () => {
  return (
    <>
      <li className={Styles.dropdown}>
        <span className={Styles.droptbtn}>
          Browse &nbsp; <RiArrowDropDownLine />
        </span>
        <div class={Styles.dropdown_content}>
          <a href="#">Web Development</a>
          <a href="#">Design</a>
          <a href="#">Mobile App</a>
          <a href="#">IT Software</a>
          <a href="">Marketing</a>
          <a href="">Music</a>
          <a href="">Lifestyle</a>
          <a href="">Business</a>
          <a href="">Photography</a>
        </div>
      </li>
      <li className={Styles.dropdown}>
        <span className={Styles.droptbtn}>Landings &nbsp;</span>
        <RiArrowDropDownLine />
        <div class={Styles.dropdown_content}>
          <a href="#">Courses</a>
          <a href="#">Lead Course</a>
          <a href="#">Request Access</a>
          <a href="#">SaaS</a>
          <a href="#">Home Academy</a>
        </div>
      </li>
      <li className={Styles.dropdown}>
        <span>Pages &nbsp;</span>
        <RiArrowDropDownLine />
        <div class={Styles.dropdown_content}>
          <a href="#"> About</a>
          <a href="#">Team</a>
          <a href="#">Instructor</a>
          <a href="#">Shope Page</a>
          <a href="#">Shope Details Page </a>
          <a href="#">Shope Cart Page</a>
          <a href="#">Search Page</a>
          <a href="#">Search None</a>
        </div>
      </li>
      <li className={Styles.dropdown}>
        <span>Accounts &nbsp;</span>
        <RiArrowDropDownLine />
        <div class={Styles.dropdown_content}>
          <a href="#"> Courses</a>
          <a href="#">Paths</a>
          <a href="#">Blog</a>
          <a href="#">Career</a>
          <a href="#">speciality</a>
          <hr />
          <a href="#">About</a>
          <a href="#">Pricing</a>
          <a href="#">Compare Plan</a>
          <a href="#">Contact</a>
        </div>
      </li>
      <li className={Styles.dropdown}>
        <span>
          <BsThreeDots /> &nbsp;
        </span>

        <div class={Styles.dropdown_content}>
          <a href="#"> Courses</a>
          <a href="#">Paths</a>
          <a href="#">Blog</a>
          <a href="#">Career</a>
          <a href="#">speciality</a>
          <hr />
          <a href="#">About</a>
          <a href="#">Pricing</a>
          <a href="#">Compare Plan</a>
          <a href="#">Contact</a>
        </div>
      </li>
    </>
  );
};

export default Menu;
