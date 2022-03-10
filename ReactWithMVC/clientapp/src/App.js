"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
require("./App.css");
const Login_1 = __importDefault(require("./components/Login"));
const Admin_1 = __importDefault(require("./components/Admin"));
const Dashboard_1 = __importDefault(require("./components/Dashboard"));
const User_1 = __importDefault(require("./components/User"));
const react_router_dom_1 = require("react-router-dom");
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
    const RenderRouteHandleRoutesByRole = (props) => {
        let accountRole = localStorage.getItem("role") || "guess";
        let idx = configRouteBaseOnRole.findIndex((r) => r.role === accountRole);
        if (accountRole &&
            (configRouteBaseOnRole[idx].accessPage.some((p) => p === props.path) ||
                props.path === "/")) {
            return jsx_runtime_1.jsx(react_router_dom_1.Route, Object.assign({}, props), void 0);
        }
        else {
            console.log("redirect");
            return jsx_runtime_1.jsx(react_router_dom_1.Redirect, { to: "/" }, void 0);
        }
    };
    console.log("rendered react");
    return (jsx_runtime_1.jsx("div", Object.assign({ className: "App" }, { children: jsx_runtime_1.jsxs(react_router_dom_1.Switch, { children: [jsx_runtime_1.jsx(react_router_dom_1.Route, { path: "/", component: Login_1.default, exact: true }, void 0), jsx_runtime_1.jsx(RenderRouteHandleRoutesByRole, { path: "/admin", component: Admin_1.default, exact: true }, void 0), jsx_runtime_1.jsx(RenderRouteHandleRoutesByRole, { path: "/dashboard", component: Dashboard_1.default, exact: true }, void 0), jsx_runtime_1.jsx(RenderRouteHandleRoutesByRole, { path: "/user", component: User_1.default, exact: true }, void 0)] }, void 0) }), void 0));
}
exports.default = App;
//# sourceMappingURL=App.js.map