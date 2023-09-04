import React from "react";

const EmailCenterPage = () => {
    const styles = {
        img: {
          width: "100%",
          height: "100%",
          objectFit: "cover",
          objectPosition: "top",
        },
        section: {
           width: "100vw",
           height: "90vh"
        },
      };
    
      return (
        <>
          <section style={styles.section}>
            <img
              src={process.env.PUBLIC_URL + "/img/email-center.webp"}
              alt="response-details"
              style={styles.img}
            />
          </section>
        </>
      );
    };

export default EmailCenterPage;