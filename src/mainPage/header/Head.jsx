import React, { useContext, useRef } from "react";
import Styles from "./_header.module.css";
import { FiVideo } from "react-icons/fi";
import { MdOutlinePeopleAlt } from "react-icons/md";
import { BsClock } from "react-icons/bs";
import { RiArrowDropDownLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import { ContextApi } from "../../ContextApi/ContextProvider";
import Navbar from "./Navbar";

const Head = () => {
  let data1 = useContext(ContextApi);
  console.log(data1);

  return (
    <section className={Styles.header}>
      {/*   <Navbar /> */}

      {/*///!-------------------------------------------------------------------------------------------*/}
      <main className={Styles.landing1}>
        <div className={Styles.content}>
          <h1>
            Welcome to Geeks UI <br /> Learning Application
          </h1>
          <p>
            Hand-picked Instructor and expertly crafted <br /> courses, designed
            for the modern students and <br /> entrepreneur.
          </p>
          <button className={Styles.greenBtn}>Browse Courses</button>
          <button className={Styles.whiteBtn}>Are You Instructor?</button>
        </div>
        <div className={Styles.hero}></div>
      </main>
      {/* ////!-----------------------------------------------------------------------------------------------*/}
      <div className={Styles.bottomBar}>
        <article>
          <div className="bb1">
            <div className={Styles.icon}>
              <FiVideo />
            </div>
            &nbsp; &nbsp;
            <aside>
              <h3>30,000 online courses</h3>
              <p>
                Enjoy a variety of fresh <br /> topics
              </p>
            </aside>
          </div>
          <div className="bb2">
            <div className={Styles.icon}>
              <MdOutlinePeopleAlt />
            </div>
            &nbsp; &nbsp;
            <aside>
              <h3>Expert instruction</h3>
              <p>
                Find the right instructor for <br /> you
              </p>
            </aside>
          </div>
          <div className="bb3">
            <div className={Styles.icon}>
              <BsClock />
            </div>
            &nbsp; &nbsp;
            <aside>
              <h3>Lifetime access</h3>
              <p>Learn on your schedule</p>
            </aside>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Head;
