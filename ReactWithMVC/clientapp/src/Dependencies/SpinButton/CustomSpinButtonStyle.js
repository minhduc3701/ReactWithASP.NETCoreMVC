"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SpinButtonWrapper = void 0;
const styled_components_1 = __importDefault(require("styled-components"));
//</SpinButtonProps>
exports.SpinButtonWrapper = styled_components_1.default.div `
  i {
    color: ${({ theme }) => theme.darkMode === "dark" ? "#ffffff" : "#323130"};
  }
  .ms-Button {
    cursor: pointer;
    border-radius: 0;
    background-color: ${({ theme }) => theme.darkMode === "dark" ? "#333333" : "#ffffff"};
    &:hover {
      background-color: ${({ theme }) => theme.darkMode === "dark" ? "#000000" : "#EAEAEA"};
    }
  }
  .is-disabled {
    opacity: 1;
    background-color: ${({ theme }) => theme.darkMode === "dark" ? "#212121" : "#f4f4f4"};
  }
  .ms-spinButton-input {
    border-radius: 0;
    background-color: ${({ theme }) => theme.darkMode === "dark" ? "#333333" : "#ffffff"};
    color: ${({ theme }) => theme.darkMode === "dark" ? "#ffffff" : "#323130"};
    &:disabled {
      color: ${({ theme }) => theme.darkMode === "dark" ? "#eaeaea" : "#A6A6A6"};
      background-color: ${({ theme }) => theme.darkMode === "dark" ? "#212121" : "#f3f2f1"};
    }
  }
  .ms-Label {
    color: ${({ theme }) => theme.darkMode === "dark" ? "#ffffff" : "#323130"};
    font-weight: 600;
    font-size: 14px;
  }
  .label-wrapper {
    padding-bottom: 15px;
  }
  .input-wrapper {
    border-color: ${({ theme }) => theme.darkMode === "dark" ? "#ffffff" : "#323130"};
    opacity: ${({ theme }) => theme.disabled && "0.5"};
    border-radius: 0;
    &:after {
      border-radius: 0;
      border-color: ${({ theme }) => theme.darkMode === "dark" ? " #a19f9d" : "#323130"};
      border: ${({ theme }) => theme.disabled && "0"};
    }
    &:hover:after {
      border-color: ${({ theme }) => theme.darkMode === "dark" ? "#ffffff" : "#323130"};
    }
  }
  .css-175 {
    border-radius: 0;
    &:after {
      border: ${({ theme }) => theme.darkMode === "dark" ? "1px solid #69afe5" : "1px solid #0078D4"};
      border-radius: 0;
    }
  }
`;
// border: ${({ theme }) =>
//   theme.darkMode === "dark" ? "1px solid #ffffff" : "1px solid #323130"};
//# sourceMappingURL=CustomSpinButtonStyle.js.map