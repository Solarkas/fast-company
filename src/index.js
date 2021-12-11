import React from "react";
import ReactDOM from "react-dom";
import Users from "./components/users";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import api from "./api";

ReactDOM.render(
    <React.StrictMode>
        <Users usersList={api.users.fetchAll()} />
    </React.StrictMode>,
    document.getElementById("root")
);

reportWebVitals();
