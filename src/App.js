import React from "react";
import { Route, Switch } from "react-router-dom";
import Assignments from "./components/Assignments";
import Choices from "./components/Choices";
import Classnotes from "./components/Classnotes";
import Login from "./components/Login";
import ADE_PANEL from "./components/panels/ADE_PANEL";
import "./App.css";
import ADE_TASK_PANEL from "./components/panels/ADE_TASK_PANEL";
import CO_PANEL from "./components/panels/CO_PANEL";
import CO_TASK_PANEL from "./components/panels/CO_TASK_PANEL";
import DSA_PANEL from "./components/panels/DSA_PANEL";
import DSA_TASK_PANEL from "./components/panels/DSA_TASK_PANEL";
import MATH_PANEL from "./components/panels/MATH_PANEL";
import MATH_TASK_PANEL from "./components/panels/MATH_TASK_PANEL";
import EFE_PANEL from "./components/panels/EFE_PANEL";
import EFE_TASK_PANEL from "./components/panels/EFE_TASK_PANEL";
import ITW_PANEL from "./components/panels/ITW_PANEL";
import ITW_TASK_PANEL from "./components/panels/ITW_TASK_PANEL";
const App = () => {
  return (
    <>
      <Switch>
        <Route exact path="/">
          <Login />
        </Route>

        <Route path="/choices">
          <Choices />
        </Route>

        <Route path="/classnotes">
          <Classnotes />
        </Route>

        <Route path="/assignments">
          <Assignments />
        </Route>

        <Route path="/ADE_PANEL">
          <ADE_PANEL />
        </Route>

        <Route path="/ADE_TASK_PANEL">
          <ADE_TASK_PANEL />
        </Route>

        <Route path="/CO_PANEL">
          <CO_PANEL />
        </Route>

        <Route path="/CO_TASK_PANEL">
          <CO_TASK_PANEL />
        </Route>

        <Route path="/DSA_PANEL">
          <DSA_PANEL />
        </Route>

        <Route path="/DSA_TASK_PANEL">
          <DSA_TASK_PANEL />
        </Route>

        <Route path="/MATH_PANEL">
          <MATH_PANEL />
        </Route>

        <Route path="/MATH_TASK_PANEL">
          <MATH_TASK_PANEL />
        </Route>

        <Route path="/EFE_PANEL">
          <EFE_PANEL />
        </Route>

        <Route path="/EFE_TASK_PANEL">
          <EFE_TASK_PANEL />
        </Route>

        <Route path="/ITW_PANEL">
          <ITW_PANEL />
        </Route>

        <Route path="/ITW_TASK_PANEL">
          <ITW_TASK_PANEL />
        </Route>
      </Switch>
    </>
  );
};

export default App;
