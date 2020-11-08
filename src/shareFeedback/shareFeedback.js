import * as React from "react";
import { CurrentUser } from "../currentUser/currentUser";
import { Title } from "../_shared/title";
import { FeedbackPeriodSelector } from "../_shared/feedbackPeriodSelector";
import { Button } from "../_shared/button.js";

import "./shareFeedback.styles.css";

export const ShareFeedback = () => {
  const Users = [
    {
      name: "Kim Trantow",
      image: "https://s3.amazonaws.com/uifaces/faces/twitter/rdsaunders/128.jpg",
    },
    {
      name: "Jane Trantow",
      image: "https://s3.amazonaws.com/uifaces/faces/twitter/rdsaunders/128.jpg",
    },
    {
      name: "Sally Trantow",
      image: "https://s3.amazonaws.com/uifaces/faces/twitter/rdsaunders/128.jpg",
    },
  ];

  const renderUsers = (users) => {
    return users.map((user) => {
      return (
        <div className="user-list-item flex-row flex-row_between">
          <CurrentUser user={user} />
          <Button buttonType="secondary" text="View Submission" />
        </div>
      );
    });
  };

  return (
    <div className="container center share-feedback-container">
      <div className="flex-row flex-row_between">
        <Title text="Share Feedback" />
        <FeedbackPeriodSelector text="feedback period" />
      </div>
      <div className="user-list-container">{renderUsers(Users)}</div>
    </div>
  );
};
