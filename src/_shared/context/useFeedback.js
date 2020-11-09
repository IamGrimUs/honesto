import * as React from "react";

import createPersistedState from "use-persisted-state";
const useFeedbackState = createPersistedState("feedbackList");

const { createContext, useContext } = React;

const DEFAULT_FEEDBACK_CONTEXT = {
  feedbackList: [],
  addUserFeedback: () => {},
  getFeedbackByRecipient: () => {},
  getFeedbackByReporter: () => {},
};

/*
  // feedback
  [{
    reporterId: string;
    recipientId: string;
    answers: [
      {
        questionId: "questionId1"
        value: "You did great!"
      },{
        questionId: "questionId2"
        value: "5"

      }
    ]
  }]
*/

const FeedbackContext = createContext(DEFAULT_FEEDBACK_CONTEXT);

export const useFeedback = () => {
  return useContext(FeedbackContext);
};

export const FeedbackContextProvider = ({ children }) => {
  const [feedbackList, setFeedbackList] = useFeedbackState([]);

  const addUserFeedback = (newUserFeedback) => {
    setFeedbackList([...feedbackList, newUserFeedback]);
  };

  const getFeedbackByRecipient = (id) => {
    if (!feedbackList) {
      return [];
    }
    return feedbackList.filter((feedback) => feedback.recipientId === id);
  };

  const getFeedbackByReporter = (id) => {
    if (!feedbackList) {
      return [];
    }
    return feedbackList.filter((feedback) => feedback.reporterId === id);
  };

  return (
    <FeedbackContext.Provider
      value={{
        feedbackList,
        addUserFeedback,
        getFeedbackByRecipient,
        getFeedbackByReporter,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  );
};
