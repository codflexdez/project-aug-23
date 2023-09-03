import React, { useState } from "react";
import GmsSearch from "./ui-elements/GmsSearch";

const HomePage = () => {
  const [selProfile, setSelProfile] = useState(null);

  const activeProfile = (e, id) => {
    e.preventDefault();
    if (selProfile === id) {
      setSelProfile(null);
    } else {
      setSelProfile(id);
    }
  };

  return (
    <>
      {/* Your main content goes here  */}
      <section className="main-content">
        <h2>Amadeus Hotels & Resort</h2>
        <div>
          <input type="search" placeholder="Search" aria-label="Search" />

          {/* search within profiles goes hear*/}
          <GmsSearch onActive={activeProfile} selProfile={selProfile} />
        </div>
        <section>
          <div>
            <span>On property</span>
            <h3>72 Guests</h3>
          </div>
          <div>
            <span>Checking out today</span>
            <h3>16 Guests</h3>
          </div>
          <div>
            <span>Checking in today</span>
            <h3>8 Guests</h3>
          </div>
          <div>
            <span>Checking in this week</span>
            <h3>24 Guests</h3>
          </div>
        </section>
        <section>
          <div>
            <span className="fa fa-address-book-o"></span>
            <h4>Profiles</h4>
          </div>
          <div>
            <span className="fa fa-envelope-o"></span>
            <h4>Email Centre</h4>
          </div>
          <div>
            <span className="fa fa-file-text-o"></span>
            <h4>Reports</h4>
          </div>
          <div>
            <span className="fa fa-align-left"></span>
            <h4>Form Centre</h4>
          </div>
          <div>
            <span className="fa fa-address-book-o"></span>
            <h4>Workflow</h4>
          </div>
          <div>
            <span className="fa fa-graduation-cap"></span>
            <h4>Learning Centre</h4>
          </div>
        </section>
      </section>
    </>
  );
};

export default HomePage;
