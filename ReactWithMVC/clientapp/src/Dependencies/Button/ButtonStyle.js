"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ButtonWrapper = void 0;
const styled_components_1 = __importDefault(require("styled-components"));
// </ButtonProps>
const hanldType = (theme) => {
    //   [textColor,backgroundColor,hoverColor,activeColor,iconColor]
    let typeTheme = theme.type ? theme.type.toLowerCase() : theme.type;
    switch (typeTheme) {
        case "primary":
            if (theme.darkMode === "dark") {
                return ["#333333", "#69afe5", "#92c5f2", "#81bced", "#333333"];
            }
            else {
                return ["#ffffff", "#0078D4", "#106EBE", "#005A9E", "#ffffff"];
            }
        default:
            if (theme.darkMode === "dark") {
                return ["#ffffff", "#1b1a19", "#000000", "#212121", "#ffffff"];
            }
            else {
                return ["#212121", "#F4F4F4", "#EAEAEA", "#C8C8C8", "#333333"];
            }
    }
};
exports.ButtonWrapper = styled_components_1.default.div `
  .ms-Button {
    min-width: 80px;
    width: auto;
    height: 32px;
    border: none;
    border-radius: 0;
    background-color: ${({ theme }) => hanldType(theme)[1]};
    .ms-Button-label {
      color: ${({ theme }) => hanldType(theme)[0]};
      font-weight: normal;
    }
    .ms-Icon {
      margin: 0;
      padding-right: 5px;
      color: ${({ theme }) => hanldType(theme)[4]};
      font-weight: normal;
    }
    &:hover {
      background-color: ${({ theme }) => hanldType(theme)[2]};
      .ms-Button-label {
        color: ${({ theme }) => hanldType(theme)[0]};
      }
    }
    &:active {
      background-color: ${({ theme }) => hanldType(theme)[3]};
    }
  }
  .is-disabled.ms-Button {
    background-color: ${({ theme }) => theme.darkMode === "dark" ? "#212121" : "#f4f4f4"};
    .ms-Button-label,
    .ms-Icon {
      color: ${({ theme }) => theme.darkMode === "dark" ? "#D5D5D5" : "#a6a6a6"};
      font-weight: normal;
      opacity: 0.5;
    }
  }
`;
//# sourceMappingURL=ButtonStyle.js.map