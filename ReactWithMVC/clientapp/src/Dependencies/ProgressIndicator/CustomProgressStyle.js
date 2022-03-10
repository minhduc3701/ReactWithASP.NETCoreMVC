"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProgressWrapper = void 0;
const styled_components_1 = __importDefault(require("styled-components"));
// </ProgressIndicatorProps>
exports.ProgressWrapper = styled_components_1.default.div `
  width: 100%;
  height: 100%;
  .ms-ProgressIndicator {
    .ms-ProgressIndicator-itemName {
      color: ${({ theme }) => (theme === "dark" ? "#ffffff" : "#212121")};
    }
    .ms-ProgressIndicator-itemDescription {
      color: ${({ theme }) => (theme === "dark" ? "#eaeaea" : "#605e5c")};
    }
    .ms-ProgressIndicator-itemProgress {
      .ms-ProgressIndicator-progressTrack {
        background-color: ${({ theme }) => theme === "dark" ? "#005A9E" : "#edebe9"};
      }
      .ms-ProgressIndicator-progressBar {
        background: ${({ theme }) => theme === "dark" ? "#69afe5" : "#005A9E"};
      }
    }
  }
`;
//# sourceMappingURL=CustomProgressStyle.js.map