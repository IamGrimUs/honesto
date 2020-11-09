import * as React from "react";
import { useHistory } from "react-router-dom";
import { User } from "../_shared/user";
import { Title } from "../_shared/title";
import { FormSelect } from "../_shared/formSelect";
import { Button } from "../_shared/button.js";
import { useUserInfo } from "../_shared/context/useUserInfo";
import { useFeedback } from "../_shared/context/useFeedback";
import "./giveFeedbackLanding.styles.css";

export const GiveFeedbackLanding = () => {
  const { userList } = useUserInfo();
  const { feedbackList } = useFeedback();
  const { push } = useHistory();

  const viewSubmission = () => {
    console.log("one day you will view a submission from this function");
  };

  const provideFeedback = (id) => {
    push(`/feedback-questions/${id}`);
  };

  const renderUsers = () => {
    return userList.map((user) => {
      const doesUserHaveFeedback = feedbackList.find((feedback) => feedback.recipientId === user.id);
      if (doesUserHaveFeedback) {
        return (
          <div className="user-list-item flex-row flex-row_between" key={user.id}>
            <User user={user} />
            <Button buttonType="secondary" text="View Submission" buttonAction={() => viewSubmission(user.id)} />
          </div>
        );
      ;
      }
      return (
        <div className="user-list-item flex-row flex-row_between" key={user.id}>
          <User user={user} />
          <Button buttonType="primary" text="Fill Out" buttonAction={() => provideFeedback(user.id)} />
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
      <div className="user-list-container">{renderUsers()}</div>
    </div>
  );
};
