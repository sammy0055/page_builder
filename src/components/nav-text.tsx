"use client";
import ContentEditable, { ContentEditableEvent } from "react-contenteditable";
import { useEffect, useState } from "react";
import { useNode } from "@craftjs/core";

type NavTextPops = { text: string };
const NavText: React.FC<NavTextPops> = ({ text }) => {
  const {
    connectors: { connect, drag },
    actions: { setProp },
    hasSelectedNode,
  } = useNode((state) => ({
    hasSelectedNode: state.events.selected,
    hasDraggedNode: state.events.dragged,
  }));

  const [editable, setEditable] = useState(false);

  useEffect(() => {
    !hasSelectedNode && setEditable(false);
  }, [hasSelectedNode]);
  return (
    <span
      ref={(ref: any) => connect(drag(ref))}
      onClick={() => setEditable(true)}
    >
      <ContentEditable
        disabled={!editable}
        html={text}
        tagName="p"
        style={{ color: "red" }}
        onChange={(e: ContentEditableEvent) =>
          setProp(
            (props: NavTextPops) =>
              (props.text = e.target.value.replace(/<\/?[^>]+(>|$)/g, ""))
          )
        }
      />
    </span>
  );
};

export default NavText;
