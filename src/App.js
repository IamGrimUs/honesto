import * as React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Footer } from "./footer/footer";
import { SiteNav } from "./siteNav/siteNav";
import { Login } from "./login/login";
import { GiveFeedbackLanding } from "./giveFeedbackLanding/giveFeedbackLanding";
import { MissingPage } from "./_shared/404";
import "./App.css";

export const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <SiteNav />
        <Switch>
          <Route exact path="/">
            <Login />
          </Route>
          <Route path="/share-feedback">
            <GiveFeedbackLanding />
          </Route>
          <Route>
            <MissingPage />
          </Route>
        </Switch>
      </BrowserRouter>
      <Footer />
    </div>
  );
};

export default App;
