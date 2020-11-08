import * as React from "react";
import { Title } from "./title";
import { Button } from "./button";

export const MissingPage = () => {
  return (
    <div className="content-container center card">
      <div className="card-padding">
        <p>404</p>
        <Title text="Sorry! The page you are looking for cannot&nbsp;be&nbsp;found." />
        <Button buttonType="primary" text="Back to Share Feedback" />
      </div>
    </div>
  );
};
