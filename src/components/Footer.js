import React from "react";

const Footer = () => {
  return (
    <footer>
      <section className="pagination">
        <span>1 - 5 of 5 Pending Emails</span>
        <div>
          <span></span>
          <span className="fa fa-angle-left"></span>
          <span>Page</span>
          <button className="pagesNb">1</button>
          <span id="totalpg">of 1</span>
          <span className="fa fa-angle-right"></span>
          <span></span>
        </div>
        <div>
          <span>Emails per page</span>
          <button className="pagesNb">
            10<span className="fa fa-caret-down"></span>
          </button>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
