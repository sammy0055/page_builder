"use client";
import { useEffect, useState } from "react";
import lz from "lzutf8";
import { useEditor } from "@craftjs/core";
import { stateToLoad } from "@/data/test";

export const LoadStateNodes: React.FC = () => {
  const { actions } = useEditor((state) => ({
    enabled: state.options.enabled,
  }));

  const [state, setState] = useState("");

  // useEffect(() => {
  //   if (stateToLoad) {
  //     const json = lz.decompress(lz.decodeBase64(stateToLoad));
  //     actions.deserialize(JSON.stringify(json));
  //   } else alert("stateNode not found");
  // }, []);

  const handleChange = () => {
    const json = lz.decompress(lz.decodeBase64(state));
    actions.deserialize(JSON.stringify(json));
  };
  return (
    <div>
      <input value={state} onChange={(e) => setState(e.target.value)} />
      <button onClick={handleChange}>load</button>
    </div>
  );
};
