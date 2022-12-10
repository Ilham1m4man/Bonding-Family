import React from "react";

const ArrowBackButton = ({ onClickBackHandler }) => {
  return (
    <button
      onClick={onClickBackHandler}
      type="button"
      id="back-arrow"
      className="back-arrow"
    >
      <svg
        width="22"
        height="11"
        viewBox="0 0 22 11"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M21 1.5L11.2703 9.5L1 1.5" strokeLinecap="round" />
      </svg>
    </button>
  );
};

export default ArrowBackButton;
