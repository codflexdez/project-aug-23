import React, { useState } from "react";
import AlertBox from "../ui-elements/AlertBox";

const MfaSection = ({onLogin, styles}) => {
  const [userCode, setUserCode] = useState("");
  const [showAlert, setShowAlert] = useState(false);

  const handleCodeSubmit = (e) => {
    e.preventDefault();
    if ((userCode === "123456")) {
      onLogin();
    } else {
      setShowAlert(true)
      setTimeout(() => {
        setShowAlert(false);
      }, 3000);
    }
  };
 


  let url = "";

  return (
    <>
      {showAlert && (<AlertBox
          message={"Your code is incorrect try again"}  closeAlert={() => setShowAlert(false)}/>) 
      }
      <section className="psw-reset-container">
        <article>
          <h2>MFA</h2>
          <p className="center">
            For security purpose a code has been sent to{" "}
            <span>r******i@a*****s.com</span>. Please enter the code below.
          </p>
        </article>
        <form type="submit">
          <label htmlFor="code">Code</label>
          <input
            type="text"
            id="code"
            placeholder="Enter code"
            value={userCode}
            onChange={(e) => setUserCode(e.target.value)}
          />
          <div>
            <input
              type="checkbox"
              id="checkbox-default"
              className="form-check-input"
            />
            <label htmlFor="checkbox-default" className="form-check-label">
              Remember me in this browser for 7 days
            </label>
          </div>
          <input
            type="submit"
            value="Submit"
            id="code-submit"
            onClick={(e) => handleCodeSubmit(e)}
            disabled={!userCode}
            style={!userCode ? styles.disabled : {}}
          />
        </form>
        <a href={url}>Resend the email with security code</a>
      </section>
    </>
  );
};

export default MfaSection;
