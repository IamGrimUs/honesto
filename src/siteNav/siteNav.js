import * as React from "react";
import { Link } from "react-router-dom";
import { User } from "../_shared/user";
import { Bug } from "../_shared/bug";

import "./siteNav.styles.css";

export const SiteNav = () => {
  const currentUser = {
    name: "Kim Trantow",
    image: "https://s3.amazonaws.com/uifaces/faces/twitter/rdsaunders/128.jpg",
  };
  const feedbackNeeded = {
    outstanding: 2,
  };
  const feedbackRecieved = {
    recieved: 8,
  };

  return (
    <div className="site-navigation">
      <div className="container center flex-row flex-row_between">
        <div className="logo-container">
          <Link to="/">
            <span className="logo-text">Honesto</span>
          </Link>
        </div>
        <ul className="site-links-container">
          <li>
            {feedbackNeeded ? <Bug text={feedbackNeeded.outstanding} /> : null}
            <Link to="/share-feedback">Share Feedback</Link>
          </li>
          <li>
            {feedbackRecieved ? <Bug text={feedbackRecieved.recieved} /> : null}
            <Link to="">My Feedback</Link>
          </li>
          <li>
            <Link to="/">Team Feedback</Link>
          </li>
          <li>
            <Link to="/">Teams</Link>
          </li>
        </ul>
        <div className="sub-grid flex-row flex-row_between">
          <div className="feedback-cycle-container text-align-right">
            <p>Next Feedback Cycle:</p>
            <p>
              <span className="month">December 2020</span> - <span className="days-until-review">22 days</span>
            </p>
          </div>
          <div className="divider">&nbsp;</div>
          <User user={currentUser} logout="true" />
        </div>
      </div>
    </div>
  );
};
