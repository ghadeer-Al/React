"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_2 = require("react");
const react_router_dom_1 = require("react-router-dom");
const axios_1 = __importDefault(require("axios"));
const react_router_dom_2 = require("react-router-dom");
const alertifyjs_1 = __importDefault(require("alertifyjs"));
require("alertifyjs/build/css/alertify.css");
// import User from "./user";
const EditUser = () => {
    const { id } = (0, react_router_dom_1.useParams)();
    const [username, setUserName] = (0, react_2.useState)("");
    const [password, setPassword] = (0, react_2.useState)("");
    const [status, setStatus] = (0, react_2.useState)("");
    const [user, setUser] = (0, react_2.useState)("");
    { /* <userData | null>(null) */ }
    //interface
    //  type UserData = {
    //       username:string;
    //       password:String;
    //       status:string;
    //     };
    (0, react_2.useEffect)(() => {
        const editUserId = () => __awaiter(void 0, void 0, void 0, function* () {
            const data = yield fetch("https://localhost:7027/api/Users/" + id);
            const res = yield data.json();
            setUser(yield res);
        });
        editUserId();
    }, []);
    const navigate = (0, react_router_dom_2.useNavigate)();
    const navigateToUser = () => {
        navigate("/User");
    };
    const handlePassword = (event) => {
        setPassword(event.target.value);
    };
    const handleStatus = (event) => {
        setStatus(event.target.value);
    };
    const saveData = () => {
        console.log({ id });
        EditOperation();
    };
    const EditOperation = () => {
        axios_1.default.put("https://localhost:7027/api/Users/" + id, {
            username,
            password,
            status,
        });
    };
    const handleEdit = (e) => {
        setUser({ user, [e.target.name]: e.target.value });
        setUserName(e.target.value);
    };
    const clickHandle = () => {
        alertifyjs_1.default.alert("Edit", "User has been modified", function () {
            alertifyjs_1.default.message("OK");
        });
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        navigateToUser();
    };
    return (react_1.default.createElement("div", null,
        react_1.default.createElement("h3", { style: { textAlign: "center", fontSize: 35 } }, "Edit User page"),
        react_1.default.createElement("form", { onSubmit: handleSubmit, style: { textAlign: "center", fontSize: 35 } },
            react_1.default.createElement("div", { className: "form-group", style: { fontSize: 19 } },
                react_1.default.createElement("label", null, "User Name"),
                react_1.default.createElement("input", { type: "text", className: "string", value: user === null || user === void 0 ? void 0 : user.username, 
                    // username="string"
                    onChange: (e) => handleEdit(e) })),
            react_1.default.createElement("div", { className: "form-group", style: { fontSize: 19 } },
                react_1.default.createElement("label", null, "Status "),
                react_1.default.createElement("input", { type: "text", className: "string", value: user === null || user === void 0 ? void 0 : user.status, 
                    // status="string"
                    onChange: (event) => handleStatus(event) })),
            react_1.default.createElement("div", { className: "form-group", style: { fontSize: 19 } },
                react_1.default.createElement("label", null, "Password "),
                react_1.default.createElement("input", { type: "password", className: "form-control", value: user === null || user === void 0 ? void 0 : user.password, 
                    //  password="password"
                    onChange: (event) => handlePassword(event) })),
            react_1.default.createElement("button", { type: "submit", className: "btn btn-primary", onClick: () => {
                    saveData();
                    clickHandle();
                } }, "Edit User"))));
};
exports.default = EditUser;
//# sourceMappingURL=edit.js.map