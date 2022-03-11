import React from "react";
import { Link } from "react-router-dom";

export default class Test2 extends React.Component<any, any> {
  render() {
    return (
      <div className="test2Wrapper">
        <h1>Test2</h1>
        <Link to={"/test"}>Back</Link>
      </div>
    );
  }
}
