import React from "react";
import Footer from "./ui-elements/Footer"
import { useLocation } from "react-router-dom";

const GuestsProfile = () => {
  const location = useLocation();
  const profile = location.state || {};


  
  const styles = {
    flex: {
      display: "flex",
      justifyContent: "space-between",
      padding: "1.125rem 1rem",
    },
    footer: {
      backgroundColor: "#F4F4F4",
      position: "fixed",
      bottom: "0",
      left: "3%",
      right: "0",
      zIndex: "3",
      width: "97%",
    },
    section: {
      display: "flex",
      flexDirection: "column",
      width: "100%",
      height: "100%",
      overflowY: "hidden",
    },
    img: {
      width: "100%",
      height: "100%",
      objectFit: "cover",
    },
    divImg: {
      overflowY: "auto",
      display: "flex",
      width: "100%",
    },
  };

  return (
    <>
      <section style={styles.section}>
        <div>
          <img
            style={styles.divImg}
            src={process.env.PUBLIC_URL + "/img/1-16of16guests20.png"}
            alt="show"
          />
        </div>
        <div>
          <Footer profile={profile} styles={styles} location={location} />
        </div>
      </section>
    </>
  );
};

export default GuestsProfile;
