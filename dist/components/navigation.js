"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const Navigation = () => {
    return (react_1.default.createElement("div", { className: "appheader" },
        react_1.default.createElement("header", null,
            react_1.default.createElement("h3", { style: { backgroundColor: 'DodgerBlue', fontSize: 40, margin: '0 auto', textAlign: 'center', padding: '8px', color: '#fff' } }, "React JS with Web API"),
            react_1.default.createElement("h4", { style: { backgroundColor: 'DodgerBlue', fontSize: 30, margin: ' 0auto', textAlign: 'center', padding: '6px', color: '#fff' } }, " Dummy Project")),
        react_1.default.createElement("nav", { className: "navbar navbar-expend-sm bg-light navbar-dark " },
            react_1.default.createElement("ul", { className: " navbar-nav", style: { fontSize: 25, padding: '1px' } },
                react_1.default.createElement("li", null,
                    react_1.default.createElement("a", { className: " m-2", href: "/Hom" }, "Home"),
                    react_1.default.createElement("a", { className: " m-2", href: "/User" }, "User"),
                    react_1.default.createElement("a", { className: " m-2", href: "/AddUser" }, "Add User"))))));
};
exports.default = Navigation;
//# sourceMappingURL=navigation.js.map