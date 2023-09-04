import React from "react";

const FormCenterPage = () => {
    const styles = {
        img: {
          width: "100%",
          height: "100%",
          objectFit: "fill",
          objectPosition: "top",
        },
        section: {
           width: "100vw",
           height: "92vh"
        },
      };

  return (
    <>
      <section style={styles.section}>
        <img
          src={process.env.PUBLIC_URL + "/img/form-center.webp"}
          alt="response-details"
          style={styles.img}
        />
      </section>
    </>
  );
};

export default FormCenterPage;
