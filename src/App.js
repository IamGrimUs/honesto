import * as React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Footer } from "./footer/footer";
import { SiteNav } from "./siteNav/siteNav";
import { Login } from "./login/login";
import { GiveFeedbackLanding } from "./giveFeedbackLanding/giveFeedbackLanding";
import { GiveFeedbackQuestions } from "./giveFeedbackQuestions/giveFeedbackQuestions";
import { MissingPage } from "./_shared/404";
import { UserContextProvider } from "./_shared/context/useUserInfo";
import { FeedbackContextProvider } from "./_shared/context/useFeedback";
import { QuestionListContextProvider } from "./_shared/context/useQuestions";
import "./App.css";

export const App = () => {
  return (
    <div className="App">
      <UserContextProvider>
        <FeedbackContextProvider>
          <QuestionListContextProvider>
            <BrowserRouter>
              <SiteNav />
              <Switch>
                <Route exact path="/">
                  <Login />
                </Route>
                <Route path="/feedback-landing">
                  <GiveFeedbackLanding />
                </Route>
                <Route path="/feedback-questions/:id">
                  <GiveFeedbackQuestions />
                </Route>
                <Route>
                  <MissingPage />
                </Route>
              </Switch>
            </BrowserRouter>
          </QuestionListContextProvider>
        </FeedbackContextProvider>
      </UserContextProvider>
      <Footer />
    </div>
  );
};

export default App;
