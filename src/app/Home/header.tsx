import { NewsBar } from "@/components/newsbar";
//import { LoadStateNodes } from "@/components/state-loader";
import { useEditor } from "@craftjs/core";
import lz from "lzutf8";
import { useState } from "react";
// import { useLoadStateNodes } from "@/components/state-loader/state-loader";

export const Header: React.FC = () => {
  const { actions } = useEditor((state) => ({
    enabled: state.options.enabled,
  }));
  const [state, setState] = useState("");
  // useLoadStateNodes();

  const handleChange = () => {
    const json = lz.decompress(lz.decodeBase64(state));
    actions.deserialize(JSON.stringify(json));
  };
  return (
    <header>
      <input value={state} onChange={(e) => setState(e.target.value)} />
      <button onClick={handleChange}>load</button>
      <NewsBar />
    </header>
  );
};
