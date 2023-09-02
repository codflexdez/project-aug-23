import React from "react";

const InfoModal = ({ isInfoOpen, onClose }) => {
  const styles = {
    sectionFlex: {
      flexDirection: "column",
      display: "flex",
      paddingBottom: "4rem",
      borderBottom: "1px solid var(--border-color)",
      overflowY: "auto",
      zIndex: "2",
      paddingTop: "2rem",
      paddingLeft: "1.125rem",
      paddingRight: "1.125rem",
      height: "100%",
      gap: "2rem"
    },
    divFlex: {
      display: "flex",
      gap: "0.25rem",
      flexWrap: "wrap",
      columnGap: "5rem"
    },
    divRow: {
      display: "flex",
      alignItems: "center",
      gap: "2rem",
      justifyContent: "space-between",
      width: "40%",
      whiteSpace: "nowrap",
      fontSize: "large"
    },
    footer: {
      marginTop: "auto",
    },
    title: {
      paddingBottom: "1rem"
    },
    span: {
      color: "gray",
    }
    
  };

  return (
    <>
      <section
        id="info"
        className={`modal ${isInfoOpen ? "" : "hidden"}`}
        aria-label="information"
      >
        <img
          src={process.env.PUBLIC_URL + "/img/close.png"}
          className="info_btn-close"
          alt="close"
          role="button"
          onClick={onClose}
        />
        <header className="modal-header">
          <h3>Info</h3>
        </header>
        <div style={styles.sectionFlex}>
          <div>
          <h4 style={styles.title}>Reservation info</h4>

          <article style={styles.divFlex}>
            <div style={styles.divRow}>
              <span style={styles.span}>Res #</span>
              <span>18365241</span>
            </div>
            <div style={styles.divRow}>
              <span style={styles.span}>PMS ID</span>
              <span>18365241</span>
            </div>
            <div style={styles.divRow}>
              <span style={styles.span}>CRS ID</span>
              <span>18365241</span>
            </div>
            <div style={styles.divRow}>
              <span style={styles.span}>Type</span>
              <span>Confirmation</span>
            </div>
            <div style={styles.divRow}>
              <span style={styles.span}>Check in</span>
              <span>06/23 2019</span>
            </div>
            <div style={styles.divRow}>
              <span style={styles.span}>Check out</span>
              <span>06/27 2019</span>
            </div>
            <div style={styles.divRow}>
              <span style={styles.span}>Revisionist</span>
              <span></span>
            </div>
            <div style={styles.divRow}>
              <span style={styles.span}>Source code</span>
              <span>IBE</span>
            </div>
            <div style={styles.divRow}>
              <span style={styles.span}>Market code</span>
              <span>Individual BAR</span>
            </div>
            <div style={styles.divRow}>
              <span style={styles.span}>Channel code</span>
              <span></span>
            </div>
            <div style={styles.divRow}>
              <span style={styles.span}>Block code</span>
              <span>18365241</span>
            </div>
            <div style={styles.divRow}>
              <span style={styles.span}>Rate code</span>
              <span>BAR_BF IMP</span>
            </div>
          </article>
          </div>
          <div>
          <h4 style={styles.title}>Guest info</h4>

          <article style={styles.divFlex}>
            <div style={styles.divRow}>
              <span style={styles.span}>Name</span>
              <span>Adrien Bralton</span>
            </div>
            <div style={styles.divRow}>
              <span style={styles.span}>Email</span>
              <span>a_bralton@gmail.com</span>
            </div>
            <div style={styles.divRow}>
              <span style={styles.span}>Cell</span>
              <span>+1 514 917 8679</span>
            </div>
            <div style={styles.divRow}>
              <span style={styles.span}>Creation date</span>
              <span>06/23 2019</span>
            </div>
          </article>
          </div>
        </div>
        <footer style={styles.footer}>
          <button className="close" aria-label="button-close" onClick={onClose}>
            Close
          </button>
        </footer>
      </section>
    </>
  );
};

export default InfoModal;
