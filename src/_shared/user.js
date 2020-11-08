import * as React from "react";
import { Link } from "react-router-dom";

import "./user.styles.css";

export const User = ({ user, logout }) => {
  console.log("user:", user);
  const { name, image } = user;
  return (
    <div className="user-container flex-row">
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
