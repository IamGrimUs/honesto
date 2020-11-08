import * as React from "react";
import { User } from "../_shared/user";
import { Title } from "../_shared/title";
import { FormSelect } from "../_shared/formSelect";
import { Button } from "../_shared/button.js";

import "./giveFeedbackLanding.styles.css";

export const GiveFeedbackLanding = () => {
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
          <User user={user} />
          <Button buttonType="secondary" text="View Submission" />
        </div>
      );
    });
  };

  return (
    <div className="center content-container">
      <div className="flex-row flex-row_between">
        <Title text="Share Feedback" />
        <FormSelect text="feedback period" />
      </div>
      <div className="user-list-container">{renderUsers(Users)}</div>
    </div>
  );
};
