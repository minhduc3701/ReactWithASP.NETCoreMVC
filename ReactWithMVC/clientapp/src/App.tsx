import React from "react";
import "./App.css";
import Login from "./components/Login";
import Admin from "./components/Admin";
import Dashboard from "./components/Dashboard";
import User from "./components/User";
import { Redirect, Route, RouteProps, Switch } from "react-router-dom";
import { configRouteBaseOnRole } from "./common/data";
import Test1 from "./components/Test/Test1";
import Test2 from "./components/Test/Test2";

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

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path={"/"} component={Login} exact />
        <RenderRouteHandleRoutesByRole
          path={"/admin"}
          component={Admin}
          exact
        />
        <RenderRouteHandleRoutesByRole
          path={"/dashboard"}
          component={Dashboard}
          exact
        />
        <RenderRouteHandleRoutesByRole path={"/user"} component={User} exact />
        <RenderRouteHandleRoutesByRole
          path={"/test1"}
          component={Test1}
          exact
        />
        <RenderRouteHandleRoutesByRole
          path={"/test2"}
          component={Test2}
          exact
        />
      </Switch>
    </div>
  );
}

export default App;
