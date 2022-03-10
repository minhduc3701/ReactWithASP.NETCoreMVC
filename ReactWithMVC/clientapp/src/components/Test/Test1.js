"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = __importDefault(require("react"));
class Test1 extends react_1.default.Component {
    render() {
        return (jsx_runtime_1.jsx("div", Object.assign({ className: "test1Wrapper" }, { children: jsx_runtime_1.jsx("h1", { children: "Test1" }, void 0) }), void 0));
    }
}
exports.default = Test1;
//# sourceMappingURL=Test1.js.map