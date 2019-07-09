import React from "react";

const Switch = () => {
  return (
    <div
      className="switch center"
      style={{
        padding:"0",
        margin: "1rem 0 0 1rem",
        border: "solid 5px gray",
        height: "3.5rem",
        width:"90%",
        borderRadius: "20px",
        
      }}
    >
      <label
        style={{
          fontSize: "1.2rem"
        }}
      >
        Recommended
        <input type="checkbox" />
        <span className="lever" />
        My Watch List
      </label>
    </div>
  );
};

export default Switch;
