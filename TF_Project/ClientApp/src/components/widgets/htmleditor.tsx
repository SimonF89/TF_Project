//import React, { useRef, useEffect } from "react";
import * as React from 'react';
import { useRef, useEffect } from "react";
import { connect } from 'react-redux';
import SunEditor from 'suneditor-react';
import SunEditorCore from "suneditor/src/lib/core";
import 'suneditor/dist/css/suneditor.min.css'; // Import Sun Editor's CSS File

const HtmlEditor = props => {
    const editor = useRef<SunEditorCore>();

    // The sunEditor parameter will be set to the core suneditor instance when this function is called
    const getSunEditorInstance = (sunEditor: SunEditorCore) => {
        editor.current = sunEditor;
    };
    return (
        <div>
            <p> My Other Contents </p>
            <SunEditor getSunEditorInstance={getSunEditorInstance} />
        </div>
    );
};
export default HtmlEditor;