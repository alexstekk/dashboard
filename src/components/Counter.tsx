import React from 'react';

import './Counter.scss'

const Counter = () => {

    const [count, setCount] = React.useState(0);
    const increment = () => {
        setCount(count + 1);
    }
    return (
        <div>
            {count}
            <button onClick={increment}>+</button>
        </div>
    );
};

export {Counter};