"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommandBarWrapper = void 0;
const styled_components_1 = __importDefault(require("styled-components"));
// </CommandBarProps>
exports.CommandBarWrapper = styled_components_1.default.div `
  width: 100%;
  .ms-CommandBar,
  .ms-CommandBar-secondaryCommand,
  .ms-CommandBar-primaryCommand {
    background-color: ${({ theme }) => theme === "dark" ? "#333333" : "#ffffff"};
  }
`;
//# sourceMappingURL=CustomCommandBarStyle.js.map