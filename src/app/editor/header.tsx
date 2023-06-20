import NavText from "./components/nav-text";
import styles from "./styles/nav.module.css";

import { useEditor } from "@craftjs/core";
import lz from "lzutf8";
import copy from "copy-to-clipboard";

export default function Header() {
  const { query } = useEditor((state) => ({
    enabled: state.options.enabled,
  }));

  const saveNode = () => {
    const json = query.serialize();
    copy(lz.encodeBase64(lz.compress(json)));
    alert("state copied to clipboard");
  };

  return (
    <header className={styles.Nav}>
      <span className="text-slate-100">hello</span>
      <span className="text-slate-100">
        <select name="selector">
          <option>home</option>
          <option>preview</option>
        </select>
      </span>
      <nav className={styles.NavText}>
        <NavText
          text="fullscreen"
          className="font-sans font-bold text-slate-100"
        />
        <button onClick={saveNode}>save</button>
        <NavText text="copy" className="font-sans font-bold text-slate-100" />
      </nav>
    </header>
  );
}
