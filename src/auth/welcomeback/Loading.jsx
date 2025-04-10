import React from "react";
import "../../styles/authCss/loading.css";
import loading from "../../assets/loading.svg";
const Loading = () => {
  return (
    <div className="loadingmain">
      <div className="loadingcircle">
        <div className="loadinginnercircle"></div>
      </div>
      <div className="loadingcircle1">
        <div className="loadinginnercircle1"></div>
      </div>
      <div className="loadinggoldsmallcircle"></div>
      <div className="loadinggoldsmallcircle1"></div>
      <section className="Loadingcontainer">
        <div className="loadingtext">
          <h1>Loading...</h1>
        </div>
        <div className="loadingimg">
          <img src={loading} />
        </div>
        <div className="loadingtext2">
          <p>Just a moment</p>
        </div>
        <button className="done">Done</button>
      </section>
      <section className="loadingfooter">
        <span>© 2025 Legacy Builders | All rights reserved</span>
      </section>
    </div>
  );
};

export default Loading;
