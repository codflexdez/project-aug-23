import React from "react";

const Footer = ({ profile, styles, title }) => {
  
  
  return (
    <footer style={styles && styles.footer}>
      <section className="pagination" style={styles && styles.flex}>
        {!title ? (<span>{profile ? profile.fromTo : "1 - 5 of 5 Emails"}</span>) : (<span>{"1 - 5 of 5 " + title}</span>)}
        <div>
          <span></span>
          <span className="fa fa-angle-left"></span>
          <span>Page</span>
          <button className="pagesNb">1</button>
          <span id="totalpg">{profile ? "of "+profile.page : "of 1"}</span>
          <span className="fa fa-angle-right"></span>
          <span></span>
        </div>
        <div>
          {!title ? (<span>{ profile ? "Guests" : "Emails"} per page</span>) : (<span>{ title } per page</span>)}
          <button className="pagesNb">
          {profile ? profile.emails : "10"}
            <span className="fa fa-caret-down"></span>
          </button>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
