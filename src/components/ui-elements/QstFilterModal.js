import React from "react";

const QstFilterModal = ({ isOpen, onClose, location }) => {
  const upgradesPage = location.pathname === "/gms/upgrade";
  // console.log(upgradesPage);
  return (
    <>
      <section
        id="filter"
        className={`modal ${isOpen ? "" : "hidden"}`}
        aria-label="filters"
      >
        <img
          src={process.env.PUBLIC_URL + "/img/close.png"}
          className="btn-close"
          alt="close-button"
          aria-label="close-button"
          role="button"
          onClick={onClose}
        />
        <header className="modal-filter-header">
          <h3>Filters</h3>
          {/* <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. In qui
            aliquam mollitia vero eum.
          </p> */}
        </header>
        <section>
          <div>
            <h4>Last Name</h4>
            <div>
              <span>Last Name</span>
            </div>
          </div>
          <div>
            <h4>Reservation #</h4>
            <div>
              <span>Reservation #</span>
            </div>
          </div>
          <div>
            <h4>Email</h4>
            <div>
              <span>Email</span>
            </div>
          </div>
          <div>
            <h4>Keywords</h4>
            <div>
              <span>Keywords</span>
            </div>
          </div>
          {!upgradesPage && (<div>
            <h4>Room #</h4>
            <div>
              <span>All</span>
            </div>
          </div>)}
          {upgradesPage && (<div>
            <h4>Status</h4>
            <div className="custom-select">
              <select name="status" id="status">
                <option value="#">All</option>
                <option value="#">Open</option>
                <option value="#">Close</option>
                <option value="#">Pending</option>
                
              </select>
              <i className="fa fa-caret-down fa-lg" aria-label="dropdown"></i>
            </div>
          </div>)}
          
          <div>
            <h4>Date Range</h4>
            <div className="custom-select">
              <select name="dateRange" id="dateRange">
                <option value="#">Last 1 Day</option>
                <option value="#">Last 2 Days</option>
                <option value="#">Last 7 Days</option>
                <option value="#">Last Mounth</option>
              </select>
              <i className="fa fa-caret-down fa-lg" aria-label="dropdown"></i>
            </div>
         </div>
         {!upgradesPage && (<> <div>
            <h4>Property</h4>
            <div className="custom-select">
              <select name="property" id="property">
                <option value="#">None</option>
                <option value="#"></option>
              </select>
              <i className="fa fa-caret-down fa-lg" aria-label="dropdown"></i>
            </div>
          </div>
          <div>
            <h4>Comment Status</h4>
            <div className="custom-select">
              <select name="commentStatus" id="commentStatus">
                <option value="#">None</option>
                <option value="#"></option>
              </select>
              <i className="fa fa-caret-down fa-lg" aria-label="dropdown"></i>
            </div>
          </div>
          <div>
            <h4>Assigned To</h4>
            <div className="custom-select">
              <select name="assignedUser" id="assignedUser">
                <option value="#">None</option>
                <option value="#"></option>
              </select>
              <i className="fa fa-caret-down fa-lg" aria-label="dropdown"></i>
            </div>
          </div>
          <div>
            <label>
              <input
                className="modal-check-input"
                id="response"
                type="checkbox"
              />
              Needs Response
            </label>
          </div></>)}
        </section>
        <footer>
          <button className="cancel" onClick={onClose}>
            Cancel
          </button>
          <button className="search">Search</button>
        </footer>
      </section>
    </>
  );
};

export default QstFilterModal;
