import React from "react";
import { Redirect } from "react-router-dom";
import Button from "../Dependencies/Button";

export default class Dashboard extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      isRedirect: false,
    };
  }
  onHandleLogout = () => {
    localStorage.clear();
    this.setState({ isRedirect: true });
  };

  render() {
    let roleAct = localStorage.getItem("roleAction");
    let visibleRole = [];
    if (roleAct) {
      visibleRole = JSON.parse(roleAct);
    }

    if (this.state.isRedirect) {
      return <Redirect to="/" />;
    }

    return (
      <div className="dashboardWrapper">
        <h1>Dashboard</h1>
        <div className="db__nav">
          <Button
            type="Primary"
            text="Create"
            roleAction="Create"
            visibleByRole={visibleRole}
            darkMode="light"
            style={{ margin: "0 5px" }}
          />
          <Button
            type="Primary"
            text="Update"
            roleAction="Update"
            visibleByRole={visibleRole}
            darkMode="light"
            style={{ margin: "0 5px" }}
          />
          <Button
            type="Primary"
            text="Delete"
            roleAction="Delete"
            visibleByRole={visibleRole}
            darkMode="light"
            style={{ margin: "0 5px" }}
          />
          <Button
            text="Logout"
            darkMode="light"
            style={{ margin: "0 5px" }}
            onClick={this.onHandleLogout}
          />
        </div>
      </div>
    );
  }
}
