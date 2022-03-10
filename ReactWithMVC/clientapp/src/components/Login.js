"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = __importDefault(require("react"));
const react_router_dom_1 = require("react-router-dom");
class Login extends react_1.default.Component {
    constructor(props) {
        super(props);
        this._onHandleSaveLoginInfoToLocalStorage = () => {
            if (this.state.user === "user" && this.state.password === "123") {
                localStorage.setItem("roleAction", JSON.stringify(["Create", "Update"]));
                return localStorage.setItem("role", this.state.user);
            }
            if (this.state.user === "admin" && this.state.password === "123") {
                localStorage.setItem("roleAction", JSON.stringify(["Create", "Update", "Delete"]));
                return localStorage.setItem("role", this.state.user);
            }
            return localStorage.setItem("role", "guess");
        };
        this._onHandleLoginToServer = () => __awaiter(this, void 0, void 0, function* () {
            console.log("submit");
            console.log(this.state);
            yield this._onHandleSaveLoginInfoToLocalStorage();
            this.setState({ isRedirect: true });
            // await axios
            //   .post("/login", this.state)
            //   .then((res) => {
            //     console.log(res);
            //   })
            //   .catch((err) => {
            //     console.log(err);
            //   });
        });
        this.onHandleInput = (e, type) => {
            let { value } = e.target;
            let crtState = Object.assign({}, this.state);
            crtState[type] = value ? value : "";
            this.setState(crtState);
        };
        this.onHandleClear = () => {
            this.setState({ user: "", password: "" });
        };
        this.onHandleSubmit = () => {
            if (this.state.user.trim() !== "" && this.state.password.trim() !== "") {
                this._onHandleLoginToServer();
            }
        };
        this.state = {
            user: "",
            password: "",
            isRedirect: false,
        };
    }
    render() {
        if (this.state.isRedirect) {
            return jsx_runtime_1.jsx(react_router_dom_1.Redirect, { to: "/dashboard" }, void 0);
        }
        return (jsx_runtime_1.jsxs("form", Object.assign({ className: "loginWrapper" }, { children: [jsx_runtime_1.jsx("h3", { children: "\u0110\u0103ng nh\u1EADp" }, void 0), jsx_runtime_1.jsx("input", { type: "text", placeholder: "T\u00EAn \u0111\u0103ng nh\u1EADp", onChange: (e) => this.onHandleInput(e, "user"), value: this.state.user }, void 0), jsx_runtime_1.jsx("input", { type: "password", placeholder: "M\u1EADt kh\u1EA9u", onChange: (e) => this.onHandleInput(e, "password"), value: this.state.password }, void 0), jsx_runtime_1.jsxs("div", Object.assign({ className: "actionWrapper" }, { children: [jsx_runtime_1.jsx("button", Object.assign({ onClick: this.onHandleSubmit, type: "submit" }, { children: "\u0110\u0103ng nh\u1EADp" }), void 0), jsx_runtime_1.jsx("button", Object.assign({ onClick: this.onHandleClear }, { children: "X\u00F3a tr\u1EAFng" }), void 0)] }), void 0)] }), void 0));
    }
}
exports.default = Login;
//# sourceMappingURL=Login.js.map