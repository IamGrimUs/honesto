import * as React from "react";
import { Link, useParams } from "react-router-dom";
import { Title } from "../_shared/title";
import { Button } from "../_shared/button";
import { useQuestionList } from "../_shared/context/useQuestions";
import { useUserInfo } from "../_shared/context/useUserInfo";
import LinearProgress from "@material-ui/core/LinearProgress";
// import StarIcon from "@material-ui/icons/Star";
import { makeStyles } from "@material-ui/core/styles";
import { questionsAPI } from "../api/honesto";
import Dialog from "@material-ui/core/Dialog";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import CircularProgress from "@material-ui/core/CircularProgress";
import FlagIcon from "@material-ui/icons/Flag";

import "./giveFeedbackQuestions.styles.css";

const { useState, useEffect } = React;
const useStyles = makeStyles({
  root: {
    width: "100%",
  },
});

export const GiveFeedbackQuestions = () => {
  const { id } = useParams();
  const classes = useStyles();
  const { userList } = useUserInfo();
  const { questionList, setQuestionList } = useQuestionList();
  const [selectedValue, setSelectedValue] = useState(0);
  const [userRecievingFeedback, setUserRecievingFeedback] = useState({});
  const [showError, setShowError] = useState(false);
  const [progress, setProgress] = useState(0);
  const [counter, setCounter] = useState(0);
  const { firstName, lastName, avatar } = userRecievingFeedback;

  const getQuestions = async () => {
    try {
      const response = await questionsAPI.get("");
      setQuestionList(response.data);
    } catch (error) {
      setShowError(true);
    }
  };

  useEffect(() => {
    userList.forEach((user) => {
      if (user.id === id) {
        setUserRecievingFeedback(user);
      }
    });
    console.log("user recieving", userRecievingFeedback);
  });

  useEffect(() => {
    getQuestions();
  }, [showError]);

  useEffect(() => {
    setProgress((prevProgress) => {
      if (counter === 0) {
        return (prevProgress = 0);
      } else if (counter * 12.5 < prevProgress) {
        return prevProgress - 12.5;
      } else {
        return prevProgress + 12.5;
      }
    });
  }, [counter]);

  const renderScale = (num) => {
    console.log("num", num);
    const numArray = [];
    for (let i = 0; i < 10; i++) {
      numArray.push(i);
    }
    return numArray.map((number, index) => {
      if (num >= index) {
        return <div className="scale-square scale-square_selected" key={index} onClick={() => setSelectedValue(index)}></div>;
      }
      return <div className="scale-square" key={index} onClick={() => setSelectedValue(index)}></div>;
    });
  };

  const renderQuestion = () => {
    const type = questionList[counter]["type"];
    const label = questionList[counter]["label"];

    if (type === "multipleChoice") {
      const optionZero = questionList[counter]["options"][0]["label"];
      const optionOne = questionList[counter]["options"][1]["label"];
      const optionTwo = questionList[counter]["options"][2]["label"];
      return (
        <div>
          <div className="question-option" onClick={() => setSelectedValue(optionZero)}>
            {optionZero}
          </div>
          <div className="question-option" onClick={() => setSelectedValue(optionOne)}>
            {optionOne}
          </div>
          <div className="question-option" onClick={() => setSelectedValue(optionTwo)}>
            {optionTwo}
          </div>
        </div>
      );
    }
    if (type === "text") {
      return (
        <div>
          <form>
            <textarea
              placeholder="say something..."
              className="text-area"
              value={selectedValue}
              onChange={(e) => {
                setSelectedValue(e.target.value);
              }}
            ></textarea>
          </form>
        </div>
      );
    }
    if (type === "scale") {
      return (
        <div>
          <p className="question-label">{label}</p>
          <div className="flex-row flex-row_between">{renderScale(selectedValue)}</div>
        </div>
      );
    }
  };

  const previousQuestion = () => {
    setCounter((counter) => counter - 1);
  };

  const nextQuestion = () => {
    setCounter((counter) => counter + 1);
  };

  const handleClose = () => setShowError(false);

  if (questionList.length === 0) {
    return <CircularProgress />;
  }
  return (
    <div className="content-container center">
      <div className="text-link">{counter !== 0 ? <p onClick={previousQuestion}>&lt; back</p> : null}</div>
      <div className="flex-row flex-row_between flex-row_item-center">
        <Title text={questionList[counter]["label"]} subHead={`share your feedback for ${firstName} ${lastName}`} />
        <figure className="profile-image_lg">
          <img src={avatar} alt={`${firstName} ${lastName}`} className="circle" />
        </figure>
      </div>
      <div className="card card-padding">
        <div>{renderQuestion()}</div>
        <div className="flex-row button-container">
          <div className="third text-align-left">{counter !== 0 ? <Button text="Previous" buttonType="secondary" buttonAction={previousQuestion} /> : null}</div>
          <div className="third text-align-center">{questionList[counter]["required"] ? <Button text="Skip" buttonType="secondary" buttonAction={nextQuestion} /> : null}</div>
          <div className="third text-align-right">{counter === questionList.length - 1 ? null : <Button text="Next" buttonType="secondary" buttonAction={nextQuestion} />}</div>
        </div>
        <div className={`${classes.root} progress-bar-container`}>
          <LinearProgress variant="determinate" value={progress} />
        </div>
        <div className="flex-row flex-row_between">
          <div>
            <p className="text-link">questions completed</p>
            <p className="text-link">{`${counter + 1}/${questionList.length}`}</p>
          </div>
          <div>
            <StarBorderIcon />
            <StarBorderIcon />
            <StarBorderIcon />
            <StarBorderIcon />
            <StarBorderIcon />
            <FlagIcon />
          </div>
        </div>
      </div>
      <Dialog onClose={handleClose} aria-labelledby="simple-dialog-title" open={showError}>
        <div className="card-padding">
          <p class="error-message">An Error has occured!</p>
          <div className="text-center">
            <Button buttonType="primary" text="Please Retry" buttonAction={handleClose} />
          </div>
        </div>
      </Dialog>
    </div>
  );
};
