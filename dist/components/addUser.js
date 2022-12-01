"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const react_router_dom_1 = require("react-router-dom");
const alertifyjs_1 = __importDefault(require("alertifyjs"));
require("alertifyjs/build/css/alertify.css");
const react_2 = __importDefault(require("react"));
const AddUser = () => {
    const [username, setUsername] = (0, react_1.useState)("");
    const [password, setPassword] = (0, react_1.useState)("");
    const [status, setStatus] = (0, react_1.useState)("");
    const navigate = (0, react_router_dom_1.useNavigate)();
    const navigateToUser = () => {
        navigate("/User");
    };
    // const refreshPage = () => {
    //   navigate(0);
    // };
    const handleUserName = (event) => {
        setUsername(event.target.value);
    };
    const handlePassword = (event) => {
        setPassword(event.target.value);
    };
    const handleStatus = (event) => {
        setStatus(event.target.value);
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        const body = { username, password, status };
        const addOption = {
            method: "Post",
            headers: { "content-Type": "application/json" },
            body: JSON.stringify(body),
        };
        fetch("https://localhost:7027/api/Users", addOption).then((e) => {
            console.log("then", e);
        });
        navigateToUser();
        // refreshPage();
    };
    const clickHandle = () => {
        alertifyjs_1.default.alert("Add ", "Add User!", function () {
            alertifyjs_1.default.message("OK");
        });
    };
    return (react_2.default.createElement("div", null,
        react_2.default.createElement("h3", { style: { textAlign: "center", fontSize: 40, height: "5vh" } }, "Add User page"),
        react_2.default.createElement("div", { className: " text-center ", style: {
                justifyContent: "center",
                display: "flex",
                alignItems: "center",
                height: "40vh",
            } },
            react_2.default.createElement("form", { onSubmit: handleSubmit, style: { textAlign: "center", fontSize: 35 } },
                react_2.default.createElement("div", { className: "form-group", style: { fontSize: 19 } },
                    react_2.default.createElement("label", null, "User name"),
                    react_2.default.createElement("input", { type: "text", className: "form-control", 
                        // required="required"
                        placeholder: "User Name", value: username, onChange: (event) => handleUserName(event) })),
                react_2.default.createElement("div", { className: "form-group", style: { fontSize: 19 } },
                    react_2.default.createElement("label", null, "Status"),
                    react_2.default.createElement("input", { 
                        //  type="checkbox"
                        type: "text", className: "form-control", placeholder: "Status", value: status, onChange: (event) => handleStatus(event) })),
                react_2.default.createElement("div", { className: "form-group", style: { fontSize: 19 } },
                    react_2.default.createElement("label", null, "Password"),
                    react_2.default.createElement("input", { type: "password", className: "form-control", placeholder: "Password", value: password, onChange: (event) => handlePassword(event) })),
                react_2.default.createElement("button", { type: "submit", className: "btn btn-primary", onClick: () => {
                        clickHandle();
                    } }, "Add User")))));
};
exports.default = AddUser;
//# sourceMappingURL=addUser.js.map