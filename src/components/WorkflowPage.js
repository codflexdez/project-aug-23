import React from "react";

const WorkflowPage = () => {
    const styles = {
        img: {
          width: "100%",
          height: "100%",
          objectFit: "cover",
          objectPosition: "top"
        },
        section: {
          padding: "2rem",
          marginLeft: "auto",
          marginRight: "auto",
          maxWidth: "60vw",
        },
      };
    
      return (
        <>
          <section style={styles.section}>
            <img
              src={process.env.PUBLIC_URL + "/img/workflow.webp"}
              alt="response-details"
              style={styles.img}
            />
          </section>
        </>
      );
    };

export default WorkflowPage;