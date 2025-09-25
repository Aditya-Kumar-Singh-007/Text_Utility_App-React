import React from "react";

export default function Alert() {
  return (
    <div className="alert  alert-dismissible fade show myAlert" role="alert">
      <strong>Text Copied !</strong>
      <button
        type="button"
        className="btn-close"
        data-bs-dismiss="alert"
        aria-label="Close"
      ></button>
    </div>
  );
}
