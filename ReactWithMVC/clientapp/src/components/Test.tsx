import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Test1 from "./Test/Test1";
import Test2 from "./Test/Test2";

export default class Test extends React.Component<any, any> {
  render() {
    return (
      <div className="userWrapper">
        <Switch>
          <Route path={"/test1"} component={Test1} exact />
          <Route path={"/test2"} component={Test2} exact />
        </Switch>
      </div>
    );
  }
}

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Test />
    </Router>
  </React.StrictMode>,
  document.getElementById("root-test")
);
