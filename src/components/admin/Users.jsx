import React, { useEffect, useState } from "react";
import Moment from "react-moment";
import AxiosInstance from "../../Apis/AxiosInstance";
import Styles from "./Users.module.css";

const Users = () => {
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
    <section className={Styles.tableSection}>
      <article className={Styles.tableArticle}>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Image</th>
              <th>Email</th>
              <th>Role</th>
              <th>Gender</th>
              <th>Joined-At</th>
            </tr>
          </thead>
          <tbody>
            {users.map((val, ind) => {
              return (
                <tr key={ind}>
                  <td>{val.name}</td>
                  <td>{val.image}</td>
                  <td>{val.email}</td>
                  <td>{val.role}</td>
                  <td>{val.gender}</td>
                  <td>
                    {
                      <Moment format="DD/MMM/YYYY" withTitle>
                        {val.createdAt}
                      </Moment>
                    }
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </article>
    </section>
  );
};

export default Users;
