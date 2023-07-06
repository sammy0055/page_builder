"use client";
import { useEditor } from "@craftjs/core";
import styles from "../styles/sidebar.module.css";
import React from "react";
import { useEditorContext } from "@/app/context/editor-context";
import { ComponentBox } from "./dragable-components";
const SideBar: React.FC = () => {
  const { selected, actions } = useEditor((state, query) => {
    const [currentNodeId]: any = state.events.selected;
    let selected;

    if (currentNodeId) {
      selected = {
        id: currentNodeId,
        name: state.nodes[currentNodeId].data.name,
        settings:
          state.nodes[currentNodeId].related &&
          state.nodes[currentNodeId].related.settings,
        isDeletable: query.node(currentNodeId).isDeletable(),
      };
    }

    return {
      selected,
    };
  });

  const [{ isComponents }, _] = useEditorContext();
  return (
    <aside className={`${styles.sidebar_container}`}>
      <div className="content">
        <div>
          <p className={`${styles.ToolboxHeading}`}>
            {!isComponents ? "toolbox" : "component"}
          </p>
          {!isComponents ? (
            <div>
              {selected?.settings && React.createElement(selected.settings)}
              {selected?.isDeletable && (
                <button onClick={() => actions.delete(selected.id)}>
                  delete
                </button>
              )}
            </div>
          ) : (
            <div>
              <ComponentBox />
            </div>
          )}
        </div>
      </div>
    </aside>
  );
};

export default SideBar;
