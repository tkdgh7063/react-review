import Button from "./Button";
import styles from "./App.module.css";

function App() {
  return (
    <div>
      <h1 className={styles.title}>Let's get started!!</h1>
      <Button text="Button" />
    </div>
  );
}

export default App;
