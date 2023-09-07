import React from "react";

const ResetSection = () => {

return (
    <>
        <article>
          <h2>Reset Password</h2>
          <p>
            Please enter your Username and an email will be sent for how to change
            your password
          </p>
        </article>
        <form id="reset-form">
          <label htmlFor="uName">Username</label>
          <input type="text" id="uName" data-user-match="false" required/>
          <input type="button" value="Request" id="btn-request"/>
        </form>
    </>
);

};

export default ResetSection;