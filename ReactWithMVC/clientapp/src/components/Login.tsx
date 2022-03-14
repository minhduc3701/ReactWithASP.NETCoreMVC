import React from "react";
import { Redirect } from "react-router-dom";
import Button from "../Dependencies/Button";

export default class Login extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      user: "",
      password: "",
      isRedirect: false,
    };
  }

  private _onHandleSaveLoginInfoToLocalStorage = () => {
    if (this.state.user === "user" && this.state.password === "123") {
      localStorage.setItem("roleAction", JSON.stringify(["Create", "Update"]));
      return localStorage.setItem("role", this.state.user);
    }
    if (this.state.user === "admin" && this.state.password === "123") {
      localStorage.setItem(
        "roleAction",
        JSON.stringify(["Create", "Update", "Delete"])
      );
      return localStorage.setItem("role", this.state.user);
    }
    return localStorage.setItem("role", "guess");
  };

  private _onHandleLoginToServer = async () => {
    console.log("submit");
    console.log(this.state);
    await this._onHandleSaveLoginInfoToLocalStorage();
    this.setState({ isRedirect: true });
    // await axios
    //   .post("/login", this.state)
    //   .then((res) => {
    //     console.log(res);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
  };
  onHandleInput = (e: any, type: string) => {
    let { value } = e.target;
    let crtState = { ...this.state };
    crtState[type] = value ? value : "";
    this.setState(crtState);
  };

  onHandleClear = () => {
    this.setState({ user: "", password: "" });
  };

  onHandleSubmit = () => {
    if (this.state.user.trim() !== "" && this.state.password.trim() !== "") {
      this._onHandleLoginToServer();
    }
  };

  render() {
    if (this.state.isRedirect) {
      return <Redirect to="/dashboard" />;
    }
    return (
      <form className="loginWrapper">
        <h3 style={{ textTransform: "uppercase" }}>Đăng nhập</h3>
        <input
          type="text"
          placeholder="Tên đăng nhập"
          onChange={(e) => this.onHandleInput(e, "user")}
          value={this.state.user}
          className="frm__input"
        />
        <input
          type="password"
          placeholder="Mật khẩu"
          onChange={(e) => this.onHandleInput(e, "password")}
          value={this.state.password}
          className="frm__input"
        />
        <div className="actionWrapper">
          <Button
            type="Primary"
            text="Đăng nhập"
            darkMode="light"
            style={{ margin: "0 5px" }}
            onClick={this.onHandleSubmit}
          />
          <Button
            text="Xóa trắng"
            darkMode="light"
            style={{ margin: "0 5px" }}
            onClick={this.onHandleClear}
          />
        </div>
      </form>
    );
  }
}
