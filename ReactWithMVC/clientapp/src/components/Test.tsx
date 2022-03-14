import React from "react";
import ReactDOM from "react-dom";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  RouteProps,
} from "react-router-dom";
import { Switch } from "react-router-dom";
import { configRouteBaseOnRole } from "../common/data";
import Test1 from "./Test/Test1";
import Test2 from "./Test/Test2";
import TestWrapper from "./Test/TestWrapper";

export interface IRenderRouteHandleRoutesByRoleProps extends RouteProps {
  redirectUrl?: string;
}

export const RenderRouteHandleRoutesByRole = (
  props: IRenderRouteHandleRoutesByRoleProps
): any => {
  let accountRole = localStorage.getItem("role") || "guess";
  let idx = configRouteBaseOnRole.findIndex((r) => r.role === accountRole);
  if (
    accountRole &&
    (configRouteBaseOnRole[idx].accessPage.some((p) => p === props.path) ||
      props.path === "/")
  ) {
    return <Route {...props} />;
  } else {
    console.log("redirect");
    let url = props.redirectUrl ? props.redirectUrl : "/";
    return <Redirect to={url} />;
  }
};

export default class Test extends React.Component<any, any> {
  render() {
    return (
      <div className="userWrapper" style={{ padding: "20px 50px" }}>
        <Switch>
          <Route path={"/test"} component={TestWrapper} exact />
          <RenderRouteHandleRoutesByRole
            path={"/test1"}
            component={Test1}
            exact
            redirectUrl="/test"
          />
          <RenderRouteHandleRoutesByRole
            path={"/test2"}
            component={Test2}
            exact
            redirectUrl="/test"
          />
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
  document.getElementById("root")
);
