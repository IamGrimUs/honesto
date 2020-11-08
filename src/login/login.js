import * as React from 'react'
import { Button } from '../_shared/button'
import './login.styles.css'

export const Login = () => {
  const [userName, setUserName] = React.useState('');

  const handleInputChange = (e) => {
    setUserName(e.target.value)
    console.log(userName)
  }

  const loginUser = () => {
    console.log("logging in the user now");
  };

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
            onChange={(e) => {
              handleInputChange(e);
            }}
          />
        </form>
        <Button text="Login with Google" buttonType="primary" loginUser={loginUser} />
      </div>
    </div>
  );
}