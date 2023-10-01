import React, {useState} from 'react';
import classes from "./Counter.module.scss"

const Counter = () => {
    const [count, setCount] = useState(0)

    const clickHandler = () => {
        setCount(count + 1)
    }

    return (
        <div className={classes.button}>
            <h2>{count}</h2>
            <button onClick={clickHandler}>increment</button>
        </div>
    );
};

export default Counter;