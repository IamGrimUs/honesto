import * as React from "react";
import { Link } from "react-router-dom";

import "./user.styles.css";

export const User = ({ user, logout }) => {
  const { firstName, lastName, avatar } = user;
  return (
    <div className="user-container flex-row">
      <figure className="profile-image">
        <img src={avatar} alt={`${firstName} ${lastName}`} className="circle" />
      </figure>
      <div>
        <p>{`${firstName} ${lastName}`}</p>
        {logout ? (
          <Link to="/" className="logout">
            LOGOUT
          </Link>
        ) : null}
      </div>
    </div>
  );
};
