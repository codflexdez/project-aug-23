import React from "react";


const FilterModal = ({isOpen, onClose}) => {

  const styles = {
   margin: {
      marginRight: "auto",
      marginLeft: "1.325rem",
    }
  }
 
    return (
        <>
        <section id="filter" aria-label="filters" className={`modal ${isOpen ? "" : "hidden"}`}>
      <img
        src={process.env.PUBLIC_URL + "/img/close.png"}
        className="btn-close"
        alt="close"
        role="button"
        onClick={onClose}
      />
      
      <header>
        <h3>Filters</h3>
      </header>
      <section>
        <div>
          <h4>Email</h4>
          <div>
            <span>Enter Email</span>
          </div>
        </div>
        <div>
          <h4>Reservationist</h4>
          <div>
            <span>All</span><i className="fa fa-caret-down" aria-label="dropdown"></i>
          </div>
        </div>
        <div>
          <h4>Channel Code</h4>
          <div>
            <span>All</span><i className="fa fa-caret-down" aria-label="dropdown"></i>
          </div>
        </div>
        <div>
          <h4>Market Code</h4>
          <div>
            <span>All</span><i className="fa fa-caret-down" aria-label="dropdown"></i>
          </div>
        </div>
        <div>
          <h4>Block Code</h4>
          <div>
            <span>All</span><i className="fa fa-caret-down" aria-label="dropdown"></i>
          </div>
        </div>
        <div>
          <h4>Source Code</h4>
          <div>
            <span>All</span><i className="fa fa-caret-down" aria-label="dropdown"></i>
          </div>
        </div>
        <div style={styles.margin}>
          <h4>Date Range</h4>
          <div>
            <span>All</span><i className="fa fa-caret-down" aria-label="dropdown"></i>
          </div>
        </div>
      </section>
      <footer>
        <button className="cancel"  onClick={onClose}>Cancel</button>
        <button className="search">Search</button>
      </footer>
    </section>
    </>
    );
};

export default FilterModal;