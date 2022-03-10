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
const SearchBox_1 = require("./SearchBox");
const CustomSearchBoxStyle_1 = require("./CustomSearchBoxStyle");
const utilities_1 = require("../@uifabric/utilities");
const DefaultTheme_1 = require("../@uifabric/DefaultTheme");
class CustomSearchBox extends React.Component {
    render() {
        const currentTheme = this.props.darkMode === "dark" ? DefaultTheme_1.darkTheme : DefaultTheme_1.lightTheme;
        return (jsx_runtime_1.jsx(CustomSearchBoxStyle_1.SearchBoxWrapper, Object.assign({ theme: this.props.darkMode, className: "SearchBoxWrapper" }, { children: jsx_runtime_1.jsx(utilities_1.Customizer, Object.assign({}, currentTheme, { children: jsx_runtime_1.jsx(SearchBox_1.SearchBox, Object.assign({}, this.props, { styles: {
                        root: {
                            borderColor: this.props.darkMode === "dark" ? "#ffffff" : "#a6a6a6",
                            borderRadius: 0,
                            selectors: {
                                ":hover": {
                                    borderColor: this.props.darkMode === "dark" ? "#fff" : "#747474",
                                },
                            },
                        },
                        field: {
                            color: this.props.darkMode === "dark" ? "#ffffff" : "#323130",
                        },
                    } }), void 0) }), void 0) }), void 0));
    }
}
exports.default = CustomSearchBox;
//# sourceMappingURL=CustomSearchBox.js.map