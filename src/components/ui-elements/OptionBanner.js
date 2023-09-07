import React from "react";

const OptionBanner = ({ checkboxCount, deleteEntries, location }) => {
  const showExport = location.pathname === "/gms/surveys";

  const styles = {
    button: {
      display: "flex",
      // flexDirection: "row",
      alignItems: "center",
      letterSpacing: "0.5px",
      alignSelf: "baseline"
    },
  };

  return (
    <>
      <div className="option-banner">
        {checkboxCount}{" "}
        {checkboxCount === 1 ? "campaign selected" : "campaigns selected"}
        <div>
          {showExport && (
            <button id="exportBtn" aria-label="export" style={styles.button}>
              <span
                className="fa fa-file-o"
                style={{ fontSize: "14px" }}
              ></span>
              Export
            </button>
          )}
          <button
            onClick={deleteEntries}
            aria-label="delete"
            style={styles.button}
          >
            <span className="fa fa-trash-o" style={{ fontSize: "16px" }}></span>
            Delete
          </button>
        </div>
      </div>
    </>
  );
};

export default OptionBanner;
