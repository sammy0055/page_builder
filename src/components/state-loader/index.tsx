// "use client";
import { useEffect, useState } from "react";
import lz from "lzutf8";
import { useEditor } from "@craftjs/core";
import { stateToLoad } from "@/data/test";

export const LoadStateNodes = () => {
  const { actions } = useEditor((state) => ({
    enabled: state.options.enabled,
  }));

  const [state, setState] = useState("");
  const getNode = async () => {
    const data = await fetch("/dbstate");
    const db = data.json()
    // console.log("====================================");
    // console.log(db);
    // console.log("====================================");
    if (stateToLoad) {
      const json = lz.decompress(lz.decodeBase64(stateToLoad));
      actions.deserialize(json);
    } else alert("stateNode not found");
  };
  // useEffect(() => {
  //   getNode();
  // }, []);

  const handleChange = () => {
    const json = lz.decompress(lz.decodeBase64(state));
    actions.deserialize(json);
  };
  return (
    <div>
      <input value={state} onChange={(e) => setState(e.target.value)} />
      <button onClick={handleChange}>load</button>
    </div>
  );
};
