import Button from "./Button";
import styles from "./App.module.css";
import { useState } from "react";

function App() {
    const [counter, setCounter] = useState(0);
    const onClick = () => setCounter((curr) => curr + 1);

    console.log("call an API");

    return (
        <div>
            <h1 className={styles.title}>Welcome Back!</h1>
            <h1 className={styles.title}>{counter}</h1>
            <Button onClick={onClick} text={"Continue"} />
        </div>
    );
}

export default App;
