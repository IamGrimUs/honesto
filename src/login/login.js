import * as React from 'react'
import { Button } from '../_shared/button'
import './login.styles.css'

export const Login = () => {
  return (
    <div className="login-background">
      <div className="center card card_login">
        <figure className="appLogo center">
          <img src="/AppIcon.png" alt="App Logo" />
        </figure>
        <h1 className="text-align-center">Honesto</h1>
        <form className="login-form center">
          <input type="text"></input>
        </form>
        <Button text="Login with Google" buttonType="primary" />
      </div>
    </div>
  )
}