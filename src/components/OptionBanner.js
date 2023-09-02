import React from "react";

const OptionBanner = ({ checkboxCount, deleteEntries, location }) => {

const showExport = location.pathname === "/gms/surveys";

  return (
    <>
      <div className="option-banner">
        {checkboxCount}{" "}
        {checkboxCount === 1 ? "campaign selected" : "campaigns selected"}
       
        <div>
        {showExport && <button
                
                id="exportBtn"
                type="button"
                aria-label="button-filters"
              >
                Export
              </button>}
          <button onClick={deleteEntries}>
            <i className="fa fa-trash-o"></i>Delete
          </button>
        </div>
      </div>
    </>
  );
};

export default OptionBanner;
