import styles from "./test.module.css";
export default function test() {
  return (
    <div className={styles.container}>
      <span>
        <label>test</label>
      </span>

      <form>
        <input style={{width:"30%"}} value={""} />
        <select name="size" id="size">
          <option value={"size"}>size</option>
        </select>
      </form>
    </div>
  );
}
