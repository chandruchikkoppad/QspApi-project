import React, { useState } from "react";
import { useParams } from "react-router-dom";
import AxiosInstance from "../../Apis/AxiosInstance";
import Styles from "./GetCourses.module.css"
const GetCourses = () => {
  let {id} = useParams();
    let [courses, setCourses] = useState([]);

    let token = window.localStorage.getItem("token");

    let fData = async () => {
      try {
        let { data } = await AxiosInstance.get(`/bootcamps/${id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        console.log(data);
        setCourses(data.data);
      } catch (error) {
        console.log(error.code);
      }
    };
    fData();

  return (
    <section className={Styles.courseCard}>
      <article>
        {courses.map((v, i) => {
        return v
      })}
      </article>
    </section>
  );
};

export default GetCourses;
