import React from "react";

const SurveyResponse = () => {

    const styles= {
        img: {
           width: "100%",
           height: "100%",
           objectFit: "cover",
        },
        section: {
            padding: "2rem",
            marginLeft: "auto",
            marginRight: "auto",
        }
      };
      

    return (
        <>
        <section style={styles.section}>
            <img src={process.env.PUBLIC_URL + "/img/survey-response.png"}
                    alt="response-details" style={styles.img} />
        </section>
        </>
    );
};

export default SurveyResponse;