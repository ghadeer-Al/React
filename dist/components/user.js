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
const react_1 = require("react");
const react_bootstrap_1 = require("react-bootstrap");
// import { json, useNavigate } from "react-router-dom";
const alertifyjs_1 = __importDefault(require("alertifyjs"));
require("alertifyjs/build/css/alertify.css");
// import Toastify from "toastify-js";
const react_2 = __importDefault(require("react"));
// import { stringify } from "querystring";
//type
// interface Users{
// userName: string;
// status: string;
// };
const User = () => {
    const [users, setUsers] = (0, react_1.useState)([]);
    // const [error, setError] = useState(); 
    (0, react_1.useEffect)(() => {
        const fetchUsers = () => __awaiter(void 0, void 0, void 0, function* () {
            const data = yield fetch("https://localhost:7027/api/Users");
            const jsonData = yield data.json();
            setUsers(jsonData);
        });
        fetchUsers();
    }, []);
    const deleteOperation = (id) => {
        fetch("https://localhost:7027/api/Users/" + id, {
            method: "Delete",
        })
            .then((response) => __awaiter(void 0, void 0, void 0, function* () {
            var result = yield response.text();
            if (response.status == 200) {
                alertifyjs_1.default.alert("Delete", "Delete User!!", function () {
                    alertifyjs_1.default.message("OK");
                    window.location.reload();
                    console.log("successful");
                });
            }
            else {
                throw result;
            }
        }))
            .catch((err) => {
            console.log(err);
        });
        alertifyjs_1.default.alert("Error", "faild", function () {
            alertifyjs_1.default.message("OK");
        });
    };
    // const clickHandle = () => {
    //   alertify.alert("Delete", "Delete User!!", function () {
    //     alertify.message("OK");
    //     window.location.reload();
    //   });
    // };
    // const alert = () => {
    //   alertify.confirm(
    //     "Delete",
    //     "Delete User!!",
    //     function (e) {
    //       if (e) {
    //         ().submit();
    //         alertify.success("Ok");
    //         return true;
    //       } else {
    //         alertify.error("Cancel");
    //         return false;
    //       }
    //     },
    //     function () {
    //       alertify.error("Cancel");
    //     }
    //   );
    // };
    return (react_2.default.createElement("div", null,
        react_2.default.createElement("h4", { style: { textAlign: "center", fontSize: 40 } }, "User List"),
        react_2.default.createElement("div", { style: {
                justifyContent: "center",
                display: "flex",
                textAlign: "center",
            } },
            react_2.default.createElement("table", { className: "table table-striped center", style: { /* borderCollapse: Collapse,*/ gap: "13px" } },
                react_2.default.createElement("thead", null,
                    react_2.default.createElement("tr", null,
                        react_2.default.createElement("th", { style: { fontSize: 23 } }, "UserName"),
                        react_2.default.createElement("th", { style: { fontSize: 23 } }, "Status"),
                        react_2.default.createElement("th", { style: { fontSize: 23 } }, "Operations"))),
                react_2.default.createElement("tbody", null, users === null || users === void 0 ? void 0 : users.map((user) => {
                    return (react_2.default.createElement("tr", { key: user.id },
                        react_2.default.createElement("td", null, user.username),
                        react_2.default.createElement("td", null,
                            " ",
                            user.status),
                        react_2.default.createElement("td", null,
                            react_2.default.createElement(react_bootstrap_1.Button, { onClick: () => {
                                    //  alert();
                                    // clickHandle();
                                    deleteOperation(user.id);
                                }, style: {
                                    backgroundColor: "red",
                                    color: "#fff",
                                    padding: " 3px",
                                } }, "Delete"),
                            react_2.default.createElement("a", { style: {
                                    backgroundColor: "green",
                                    color: "#fff",
                                    padding: "4px",
                                    margin: "15px",
                                    borderRadius: "5px",
                                }, href: `/Edit/${user.id}` }, "Edit"))));
                }))))));
};
exports.default = User;
//# sourceMappingURL=user.js.map