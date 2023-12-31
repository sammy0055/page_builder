"use client";
import { createContext, useContext, useReducer } from "react";

interface EditorContextState {
  isComponents: boolean;
  isStyles: boolean;
  isEditable: boolean;
}

enum EditorContextActionKind {
  ISCOMPONENT = "ISCOMPONENT",
  ISEDITABLE = "ISEDITABLE",
}

interface EditorContextAction {
  type: "ISCOMPONENT" | "ISTYLES" | "ISEDITABLE";
  payload: boolean;
}

type ReducerTypes = [EditorContextState, (args: EditorContextAction) => void];

export const useEditorGlobalState = () => {
  const globalState: EditorContextState = {
    isComponents: false,
    isStyles: true,
    isEditable: true,
  };

  const reducer = (state: any, action: EditorContextAction) => {
    switch (action.type) {
      case EditorContextActionKind.ISCOMPONENT:
        return { ...state, isComponents: action.payload };
      case EditorContextActionKind.ISEDITABLE:
        return { ...state, isEditable: action.payload };
      default:
        return state;
    }
  };
  return useReducer(reducer, globalState);
};

export const EditorContext = createContext<any>({});

export const useEditorContext = (): ReducerTypes => useContext(EditorContext);
