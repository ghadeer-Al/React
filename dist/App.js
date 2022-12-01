"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//import logo from './logo.svg';
const react_1 = __importDefault(require("react"));
require("./App.css");
//import './index.css';
//import Button from 'react-bootstrap/Button'
const hom_1 = __importDefault(require("./components/hom"));
const user_1 = __importDefault(require("./components/user"));
//  import addUser from './components/addUser'
const react_router_dom_1 = require("react-router-dom");
//import {Link} from 'react-router-dom';
// import Navigation from './Navigation'
// import AppHeader from './AppHeader';
const edit_1 = __importDefault(require("./components/edit"));
const addUser_1 = __importDefault(require("./components/addUser"));
function App() {
    return (react_1.default.createElement("div", { className: "container" },
        react_1.default.createElement(react_router_dom_1.BrowserRouter, null,
            react_1.default.createElement(react_router_dom_1.Routes, null,
                react_1.default.createElement(react_router_dom_1.Route, { path: '/hom', element: react_1.default.createElement(hom_1.default, null) }),
                react_1.default.createElement(react_router_dom_1.Route, { path: '/user', element: react_1.default.createElement(user_1.default, null) }),
                react_1.default.createElement(react_router_dom_1.Route, { path: "/AddUser", element: react_1.default.createElement(addUser_1.default, null) }),
                react_1.default.createElement(react_router_dom_1.Route, { path: "/Edit/:id", element: react_1.default.createElement(edit_1.default, null) })))));
}
exports.default = App;
//# sourceMappingURL=App.js.map