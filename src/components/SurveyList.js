import React, { useState } from "react";
import { Link } from "react-router-dom";

const SurveyList = ({
  data,
  handleSelfCheck,
  individualCheckboxes,
  hideRow,
}) => {
  const url = "";
  const styles = {
    span: {
      fontSize: "16px",
    },
    dropdown: {
      position: "relative",
    },
    blockSz: {
      width: "20px",
    },
  };

  const [kababId, setKabab] = useState(null);

  const showKabab = (e, id) => {
    e.preventDefault();
    if (id === kababId) {
      setKabab(null);
    } else {
      setKabab(id);
    }
  };

  return (
    <>
      {data.map((item) => (
        <li
          className={`item-container ${item.isHidden ? "hidden" : ""}`}
          key={item.id}
        >
          <div>
            <input
              id={item.id}
              type="checkbox"
              className="form-check-input"
              checked={individualCheckboxes[item.id] || false}
              onChange={() => handleSelfCheck(item.id)}
            />
          </div>
          <div>
            <label htmlFor={item.id}>{item.name}</label>
            <span>{item.id}</span>
          </div>
          {/* Group cordinates related information */}
          <div className="attribute-container guest-contacts">
            <div>{item.contacts.email}</div>
            <div>{item.sentiment}</div>
          </div>
          <div>{item.score}</div>
          {/* Group check in and check out related information */}
          <div className="attribute-container state">
            <div>{item.checkIn}</div>
            <div>{item.checkOut}</div>
          </div>
          <div>{item.timestamp}</div>

          <div>
            <Link to="../survey-response" className="show-content" style={styles.blockSz}>
              <img src={process.env.PUBLIC_URL + "/img/show.png"} alt="show" />
            </Link>
            <Link to={url} className="export-content">
              <span className="fa fa-file-o" style={styles.span}></span>
            </Link>
            <Link
              to={url}
              className="delete-content"
              onClick={(e) => {
                e.preventDefault();
                hideRow(item.id);
              }}
            >
              <span
                className="fa fa-trash-o"
                alt="delete"
                aria-label="delete-content"
              ></span>
            </Link>
            <div className="dropdown" style={styles.dropdown}>
              <Link
                to={url}
                className="dropbtn onHover"
                type="button"
                id={item.id}
                onClick={(e) => showKabab(e, item.id)}
              >
                <img
                  src={process.env.PUBLIC_URL + "/img/dots.png"}
                  alt="menu-dropdown"
                  style={styles.blockSz}
                />
              </Link>
              {kababId === item.id && (
                <div
                  className="dropdown-content opDropdown"
                  data-active="false"
                  aria-label="dropdown"
                >
                  <Link to="#/needReply" onClick={(e) => showKabab(e)}>
                    Need Reply
                  </Link>
                  <Link to="#/editOptions" onClick={(e) => showKabab(e)}>
                    Print
                  </Link>
                </div>
              )}
            </div>
          </div>
        </li>
      ))}
    </>
  );
};

export default SurveyList;
