import React from "react";
import { BiVideo } from "react-icons/bi";
import { SlPeople } from "react-icons/sl";
import { AiOutlineClockCircle } from "react-icons/ai";
import Styles from "./_section.module.css";

const Section4 = () => {
  return (
    <section className={Styles.sec4}>
      <article className={Styles.video}>
        <div className={Styles.card1}>
          <div className={Styles.bg}>
            <BiVideo className={Styles.rIcons} />
          </div>
          <div className={Styles.bgInfo}>
            <h4>30,000 Online Courses</h4>
            <p>
              Enjoy a variety of fresh
              <br />
              topics
            </p>
          </div>
        </div>

        <div className={Styles.card1}>
          <div className={Styles.bg}>
            <SlPeople className={Styles.rIcons} />
          </div>
          <div className={Styles.bgInfo}>
            <h4>Expert instruction</h4>
            <p>
              Find the right instructor for
              <br />
              you
            </p>
          </div>
        </div>

        <div className={Styles.card1}>
          <div className={Styles.bg}>
            <AiOutlineClockCircle className={Styles.rIcons} />
          </div>
          <div className={Styles.bgInfo}>
            <h4>Lifetime access</h4>
            <p>Learn on your schedule</p>
          </div>
        </div>
      </article>
    </section>
  );
};

export default Section4;
