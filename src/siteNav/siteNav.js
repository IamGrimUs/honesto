import * as React from "react";
import { Link } from "react-router-dom";
import { User } from "../_shared/user";
import { Bug } from "../_shared/bug";
import { useUserInfo } from "../_shared/context/useUserInfo";

import "./siteNav.styles.css";

export const SiteNav = () => {
  const { currentUser } = useUserInfo();

  const feedbackNeeded = {
    outstanding: 2,
  };
  const feedbackRecieved = {
    recieved: 8,
  };

  if (!currentUser) {
    return null;
  }

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
            <Link to="/feedback-landing">Share Feedback</Link>
          </li>
          <li>
            {feedbackRecieved ? <Bug text={feedbackRecieved.recieved} /> : null}
            <Link to="/404">My Feedback</Link>
          </li>
          <li>
            <Link to="/404">Team Feedback</Link>
          </li>
          <li>
            <Link to="/404">Teams</Link>
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
