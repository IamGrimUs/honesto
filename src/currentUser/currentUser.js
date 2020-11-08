import * as React from "react";
import { Link } from "react-router-dom";

import "./currentUser.styles.css";

export const CurrentUser = (props) => {
  return (
    <div className="current-user-container flex-row">
      <figure>
        <img src={props.user.image} alt={props.user.name} />
      </figure>
      <div>
        <p>{props.user.name}</p>
        {props.logout ? (
          <Link to="/" className="logout">
            LOGOUT
          </Link>
        ) : null}
      </div>
    </div>
  );
};
