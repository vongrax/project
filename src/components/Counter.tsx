import React, {useState} from 'react';
import "./Counter.scss"

const Counter = () => {
    const [count, setCount] = useState(0)

    const clickHandler = () => {
        setCount(count + 1)
    }

    return (
        <div>
            <h2>{count}</h2>
            <button onClick={clickHandler}>increment</button>
        </div>
    );
};

export default Counter;