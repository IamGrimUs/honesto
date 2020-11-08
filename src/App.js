import * as React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Footer } from "./footer/footer";
import { SiteNav } from "./siteNav/siteNav";
import { Login } from "./login/login";
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
        </Switch>
      </BrowserRouter>
      <Footer  />
    </div>
  );
};

export default App;
