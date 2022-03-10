"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PivotWrapper = void 0;
const styled_components_1 = __importDefault(require("styled-components"));
exports.PivotWrapper = styled_components_1.default.div `
  height: 100%;
  width: 100%;
  .tab-wrapper {
    .moveLeft-btn,
    .moveRight-btn {
      display: none !important;
    }
    .ms-Pivot {
      display: flex;
      width: 100%;
      overflow-x: auto;
      overflow-y: hidden;
      &::-webkit-scrollbar {
        background-color: transparent;
        cursor: pointer;
      }
      &::-webkit-scrollbar-thumb {
        background: ${({ theme }) => theme.theme === "dark" ? "#c8c8c8" : "#c8c6c4"};
        border-radius: 10px;
        background-clip: content-box;
        border: solid 7px transparent;
        opacity: 0.6;
        &:hover {
          background: #98a3a6;
          background-clip: content-box;
          border: solid 7px transparent;
          opacity: 0.8;
        }
      }
      .ms-Button--action .ms-Button-flexContainer .ms-Pivot-linkContent {
        .ms-Pivot-icon,
        .ms-Pivot-text {
          padding: 0 4px;
        }
      }
    }
  }
  @media screen and (max-width: 850px) {
    .tab-wrapper {
      padding: 0 20px;
      .moveLeft-btn,
      .moveRight-btn {
        display: flex !important;
        &:hover {
          opacity: 1 !important;
        }
      }
    }
  }
`;
//# sourceMappingURL=CustomPivotStyle.js.map