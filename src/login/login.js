import * as React from 'react'
import { useHistory } from "react-router-dom";
import { Button } from '../_shared/button'
import { useUserInfo } from "../_shared/context/useUserInfo";
import { usersAPI } from "../api/honesto";
import './login.styles.css'
import Dialog from "@material-ui/core/Dialog";

const { useState } = React;
export const Login = () => {
  const { push } = useHistory();
  const [showError, setShowError] = useState(false);
  const { setCurrentUser, setUserList } = useUserInfo();
  const [userName, setUserName] = useState("");

  const handleNameInputChange = (e) => {
    setUserName(e.target.value);
  };

  const loginUser = async () => {
    try {
      const response = await usersAPI.get("");
      setUserList(response.data);
      const currentUser = response.data.find((user) => {
        return user.firstName === userName;
      });
      setCurrentUser(currentUser);
      push("/feedback-landing");
    } catch (error) {
      setShowError(true);
    }
  };

  const handleClose = () => setShowError(false);

  return (
    <div className="login-background">
      <div className="center card card_login">
        <figure className="appLogo center">
          <img src="/AppIcon.png" alt="App Logo" />
        </figure>
        <h1 className="text-align-center">Honesto</h1>
        <form className="login-form center">
          <input
            type="text"
            value={userName}
            placeholder="First Name"
            onChange={(e) => {
              handleNameInputChange(e);
            }}
          />
        </form>
                <Button text="Login" buttonType="primary" buttonAction={loginUser} />
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
}