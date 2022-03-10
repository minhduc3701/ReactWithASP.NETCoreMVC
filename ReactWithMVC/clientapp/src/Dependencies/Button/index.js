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
const DefaultButton_1 = require("./DefaultButton");
const ButtonStyle_1 = require("./ButtonStyle");
class ButtonDefaultExample extends React.Component {
    render() {
        const { disabled, checked } = this.props;
        const addIcon = { iconName: this.props.icon ? this.props.icon : "" };
        return (jsx_runtime_1.jsx(jsx_runtime_1.Fragment, { children: (!this.props.roleAction ||
                !this.props.visibleByRole ||
                (this.props.roleAction &&
                    this.props.visibleByRole &&
                    this.props.visibleByRole.some((r) => r === this.props.roleAction))) && (jsx_runtime_1.jsx(ButtonStyle_1.ButtonWrapper, Object.assign({ theme: {
                    type: this.props.type,
                    darkMode: this.props.darkMode,
                }, className: this.props.className }, { children: jsx_runtime_1.jsx(DefaultButton_1.DefaultButton, Object.assign({ onClick: this.props.onClick }, this.props, { iconProps: addIcon, text: this.props.text, disabled: disabled, checked: checked }), void 0) }), void 0)) }, void 0));
    }
}
exports.default = ButtonDefaultExample;
//# sourceMappingURL=index.js.map