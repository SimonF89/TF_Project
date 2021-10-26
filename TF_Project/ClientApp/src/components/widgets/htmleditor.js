"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//import React, { useRef, useEffect } from "react";
var React = require("react");
var react_1 = require("react");
var suneditor_react_1 = require("suneditor-react");
require("suneditor/dist/css/suneditor.min.css"); // Import Sun Editor's CSS File
var HtmlEditor = function (props) {
    var editor = (0, react_1.useRef)();
    // The sunEditor parameter will be set to the core suneditor instance when this function is called
    var getSunEditorInstance = function (sunEditor) {
        editor.current = sunEditor;
    };
    return (React.createElement("div", null,
        React.createElement("p", null, " My Other Contents "),
        React.createElement(suneditor_react_1.default, { getSunEditorInstance: getSunEditorInstance })));
};
exports.default = HtmlEditor;
//# sourceMappingURL=htmleditor.js.map