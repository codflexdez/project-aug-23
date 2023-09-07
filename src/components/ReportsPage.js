import React from "react";

const ReportsPage = () => {

    const styles = {
        img: {
          width: "100%",
          height: "100%",
          objectFit: "cover",
          objectPosition: "top"
        },
        section: {
        
        width: "95%",
        height: "91%"
        },
      };

    return (
        <>
        <section style={styles.section}>
            <img
              src={process.env.PUBLIC_URL + "/img/reports.png"}
              alt="response-details"
              style={styles.img}
            />
          </section>
        </>
    );
};

export default ReportsPage;