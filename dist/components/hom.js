"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
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
exports.Hom = void 0;
const react_1 = __importStar(require("react"));
//import {Link} from 'react-router-dom';
class Hom extends react_1.Component {
    render() {
        return (react_1.default.createElement("div", null,
            react_1.default.createElement("header", { style: {
                    backgroundColor: "SlateBlue",
                    color: "#fff",
                    padding: "10px",
                    textAlign: "center",
                } },
                react_1.default.createElement("h3", null, "Welcom To Home Page")),
            react_1.default.createElement("p", { style: { fontSize: 30 } }, "This is home page for Dummy project")));
    }
}
exports.Hom = Hom;
exports.default = Hom;
//# sourceMappingURL=hom.js.map