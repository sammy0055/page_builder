"use client";
import { useEditor } from "@craftjs/core";
import styles from "../styles/sidebar.module.css";
import React from "react";
const SideBar: React.FC = () => {
  const { selected } = useEditor((state, query) => {
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
  return (
    <aside className={`${styles.sidebar_container}`}>
      <div className="content">
        <div>
          <p className={`${styles.ToolboxHeading}`}>ToolBox</p>
          <div>
              {selected?.settings && React.createElement(selected.settings)}
          </div>
        </div>
      </div>
    </aside>
  );
};

export default SideBar;
