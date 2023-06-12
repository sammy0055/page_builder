import NavText from "./components/nav-text";
import styles from "./styles/nav.module.css";

export default function Header() {
  return (
    <header className={styles.Nav}>
      <span className="text-slate-100">hello</span>
      <span className="text-slate-100">hello</span>
      <nav className={styles.NavText}>
        <NavText text="fullscreen" className="font-sans font-bold text-slate-100" />
        <NavText text="save" className="font-sans font-bold text-slate-100" />
        <NavText text="copy" className="font-sans font-bold text-slate-100" />
      </nav>
    </header>
  );
}
