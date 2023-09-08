import React from "react";
import { Link, Outlet } from "react-router-dom";
import { useLocation } from "react-router-dom";

const GmsTemplate = ({ onLogout, resetState }) => {
  let url = "";
  const { pathname } = useLocation();

  const tabNav = [
    {
      id: 1,
      title: "",
      url: "url1",
      icon: "fa fa-bar-chart",
      state: "",
    },
    {
      id: 2,
      title: "",
      url: "url2",
      icon: "fa fa-circle-thin",
      state: "",
    },
    {
      id: 3,
      title: "Pending Emails",
      url: "bookings",
      icon: "fa fa-envelope-o",
      state: "",
    },
    {
      id: 4,
      title: "Survey Results",
      url: "surveys",
      icon: "fa fa-folder-open-o",
      state: "Surveys",
    },
    {
      id: 5,
      title: "Pending Upgrades",
      url: "upgrade",
      icon: "fa fa-file-o",
      state: "Upgrades",
    },
    {
      id: 6,
      title: "",
      url: "url4",
      icon: "fa fa-comment-o",
      state: "",
    },
    {
      id: 7,
      title: "",
      url: "url5",
      icon: "fa fa-comment-o",
      state: "",
    },
    {
      id: 8,
      title: "",
      url: "url6",
      icon: "fa fa-bar-chart",
      state: "",
    },
    {
      id: 9,
      title: "",
      url: "url7",
      icon: "fa fa-bar-chart",
      state: "",
    },
    {
      id: 10,
      title: "",
      url: "url8",
      icon: "fa fa-line-chart",
      state: "",
    },
  ];
  // to={link.url}>

  return (
    <>
      <header className="header">
        <div style={{ alignItems: "end" }}>
          <Link to="/gms">
            <img
              src={process.env.PUBLIC_URL + "/img/Amadeus-logo-wh.png"}
              alt="amadeus-hospitality-logo"
            />
          </Link>
          <span>Guest Management Solutions</span>
        </div>
        <div>
          <span onClick={resetState} style={{ cursor: "pointer" }}>
            Amadeus
          </span>
          <i className="fa fa-angle-down fa-lg"></i>
          <a href={url} onClick={onLogout}>
            John Doe
          </a>
        </div>
      </header>

      <main className="container">
        <aside className="side-menu">
          <ul>
            {tabNav.map((link) => (
              <li
                key={link.id}
                className={pathname === "/gms/" + link.url ? "active blue" : ""}
              >
                <Link
                  to={{
                    pathname: link.url,
                  }}
                  state={link.state}
                >
                  <span className={link.icon} title={link.title}></span>
                  <span className="link-text">{link.title}</span>
                </Link>
              </li>
            ))}
          </ul>
        </aside>
        {/* the outlet is used to render the matching routes inside main tag */}
        <Outlet />
      </main>
    </>
  );
};

export default GmsTemplate;
