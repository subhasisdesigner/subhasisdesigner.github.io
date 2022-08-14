import React from 'react';
import { Switch, Route } from "react-router-loading";
import LandingPage from '../view/pages/Introduction';
import WorkProfile from "../view/pages/WorkProfile"
import SkillsKnowledge from "../view/pages/SkillsKnowledge"
import Education from "../view/pages/Education"
import Qualifications from "../view/pages/Qualifications"
import Contact from "../view/pages/Contact"
import Error from '../Error';

export default function ContentRoute() {
  return (
    <Switch>
      <Route exact path="/update" component={LandingPage} loading />
      <Route path="/update/skills-knowledge" component={SkillsKnowledge} loading />
      <Route path="/update/work-profile" component={WorkProfile} loading />
      <Route path="/update/education" component={Education} loading />
      <Route path="/update/qualifications" component={Qualifications} loading />
      <Route path="/update/contact" component={Contact} loading />
      <Route component={Error} />
    </Switch>
  );
}