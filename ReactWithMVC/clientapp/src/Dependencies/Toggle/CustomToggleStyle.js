"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ToggleWrapper = void 0;
const styled_components_1 = __importDefault(require("styled-components"));
// hover #92c5f2
exports.ToggleWrapper = styled_components_1.default.div `
  .is-checked {
    .ms-Toggle-innerContainer .ms-Toggle-background {
      background: ${({ theme }) => (theme === "dark" ? "#62aaff" : "#0078d4")};
      border: none;
      &:hover {
        background: ${({ theme }) => theme === "dark" ? "#a4d4ff" : "#005a9e"};
      }
      .ms-Toggle-thumb {
        background-color: ${({ theme }) => theme === "dark" ? "#333333" : "#ffffff"};
      }
    }
  }
  .ms-Toggle-innerContainer .ms-Toggle-background {
    background: ${({ theme }) => (theme === "dark" ? "#333333" : "#ffffff")};
    border: 1px solid
      ${({ theme }) => (theme === "dark" ? "#ffffff" : "#212121")};
    .ms-Toggle-thumb {
      background-color: ${({ theme }) => theme === "dark" ? "#ffffff" : "#333333"};
    }
  }
  .is-disabled {
    .ms-Toggle-innerContainer {
      opacity: 0.5;
    }
  }
`;
//# sourceMappingURL=CustomToggleStyle.js.map