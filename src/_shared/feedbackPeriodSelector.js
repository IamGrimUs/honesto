import * as React from "react";
import "./feedbackPeriodSelector.styles.css";

export const FeedbackPeriodSelector = ({ text }) => {
  const date = new Date().getFullYear();

  return (
    <div className="feedback-selector-container">
      <p>{text}</p>
      <form>
        <select>
          <option>{`January ${date}`}</option>
          <option>{`Feburary ${date}`}</option>
          <option>{`March ${date}`}</option>
          <option>{`April ${date}`}</option>
          <option>{`May ${date}`}</option>
          <option>{`June ${date}`}</option>
          <option>{`July ${date}`}</option>
          <option>{`August ${date}`}</option>
          <option>{`September ${date}`}</option>
          <option>{`October ${date}`}</option>
          <option>{`November ${date}`}</option>
          <option>{`December ${date}`}</option>
        </select>
      </form>
    </div>
  );
};
