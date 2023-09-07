import React, { useState } from "react";
import GmsSearch from "./ui-elements/GmsSearch";
import { Link } from "react-router-dom";

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

  const parameterObj = {
    profile72: {
      fromTo: "1 - 20 of 72 Pending Emails",
      emails: "20",
      page: "4",
    },
    profile24: {
      fromTo: "1 - 20 of 24 Pending Emails",
      emails: "20",
      page: "2",
    },
    profile16: {
      fromTo: "1 - 16 of 16 Pending Emails",
      emails: "20",
      page: "1",
    },
    profile8: {
      fromTo: "1 - 8 of 8 Pending Emails",
      emails: "20",
      page: "1",
    },
  };

  //console.log(parameterObj.profile72);

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
          <Link
            to={{
              pathname: "/gms/profiles",
            }}
            state={parameterObj.profile72}
          >
            <div>
              <span>On property</span>
              <h3>72 Guests</h3>
            </div>
          </Link>
          <Link
            to={{
              pathname: "/gms/profiles",
            }}
            state={parameterObj.profile16}
          >
          <div>
            <span>Checking out today</span>
            <h3>16 Guests</h3>
          </div>
          </Link>
          <Link
            to={{
              pathname: "/gms/profiles",
            }}
            state={parameterObj.profile8}
          >
          <div>
            <span>Checking in today</span>
            <h3>8 Guests</h3>
          </div>
          </Link>
          <Link
            to={{
              pathname: "/gms/profiles",
            }}
            state={parameterObj.profile24}
          >
          <div>
            <span>Checking in this week</span>
            <h3>24 Guests</h3>
          </div>
          </Link>
        </section>
        <section>
        <Link
            to={{
              pathname: "/gms/profiles",
            }}
            state={parameterObj.profile72}
          >
            <div>
              <span className="fa fa-address-book-o"></span>
              <h4>Profiles</h4>
            </div>
          </Link>
          <Link to="email-center">
            <div>
              <span className="fa fa-envelope-o"></span>
              <h4>Email Centre</h4>
            </div>
          </Link>
          <Link to="reports">
            <div>
              <span className="fa fa-file-text-o"></span>
              <h4>Reports</h4>
            </div>
          </Link>
          <Link to="form-center">
            <div>
              <span className="fa fa-align-left"></span>
              <h4>Form Centre</h4>
            </div>
          </Link>
          <Link to="workflow">
            <div>
              <span className="fa fa-address-book-o"></span>
              <h4>Workflow</h4>
            </div>
          </Link>
          <Link to="learning-center">
            <div>
              <span className="fa fa-graduation-cap"></span>
              <h4>Learning Centre</h4>
            </div>
          </Link>
        </section>
      </section>
    </>
  );
};

export default HomePage;
