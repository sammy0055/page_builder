import { createContext, useContext } from "react";

export const EditableState = createContext<any>(null)

export const useEditorEditableState = () => useContext(EditableState)
