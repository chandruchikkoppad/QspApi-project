import React, { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";
import { toast } from "react-toastify";
import AxiosInstance from "../../Apis/AxiosInstance";
import Styles from "./BootCamp.module.css";

const BootCamp = () => {
  let [photo, setPhoto] = useState("");
  let [state, setState] = useState({
    name: "",
    description: "",
    website: "",
    email: "",
    address: "",
    careers: "",
    averageRating: "",
  });
  let { name, description, website, email, address, careers, averageRating } =
    state;

let handlePhoto = e => {
  let file = e.target.files[0];
  let reader = new FileReader();
  reader.onload = () => {
    let img = document.querySelector("img");
    img.src = reader.result;
    img.style.width = "150px";
    img.style.height = "90px";
    img.style.marginLeft = "50px";
    setPhoto(reader.result);
  };
  let pdata = reader.readAsDataURL(file);
};

  useEffect(() => {
    let fetchData = async () => {
      let { data } = await AxiosInstance.get("/bootcamps");
      console.log(data.data);
    };
    fetchData();
  }, []);

  let handleChange = e => {
    let { name, value } = e.target;
    setState({ ...state, [name]: value });
  };
  useEffect(() => {
    setState({ ...state, photo });
  }, [photo]); 

  let handleSubmit = async e => {
    e.preventDefault();
    try {
      let payload = state;
      console.log(payload);
      let token = window.localStorage.getItem("token");
      console.log(token);
      let { data } = await AxiosInstance.post("/bootcamps", payload, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (data.success === true && data.message == "created new Bootcamp") {
        Navigate("/createCourses");
      }
    } catch (error) {
      toast.error(error.code);
    }
  };
  return (
    <section className={Styles.BootCamp}>
      <article>
        <h1>CreateBootCamp</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              value={name}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="description">Description</label>
            <textarea
              cols="20"
              rows="5"
              name="description"
              value={description}
              onChange={handleChange}
            ></textarea>
          </div>
          <div className="form-group">
            <label htmlFor="website">Website</label>
            <input
              type="text"
              name="website"
              value={website}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              value={email}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="address">Address</label>
            <input
              type="text"
              name="address"
              value={address}
              onChange={handleChange}
            />
          </div>
          <div
            className="form-group"
            name="careers"
            value={careers}
            onChange={handleChange}
          >
            <label htmlFor="careers">Careers</label>
            <select name="careers" id="careers">
              <option value="web development">web development</option>
              <option value="react development">react development</option>
              <option value="fullstack development">
                fullstack development
              </option>
              <option value="java development">java development</option>
              <option value="python development">python development</option>
              <option value="android development">android development</option>
              <option value="ux/ui development">ux/ui development</option>
              <option value="business">business</option>
              <option value="others">others</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="averageRating">AverageRating</label>
            <input
              type="number"
              name="averageRating"
              value={averageRating}
              onChange={handleChange}
              min={1}
              max={5}
              step={0.5}
            />
          </div>
          <div className="form-group">
            <label htmlFor="photo">Image</label>
            <input
              type="file"
              name="photo"
              id="photo"
              onChange={handlePhoto} 
            />
          </div>
          <div className="form-group">
            <button>Submit</button>
          </div>
        </form>
      </article>
    </section>
  );
};

export default BootCamp;
