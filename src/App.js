import Button from "./Button";
import styles from "./App.module.css";
import { useState, useEffect } from "react";

function App() {
    const [counter, setCounter] = useState(0);
    const [keyword, setKeyword] = useState("");
    const onClick = () => setCounter((curr) => curr + 1);
    const onChange = (event) => setKeyword(event.target.value);

    console.log("I run all the time");

    useEffect(() => {
        console.log("I run only once");
    }, []);

    useEffect(() => {
        if (keyword !== "") {
            console.log("I run when 'keyword' changes which is", keyword);
        }
    }, [keyword]);

    useEffect(() => {
        if (counter !== 0) {
            console.log("I run when 'counter' changes which is", counter);
        }
    }, [counter]);

    useEffect(() => {
        if (counter !== 0) {
            console.log("I run when 'keyword' or 'counter' changes which is", counter);
        }
    }, [keyword, counter]);

    return (
        <div>
            <input
                type="text"
                placeholder="Search here..."
                value={keyword}
                onChange={onChange}
            />
            <h1 className={styles.title}>Welcome Back!</h1>
            <h1 className={styles.title}>{counter}</h1>
            <Button onClick={onClick} text={"Continue"} />
        </div>
    );
}

export default App;
