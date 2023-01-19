import React,{useState} from "react";
import Moment from "react-moment";
import AxiosInstance from "../../Apis/AxiosInstance";
import Styles from "./GetBootCamps.module.css";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";

const GetBootCamps = () => {
  let [bootcamps, setBootcamps] = useState([]);

  let token = window.localStorage.getItem('token');

  let fData = async () => {
    try {
      let { data } = await AxiosInstance.get("/bootcamps", {
        headers: {
          Authorization:`Bearer ${token}`
        }
      });
      console.log(data);
      setBootcamps(data.data)
    } catch (error) {
      console.log(error.code);
    }
  };
  fData();

  return (
    <section className={Styles.getBootcamps}>
      <article>
        {bootcamps.map((val, ind) => {
          return (
            <div className={Styles.bootcards}>
              <img src={val.photo} alt={val.name} />
              <h1>
                <span> Name:</span>
                {val.name}
              </h1>
              <h3>
                <span>Careers:</span>
                {val.careers}
              </h3>
              <h3>
                <span>Website:</span>
                {val.website}
              </h3>
              <h4>
                <span>Last Updated At:</span>
                <Moment format="DD/MMM/YYYY" withTitle>
                  {val.updatedAt}
                </Moment>
              </h4>
              <p>
                <span>Description:</span>
                {val.description}
              </p>
              <h3>
                <span>Address:</span>
                {val.address}
              </h3>
              <h1>
                <span>Ratings:</span>
                {val.averageRating}{" "}
                <Rating name="half-rating" value={val.averageRating} />
              </h1>
              <div className={Styles.btns}>
                <button>
                  <Link to={`/admin/bootcamps/${val._id}/courses`}>View-Courses</Link>
                </button>
                <button>
                  <Link to={`/admin/bootcamps/${val._id}/course`}>Add-Courses</Link>
                </button>
              </div>
            </div>
          );
        })
    }
        
      </article>
    </section>
  );
};

export default GetBootCamps;
