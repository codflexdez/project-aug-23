import React from "react";
import { Link } from "react-router-dom";

const BookingList = ({ data, handleSelfCheck, individualCheckboxes, onOpen, hideRow }) => {
  

  const url = "";



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
            <a href={url} className="open-info">
              <img src={process.env.PUBLIC_URL + "/img/info.png"} alt="info" onClick={onOpen}/>
            </a>
            <Link to="../template" className="show-content">
              <img src={process.env.PUBLIC_URL + "/img/show.png"} alt="show" />
            </Link>
            <a href={url} className="delete-content" onClick={(e) => {
                e.preventDefault();
                hideRow(item.id);
              }}>
              <span className="fa fa-trash-o" alt="delete"></span>
            </a>
          </div>
        </li>
      ))}
    </>
  );
};

export default BookingList;
