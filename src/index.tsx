import React from "react";
import App from "./App";
import { render } from "react-dom";

const div = document.createElement('div');
if (document.body) document.body.append(div);

render(
    <React.StrictMode>
            <App />
    </React.StrictMode>,
    div,
);

