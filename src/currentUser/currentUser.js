import * as React from "react";
import { Link } from "react-router-dom";

import "./currentUser.styles.css";

export const CurrentUser = ({ user, logout }) => {
  console.log("user:", user);
  const { name, image } = user;
  return (
    <div className="current-user-container flex-row">
      <figure>
        <img src={image} alt={name} />
      </figure>
      <div>
        <p>{name}</p>
        {logout ? (
          <Link to="/" className="logout">
            LOGOUT
          </Link>
        ) : null}
      </div>
    </div>
  );
};
