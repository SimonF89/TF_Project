"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//import React, { useRef, useEffect } from "react";
var React = require("react");
var react_1 = require("react");
var react_redux_1 = require("react-redux");
var HTMLEditorStore = require("../../store/HTMLEditor");
var suneditor_react_1 = require("suneditor-react");
require("suneditor/dist/css/suneditor.min.css"); // Import Sun Editor's CSS File
var HtmlEditor = function (props) {
    var editor = (0, react_1.useRef)();
    // The sunEditor parameter will be set to the core suneditor instance when this function is called
    var getSunEditorInstance = function (sunEditor) {
        editor.current = sunEditor;
    };
    var handleChange = function (content) {
        console.log(content + "lol"); //Get Content Inside Editor
    };
    return (React.createElement("div", null,
        React.createElement("p", null, " My Other Contents "),
        React.createElement(suneditor_react_1.default, { getSunEditorInstance: getSunEditorInstance, lang: "de", name: "HTML-Editor", setAllPlugins: true, setOptions: {
                buttonList: suneditor_react_1.buttonList.complex
            }, onChange: handleChange })));
};
//export default HtmlEditor;
exports.default = (0, react_redux_1.connect)(function (state) { return state.counter; }, HTMLEditorStore.actionCreators)(HtmlEditor);
//# sourceMappingURL=htmleditor.js.map