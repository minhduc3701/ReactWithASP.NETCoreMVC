import React from "react";
import "./App.css";
import Login from "./components/Login";
import Admin from "./components/Admin";
import Dashboard from "./components/Dashboard";
import User from "./components/User";
import { Redirect, Route, RouteProps, Switch } from "react-router-dom";

const configRouteBaseOnRole = [
  {
    role: "user",
    accessPage: ["/user", "/dashboard"],
  },
  {
    role: "admin",
    accessPage: ["/user", "/dashboard", "/admin"],
  },
];

function App() {
  const RenderRouteHandleRoutesByRole = (props: RouteProps): any => {
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
      return <Redirect to={"/"} />;
    }
  };
  console.log("rendered react");
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
      </Switch>
    </div>
  );
}

export default App;
