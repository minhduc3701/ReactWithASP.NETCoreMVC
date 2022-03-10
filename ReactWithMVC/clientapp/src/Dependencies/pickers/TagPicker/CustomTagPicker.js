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
const TagPicker_1 = require("./TagPicker");
const utilities_1 = require("../../@uifabric/utilities");
const DefaultTheme_1 = require("../../@uifabric/DefaultTheme");
class CustomTagPicker extends React.Component {
    render() {
        const currentTheme = this.props.darkMode === "dark" ? DefaultTheme_1.darkTheme : DefaultTheme_1.lightTheme;
        return (jsx_runtime_1.jsx(utilities_1.Customizer, Object.assign({}, currentTheme, { children: jsx_runtime_1.jsx(TagPicker_1.TagPicker, Object.assign({}, this.props, { styles: {
                    text: {
                        borderRadius: 0,
                        border: "none",
                        selectors: {
                            ":after": {
                                border: "none",
                            },
                        },
                    },
                    input: {
                        borderRadius: 0,
                        height: 32,
                        border: this.props.darkMode === "dark"
                            ? "1px solid #ffffff !important"
                            : "1px solid #a6a6a6 !important",
                    },
                } }), void 0) }), void 0));
    }
}
exports.default = CustomTagPicker;
//# sourceMappingURL=CustomTagPicker.js.map