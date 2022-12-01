"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
// import ReactDOM from "react-dom/client";
const react_router_dom_1 = require("react-router-dom");
const hom_1 = __importDefault(require("./components/hom"));
const user_1 = __importDefault(require("./components/user"));
const addUser_1 = __importDefault(require("./components/addUser"));
const edit_1 = __importDefault(require("./components/edit"));
const react_dom_1 = __importDefault(require("react-dom"));
const navigation_1 = __importDefault(require("./components/navigation"));
function App() {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(navigation_1.default, null),
        react_1.default.createElement(react_router_dom_1.BrowserRouter, null,
            react_1.default.createElement(react_router_dom_1.Routes, null,
                react_1.default.createElement(react_router_dom_1.Route, { path: "/Hom", element: react_1.default.createElement(hom_1.default, null) }),
                react_1.default.createElement(react_router_dom_1.Route, { path: "/User", element: react_1.default.createElement(user_1.default, null) }),
                react_1.default.createElement(react_router_dom_1.Route, { path: "/AddUser", element: react_1.default.createElement(addUser_1.default, null) }),
                react_1.default.createElement(react_router_dom_1.Route, { path: "/Edit/:id", element: react_1.default.createElement(edit_1.default, null) })))));
}
exports.default = App;
// const root = (document.getElementById("root"));
// root.render(<App />);
react_dom_1.default.render(react_1.default.createElement(App, null), document.getElementById("root"));
//# sourceMappingURL=index.js.map