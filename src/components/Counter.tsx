import React from 'react';

import './Counter.scss'
import styles from './Styles.module.scss'

const Counter = () => {

    const [count, setCount] = React.useState(0);
    const increment = () => {
        setCount(count + 1);
    }
    return (
        <div className={styles.mainBlock}>
            {count}
            <button onClick={increment} className={styles.green}>+</button>
        </div>
    );
};

export {Counter};