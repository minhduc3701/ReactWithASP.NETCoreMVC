import React from "react";
import { Link } from "react-router-dom";

export default class Test1 extends React.Component<any, any> {
  render() {
    return (
      <div className="test1Wrapper">
        <h1>Test1</h1>
        <Link to={"/test"}>Back</Link>
      </div>
    );
  }
}
