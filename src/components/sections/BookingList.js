import React from "react";
import { Link } from "react-router-dom";

const BookingList = ({
  data,
  handleSelfCheck,
  individualCheckboxes,
  onOpen,
  hideRow,
  location,
  guestStatus
}) => {
  const url = "";
  const upgradesPage = location.pathname === "/gms/upgrade";
  const styles = {
    blockSz: {
      width: "20px",
    },
    btn: {
      backgroundColor: "transparent",
      border: "0",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      width: "24px",
      height: "24px",
      fontSize: "18px",
      color: "gray",
      transition: "color 0.35s",
      cursor:"pointer"
    },
    isHidden: {
      display: "none"
    }
  };

  return (
    <>
      {data.map((item) => (
        <li
          className={
            !upgradesPage
              ? `item-container ${item.isHidden ? "hidden" : ""}`
              : `item-container update-container`
          }
          key={item.id}
          style={
            individualCheckboxes[item.id]
              ? { backgroundColor: "var(--bg-color_accent)" }
              : {}
          }
        >
          {!upgradesPage && (
            <div>
              <input
                id={item.id}
                type="checkbox"
                className="form-check-input"
                checked={individualCheckboxes[item.id] || false}
                onChange={() => handleSelfCheck(item.id)}
              />
            </div>
          )}
          <div>
            <label htmlFor={item.id}>{item.name}</label>
            <span>{item.id}</span>
          </div>
          {/* Group cordinates related information */}
          {upgradesPage ? (
            <>
              <div className="attribute-container guest-contacts">
                <div>{item.status}</div>
                <div>{item.checkOut}</div>
              </div>

              <div>{item.checkIn}</div>
            </>
          ) : (
            <>
              <div className="attribute-container guest-contacts">
                <div>{item.contacts.email}</div>
                <div>{item.contacts.phone}</div>
              </div>
              <div>{item.confirmation}</div>
            </>
          )}
          {/* Group check in and check out related information */}
          {!upgradesPage ? (
            <>
              <div className="attribute-container state">
                <div>{item.checkIn}</div>
                <div>{item.checkOut}</div>
              </div>
              <div>{item.timestamp}</div>
            </>
          ) : (
            <>
              <div className="attribute-container state">
                <div>{item.los}</div>
                <div>{item.toRoom}</div>
              </div>
              <div>{item.previousR}</div>

              <div>{item.extraR}</div>
              <div>
                <div>{item.historyR}</div>
                <span>{item.nbStays}</span>
              </div>
            </>
          )}
          {!upgradesPage ? (<div>
          
            
              
                <Link to={url} className="open-info" style={styles.blockSz}>
                  <img
                    src={process.env.PUBLIC_URL + "/img/info.png"}
                    alt="info"
                    onClick={onOpen}
                  />
                </Link>
                <Link
                  to="../template"
                  className="show-content"
                  style={styles.blockSz}
                >
                  <img
                    src={process.env.PUBLIC_URL + "/img/show.png"}
                    alt="show"
                  />
                </Link>
                <Link
                  to={url}
                  className="delete-content"
                  onClick={(e) => {
                    e.preventDefault();
                    hideRow(item.id);
                  }}
                >
                  <span className="fa fa-trash-o" alt="delete"></span>
                </Link>
                </div>
            ) : (
              <div style={item.status === "Close" ? styles.isHidden : {}} >
                <button onClick={()=>guestStatus(item.id, "Close")} className="isHover" aria-label="approve" style={styles.btn}>
                 &#10003;
                </button>
                <button onClick={()=>guestStatus(item.id, "Close")} className="isHover" aria-label="reject" style={styles.btn}>
                  &#x2715;
                </button>
              </div>
            )}
        </li>
      ))}
    </>
  );
};

export default BookingList;
