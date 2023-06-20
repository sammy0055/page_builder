import { useNode, useEditor } from "@craftjs/core";
import { ROOT_NODE } from "@craftjs/utils";
import React, { useEffect, useRef, useCallback } from "react";
import ReactDOM from "react-dom";
import styles from "./render.module.css";

// import ArrowUp from "../../../../../public/icons/arrow-up.svg";
// import Delete from "../../../../../public/icons/delete.svg";
// import Move from "../../../../../public/icons/move.svg";

export const RenderNode = ({ render }: any) => {
  const { id } = useNode();
  const { actions, query, isActive } = useEditor((_, query) => ({
    isActive: query.getEvent("selected").contains(id),
  }));

  const {
    isHover,
    dom,
    name,
    moveable,
    deletable,
    connectors: { drag },
    parent,
  } = useNode((node) => ({
    isHover: node.events.hovered,
    dom: node.dom as HTMLElement,
    name: node.data.custom.displayName || node.data.displayName,
    moveable: query.node(node.id).isDraggable(),
    deletable: query.node(node.id).isDeletable(),
    parent: node.data.parent,
    props: node.data.props,
  }));

  const currentRef = useRef<HTMLDivElement>();

  useEffect(() => {
    if (dom) {
      if (isActive || isHover) dom.classList.add("component-selected");
      else dom.classList.remove("component-selected");
    }
  }, [dom, isActive, isHover]);

  const getPos = useCallback((dom: HTMLElement) => {
    const { top, left, bottom } = dom
      ? dom.getBoundingClientRect()
      : { top: 0, left: 0, bottom: 0 };
    return {
      top: `${top > 0 ? top : bottom}px`,
      left: `${left}px`,
    };
  }, []);

  const scroll = useCallback(() => {
    const { current: currentDOM } = currentRef;

    if (!currentDOM) return;
    const { top, left } = getPos(dom);
    currentDOM.style.top = top;
    currentDOM.style.left = left;
  }, [dom, getPos]);

  useEffect(() => {
    document
      .querySelector(".craftjs-renderer")
      ?.addEventListener("scroll", scroll);
    return () => {
      document
        .querySelector(".craftjs-renderer")
        ?.removeEventListener("scroll", scroll);
    };
  }, [scroll]);

  const pageContainerNode: any = document.querySelector(".page-container");
  return (
    <>
      {isHover || isActive
        ? ReactDOM.createPortal(
            <div
              className={`${styles.indicatorDiv} px-2 py-2 text-white bg-primary fixed flex items-center`}
              ref={currentRef as any}
              style={{
                left: getPos(dom).left,
                top: getPos(dom).top,
                zIndex: 9999,
              }}
            >
              <h2 className="flex-1 mr-4">{name}</h2>
              {moveable ? (
                <div
                  className={`${styles.indicatorDiv} mr-2 cursor-move`}
                  ref={() => drag}
                >
                  move
                </div>
              ) : null}
              {id !== ROOT_NODE && (
                <div
                  className={`${styles.indicatorDiv} mr-2 cursor-pointer`}
                  onClick={() => {
                    actions.selectNode(parent!);
                  }}
                >
                  arrowUp
                  {/* <ArrowUp /> */}
                </div>
              )}
              {deletable ? (
                <div
                  className={`${styles.indicatorDiv} mr-2 cursor-pointer`}
                  onMouseDown={(e: React.MouseEvent) => {
                    e.stopPropagation();
                    actions.delete(id);
                  }}
                >
                  delete
                  {/* <Delete /> */}
                </div>
              ) : null}
            </div>,
            pageContainerNode
          )
        : null}
       {render}
    </>
  );
};
