"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = __importDefault(require("react"));
const react_router_dom_1 = require("react-router-dom");
const Button_1 = __importDefault(require("../Dependencies/Button"));
class Dashboard extends react_1.default.Component {
    constructor(props) {
        super(props);
        this.onHandleLogout = () => {
            localStorage.clear();
            this.setState({ isRedirect: true });
        };
        this.state = {
            isRedirect: false,
        };
    }
    render() {
        let roleAct = localStorage.getItem("roleAction");
        let visibleRole = [];
        if (roleAct) {
            visibleRole = JSON.parse(roleAct);
        }
        if (this.state.isRedirect) {
            return jsx_runtime_1.jsx(react_router_dom_1.Redirect, { to: "/" }, void 0);
        }
        return (jsx_runtime_1.jsxs("div", Object.assign({ className: "dashboardWrapper" }, { children: [jsx_runtime_1.jsx("h1", { children: "Dashboard" }, void 0), jsx_runtime_1.jsxs("div", Object.assign({ className: "db__nav" }, { children: [jsx_runtime_1.jsx(Button_1.default, { type: "Primary", text: "Create", roleAction: "Create", visibleByRole: visibleRole, darkMode: "light", style: { margin: "0 5px" } }, void 0), jsx_runtime_1.jsx(Button_1.default, { type: "Primary", text: "Update", roleAction: "Update", visibleByRole: visibleRole, darkMode: "light", style: { margin: "0 5px" } }, void 0), jsx_runtime_1.jsx(Button_1.default, { type: "Primary", text: "Delete", roleAction: "Delete", visibleByRole: visibleRole, darkMode: "light", style: { margin: "0 5px" } }, void 0), jsx_runtime_1.jsx(Button_1.default, { text: "Logout", darkMode: "light", style: { margin: "0 5px" }, onClick: this.onHandleLogout }, void 0)] }), void 0)] }), void 0));
    }
}
exports.default = Dashboard;
//# sourceMappingURL=Dashboard.js.map