//import React, { useRef, useEffect } from "react";
import * as React from 'react';
import { useRef, useEffect } from "react";
import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router';
import { ApplicationState } from '../../store';
import * as HTMLEditorStore from '../../store/HTMLEditor';
import SunEditor, { buttonList } from 'suneditor-react';
import SunEditorCore from "suneditor/src/lib/core";
import 'suneditor/dist/css/suneditor.min.css'; // Import Sun Editor's CSS File

type HTMLEditorProps =
    HTMLEditorStore.HTMLEditorState &
    typeof HTMLEditorStore.actionCreators &
    RouteComponentProps<{}>;

const HtmlEditor = props => {
    const editor = useRef<SunEditorCore>();

    // The sunEditor parameter will be set to the core suneditor instance when this function is called
    const getSunEditorInstance = (sunEditor: SunEditorCore) => {
        editor.current = sunEditor;
        editor.current.getContents
    };
    return (
        <div>
            <p> My Other Contents </p>
            <SunEditor
                getSunEditorInstance={getSunEditorInstance}
                lang="de"
                name="HTML-Editor"
                setAllPlugins={true}
                setOptions={{
                    buttonList: buttonList.complex
                }}
            />
        </div>
    );
};
//export default HtmlEditor;

export default connect(
    (state: ApplicationState) => state.counter,
    HTMLEditorStore.actionCreators
)(HtmlEditor);