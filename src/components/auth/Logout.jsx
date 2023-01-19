import React from "react";
import { Link } from "react-router-dom";
import AxiosInstance from "../../Apis/AxiosInstance";
import Styles from "../../mainPage/header/_header.module.css";
import AdminRoute from "../../Routes/AdminRoute";

const Logout = () => {
  let token = window.localStorage.getItem("token");
  let logout = async () => {
    let { data } = await AxiosInstance.get("/auth/logout", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    window.localStorage.removeItem("token");
    window.location.assign("/");
  };
  let AuthUser = () => {
    return (
      <div className={Styles.buttons}>
        {/*<AdminRoute>*/}
          <div>
            <Link to="/admin/bootcamp" className={Styles.login}>
              <button className={Styles.greenBtn}>Create Bootcamp</button>
            </Link>
          </div>
    {/*</AdminRoute>*/}
        <div>
          <button onClick={logout} className={Styles.whiteBtn}>
            Logout
          </button>
        </div>
      </div>
    );
  };

  let GuestUser = () => {
    return (
      <>
        <div className={Styles.buttons}>
          <Link to="/login" className={Styles.login}>
            <button className={Styles.blueBtn}>Sign In</button>
          </Link>
        </div>

        <div>
          <Link to="/signup">
            <button className={Styles.whiteBtn}> Sign Up</button>
          </Link>
        </div>
      </>
    );
  };
  return (
    <section className={Styles.btns}>
      <>{token ? <AuthUser /> : <GuestUser />}</>
    </section>
  );
};

export default Logout;
