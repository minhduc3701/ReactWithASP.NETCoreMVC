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
const TooltipHost_1 = require("./TooltipHost");
// </TooltipProps>
class CustomTooltip extends React.Component {
    render() {
        return (jsx_runtime_1.jsx(TooltipHost_1.TooltipHost, Object.assign({ calloutProps: Object.assign({ backgroundColor: this.props.darkMode === "dark" ? "#212121" : "#ffffff", styles: {
                    beakCurtain: {
                        backgroundColor: this.props.darkMode === "dark" ? "#212121" : "#ffffff",
                    },
                    root: {
                        backgroundColor: this.props.darkMode === "dark" ? "#212121" : "#ffffff",
                        zIndex: 9999,
                    },
                    calloutMain: {
                        zIndex: 99,
                    },
                } }, this.props.calloutProps) }, this.props), void 0));
    }
}
exports.default = CustomTooltip;
//# sourceMappingURL=CustomToolTip.js.map