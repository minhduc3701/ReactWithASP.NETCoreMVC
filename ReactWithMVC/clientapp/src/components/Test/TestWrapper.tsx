import React from "react";
import { Link } from "react-router-dom";

export default class TestWrapper extends React.Component<any, any> {
  render() {
    return (
      <div className="userWrapper">
        <h3>Component Test</h3>
        <Link to="/test1">Test1</Link>
        <Link to="/test2">Test2</Link>
      </div>
    );
  }
}
