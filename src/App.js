import Button from "./Button";
import styles from "./App.module.css";
import { useState, useEffect } from "react";

function ShowData() {
    useEffect(() => {
        console.log("hi :)");
        return () => console.log("bye :(");
    }, []);
    return <h1>My Data</h1>
}

function App() {
    const [showing, setShowing] = useState(false);
    const [counter, setCounter] = useState(0);
    const [keyword, setKeyword] = useState("");
    const onClickCount = () => setCounter((curr) => curr + 1);
    const onChange = (event) => setKeyword(event.target.value);
    const onClickShowing = () => setShowing((curr) => !curr);

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
            <Button onClick={onClickCount} text={"Count up"} />
            <button onClick={onClickShowing}>{showing ? "Hide" : "Show"}</button>
            {showing ? <ShowData /> : null}
        </div>
    );
}

export default App;
