import * as React from "react";

const { createContext, useContext, useState } = React;

const DEFAULT_QUESTION_CONTEXT = {
  questionList: [],
  setQuestionList: () => {},
  getQuestionById: () => {},
};

const QuestionContext = createContext(DEFAULT_QUESTION_CONTEXT);

export const useQuestionList = () => {
  return useContext(QuestionContext);
};

export const QuestionListContextProvider = ({ children }) => {
  const [questionList, setQuestionList] = useState([]);

  const getQuestionById = (id) => {
    return questionList.find((question) => question.id === id);
  };

  return <QuestionContext.Provider value={{ questionList, setQuestionList, getQuestionById }}>{children}</QuestionContext.Provider>;
};
