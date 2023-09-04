import React from "react";
import { Link, Outlet } from "react-router-dom";
import { useLocation } from "react-router-dom";


const GmsTemplate = ({onLogout, resetState}) => {

  
  let url = "";
  const {pathname} = useLocation();
  

  const tabNav = [
    {
      "id": 1,
      "title": "",
      "url": "url1",
      "icon": "fa fa-bar-chart"
    },
    {
      "id": 2,
      "title": "",
      "url": "url2",
      "icon": "fa fa-circle-thin"
    },
    {
      "id": 3,
      "title": "Pending Emails",
      "url": "bookings",
      "icon": "fa fa-envelope-o"
    },
    {
      "id": 4,
      "title": "Surveys",
      "url": "surveys",
      "icon": "fa fa-folder-open-o"
    },
    {
      "id": 5,
      "title": "",
      "url": "url3",
      "icon": "fa fa-file-o"
    },
    {
      "id": 6,
      "title": "",
      "url": "url4",
      "icon": "fa fa-comment-o"
    },
    {
      "id": 7,
      "title": "",
      "url": "url5",
      "icon": "fa fa-comment-o"
    },
    {
      "id": 8,
      "title": "",
      "url": "url6",
      "icon": "fa fa-bar-chart"
    },
    {
      "id": 9,
      "title": "",
      "url": "url7",
      "icon": "fa fa-bar-chart"
    },
    {
      "id": 10,
      "title": "",
      "url": "url8",
      "icon": "fa fa-line-chart"
    },
  ]


  return (
      <>
      <header className="header">
        <div style={{alignItems: "end"}}>
          <Link to="/gms"><img 
            src={process.env.PUBLIC_URL + "/img/Amadeus-logo-wh.png"}
            alt="amadeus-hospitality-logo"
          /></Link>
          <span>Guest Management Solutions</span>
        </div>
        <div>
          <span onClick={resetState} style={{cursor: "pointer"}}>Amadeus</span>
          <i className="fa fa-angle-down fa-lg"></i>
          <a href={url} onClick={onLogout}>John Dow</a>
        </div>
      </header>

      <main className="container">
        <aside className="side-menu">
          <ul>
          {tabNav.map((link) => (
            <li key={link.id} className={(pathname === '/gms/'+link.url) ? 'active blue' : ''}>
              <Link to={link.url}>
                <span className={link.icon} title={link.title}></span>
                <span className="link-text">
                    {link.title}</span>
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
