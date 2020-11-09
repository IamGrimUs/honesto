import * as React from "react";

export const Title = ({ text, subHead }) => {
  return (
    <div className="title-container">
      <h1 className="title">{text}</h1>
      {subHead ? <p className="subHead">{subHead}</p> : null}
    </div>
  );
};
