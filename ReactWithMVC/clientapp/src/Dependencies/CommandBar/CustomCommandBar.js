"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const React = __importStar(require("react"));
const CommandBar_1 = require("./CommandBar");
const CustomCommandBarStyle_1 = require("./CustomCommandBarStyle");
const utilities_1 = require("../@uifabric/utilities");
const DefaultTheme_1 = require("../@uifabric/DefaultTheme");
class CustomCommandBar extends React.Component {
    render() {
        const currentTheme = this.props.darkMode === "dark" ? DefaultTheme_1.darkTheme : DefaultTheme_1.lightTheme;
        return (jsx_runtime_1.jsx(CustomCommandBarStyle_1.CommandBarWrapper, Object.assign({ theme: this.props.darkMode }, { children: jsx_runtime_1.jsx(utilities_1.Customizer, Object.assign({}, currentTheme, { children: jsx_runtime_1.jsx(CommandBar_1.CommandBar, Object.assign({}, this.props), void 0) }), void 0) }), void 0));
    }
}
exports.default = CustomCommandBar;
//# sourceMappingURL=CustomCommandBar.js.map