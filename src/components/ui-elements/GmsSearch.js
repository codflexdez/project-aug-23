import React from "react";
import { Link } from "react-router-dom";

const GmsSearch = ({ onActive, selProfile }) => {
  const profiles = [
    {
      id: 1,
      url: "/allProfiles",
      name: "All Profiles",
    },
    {
      id: 2,
      url: "/guestProperty",
      name: "Guest on Property",
    },
    {
      id: 3,
      url: "/reports",
      name: "Reports",
    },
    {
      id: 4,
      url: "/emailCampaign",
      name: "Email Campaign",
    },
    {
      id: 5,
      url: "/surveys",
      name: "Surveys",
    },
    {
      id: 6,
      url: "/surveyResult",
      name: "Survey Result",
    },
  ];
  const initialProfile = profiles.length > 0 ? profiles[0].name : null;
  const selProfilesObj = profiles.find((profile) => profile.id === selProfile);
  return (
    <>
      <aside>
        <span>
          Searching: <span className="profile-name">{selProfilesObj ? selProfilesObj.name : initialProfile}</span>
        </span>
        <i className="fa fa-caret-down" aria-label="dropdown"></i>
        <div id="pofiles" className="profiles-dropdown" aria-label="dropdown">
          {profiles.map((profile) => (
            <Link
              to={profile.url}
              key={profile.id}
              onClick={(e) => onActive(e, profile.id)}
              className={profile.id === selProfile ? "txt-active selected" : ""}
            >
              {profile.name}
            </Link>
          ))}
        </div>
      </aside>
    </>
  );
};

export default GmsSearch;
