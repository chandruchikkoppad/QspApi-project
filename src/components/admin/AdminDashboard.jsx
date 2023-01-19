import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AxiosInstance from "../../Apis/AxiosInstance";
import Styles from "./Admin.module.css";
import { FaUsers } from "react-icons/fa";
import Moment from "react-moment";



const AdminDashboard = () => {
  let [users, setUsers] = useState([]);
  let token = window.localStorage.getItem("token");
  useEffect(() => {
    let fdata = async () => {
      try {
        let { data } = await AxiosInstance.get("/auth/all-users", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setUsers(data.data);
      } catch (error) {
        console.log(error.code);
      }
    };
    fdata();
  }, []);

  return (
    <section className={Styles.dashboard}>
      <article>
        <div className={Styles.noofuser}>
          <h1>
            <span>
              <FaUsers />
            </span>{" "}
            Users
            <hr />
          </h1>
          <h3>
            Total Users : <div>{users.length}</div>
          </h3>
          {
            <Moment format="DD/MMM/YYYY" withTitle>
              {new Date()}
            </Moment>
          }
          <div>
            <Link to="/admin/users">View Users</Link>
          </div>
        </div>
      </article>
    </section>
  );
};

export default AdminDashboard;
