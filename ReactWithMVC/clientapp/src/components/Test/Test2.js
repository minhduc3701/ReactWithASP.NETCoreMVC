"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = __importDefault(require("react"));
class Test2 extends react_1.default.Component {
    render() {
        return (jsx_runtime_1.jsx("div", Object.assign({ className: "test2Wrapper" }, { children: jsx_runtime_1.jsx("h1", { children: "Test2" }, void 0) }), void 0));
    }
}
exports.default = Test2;
//# sourceMappingURL=Test2.js.map