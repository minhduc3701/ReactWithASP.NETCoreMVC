"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = __importDefault(require("react"));
const react_dom_1 = __importDefault(require("react-dom"));
const react_router_dom_1 = require("react-router-dom");
const Test1_1 = __importDefault(require("./Test/Test1"));
const Test2_1 = __importDefault(require("./Test/Test2"));
class Test extends react_1.default.Component {
    render() {
        return (jsx_runtime_1.jsx("div", Object.assign({ className: "userWrapper" }, { children: jsx_runtime_1.jsxs(react_router_dom_1.Switch, { children: [jsx_runtime_1.jsx(react_router_dom_1.Route, { path: "/test1", component: Test1_1.default, exact: true }, void 0), jsx_runtime_1.jsx(react_router_dom_1.Route, { path: "/test2", component: Test2_1.default, exact: true }, void 0)] }, void 0) }), void 0));
    }
}
exports.default = Test;
react_dom_1.default.render(jsx_runtime_1.jsx(react_1.default.StrictMode, { children: jsx_runtime_1.jsx(react_router_dom_1.BrowserRouter, { children: jsx_runtime_1.jsx(Test, {}, void 0) }, void 0) }, void 0), document.getElementById("root-test"));
//# sourceMappingURL=Test.js.map