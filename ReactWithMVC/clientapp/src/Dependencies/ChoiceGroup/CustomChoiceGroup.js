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
const ChoiceGroup_1 = require("./ChoiceGroup");
const CustomChoiceGroupStyle_1 = require("./CustomChoiceGroupStyle");
class CustomChoiceGroup extends React.Component {
    render() {
        return (jsx_runtime_1.jsx(CustomChoiceGroupStyle_1.ChoiceGroupWrapper, Object.assign({ theme: this.props.darkMode }, { children: jsx_runtime_1.jsx(ChoiceGroup_1.ChoiceGroup, Object.assign({}, this.props, { styles: {
                    label: {
                        color: this.props.darkMode === "dark" ? "#ffffff" : "#323130",
                    },
                } }), void 0) }), void 0));
    }
}
exports.default = CustomChoiceGroup;
//# sourceMappingURL=CustomChoiceGroup.js.map