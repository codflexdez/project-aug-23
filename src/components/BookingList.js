import React from "react";
import { Link } from "react-router-dom";

const BookingList = ({ data, handleSelfCheck, individualCheckboxes, onOpen, hideRow }) => {
  

  const url = "";

  const styles = {
     blockSz: {
       width: '20px'
     }
  }

  return (
    <>
      {data.map((item) => (
        <li className={`item-container ${item.isHidden ? "hidden" : ""}`} key={item.id}>
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
            <div>{item.contacts.phone}</div>
          </div>
          <div>{item.confirmation}</div>
          {/* Group check in and check out related information */}
          <div className="attribute-container state">
            <div>{item.checkIn}</div>
            <div>{item.checkOut}</div>
          </div>
          <div>{item.timestamp}</div>
          <div>
            <Link to={url} className="open-info" style={styles.blockSz}>
              <img src={process.env.PUBLIC_URL + "/img/info.png"} alt="info" onClick={onOpen}/>
            </Link>
            <Link to="../template" className="show-content" style={styles.blockSz}>
              <img src={process.env.PUBLIC_URL + "/img/show.png"} alt="show" />
            </Link>
            <Link to={url} className="delete-content" onClick={(e) => {
                e.preventDefault();
                hideRow(item.id);
              }}>
              <span className="fa fa-trash-o" alt="delete"></span>
            </Link>
          </div>
        </li>
      ))}
    </>
  );
};

export default BookingList;
