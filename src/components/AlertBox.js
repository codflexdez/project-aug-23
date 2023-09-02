import React from "react";

const AlerBox = ({ message, onClose, closeAlert }) => {
  return (
    <div className="alert-box" id="alert" role="alert">
      <span>&#8861;</span>
    <p>{message}</p>
    <span className="btn-close" role="button" onClick={onClose || closeAlert}>&#10005;</span>
    </div>
  );
};
export default AlerBox;
