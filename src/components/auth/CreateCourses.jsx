import React, { useState, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import AxiosInstance from "../../Apis/AxiosInstance";
import Styles from "./CreateCourses.module.css";

const CreateCourses = () => {
  let { id } = useParams();
  //   let formRef = useRef();
  //   let [photo, setPhoto] = useState({
  //     photo: null,
  //   });
  let [scholarshipAvailable,setScholor]=useState(false)
  let [state, setState] = useState({
    title: "",
    description: "",
    duration: "",
    price: "",
    minimumSkill: ""
  });
  let {
    title,
    description,
    duration,
    price,
    minimumSkill,
  } = state;

  //   let handlePhoto = e => {
  //     let file = e.target.files[0];
  //     console.log(file);
  //     let reader = new FileReader();
  //     console.log(reader);
  //     reader.onload = () => {
  //       console.log(reader.result);
  //       setPhoto(reader.result);
  //     };
  //     let pdata = reader.readAsDataURL(file);
  //     console.log(pdata);
  //   };
  let handleScholor = e => {
  e.target.value==="yes"?setScholor(true):setScholor(false)
}
  let handleChange = e => {
    let { name, value } = e.target;
    setState({ ...state, [name]: value });
  };
   useEffect(() => {
     setState({ ...state, scholarshipAvailable });
   }, [scholarshipAvailable]);
  let handleSubmit = async e => {
    e.preventDefault();
    try {
      let payload = state;
      console.log(payload);
      let token = window.localStorage.getItem("token");
      console.log(token);
      let data = await AxiosInstance.post(
        `/bootcamps/${id}/courses`,
        payload,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log(data);
    } catch (error) {
      toast.error(error.code);
    }
  };
  return (
    <section className={Styles.BootCamp}>
      <article>
        <h1>Create-Course</h1>
        <form
          onSubmit={handleSubmit}
          /*  ref={formRef} */
        >
          <div className="form-group">
            <label htmlFor="title">Name</label>
            <input
              type="text"
              name="title"
              value={title}
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
            <label htmlFor="duration">Duration</label>
            <input
              type="text"
              name="duration"
              value={duration}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="price">Price</label>
            <input
              type="number"
              name="price"
              value={price}
              onChange={handleChange}
            />
          </div>
          <div
            className="form-group"
            name="minimumSkill"
            value={minimumSkill}
            onChange={handleChange}
          >
            <label htmlFor="minimumSkill">MinimumSkill</label>
            <select name="minimumSkill" id="minimumSkill">
              <option value=" ">choose your skill from below</option>
              <option value="beginner">beginner</option>
              <option value="intermediate">intermediate</option>
              <option value="advanced">advanced</option>
            </select>
          </div>
          <div
            className="form-group"
            value={scholarshipAvailable}
            onChange={handleScholor}
          >
            <label htmlFor="scholarshipAvailable">ScholarshipAvailable</label>
            {/*  <input
              type="text"
              name="scholarshipAvailable"
              value={scholarshipAvailable}
              onChange={handleChange}
              placeholder="enter boolean either 'true' or 'false' only"
            /> */}
            <select name="scholarshipAvailable" id="scholarshipAvailable">
              <option value=""></option>
              <option value="yes">yes</option>
              <option value="no">no</option>
            </select>
          </div>
          {/*   <div className="form-group">
            <label htmlFor="photo">Image</label>
            <input
              type="file"
              name="photo"
              accept="image/*"
              id="photo"
              onChange={{ handlePhoto, handleImage }}
            />
  </div> */}
          <div className="form-group">
            <button>Submit</button>
          </div>
        </form>
      </article>
    </section>
  );
};

export default CreateCourses;
