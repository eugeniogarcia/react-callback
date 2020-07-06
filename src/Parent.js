import React, { useState, useCallback } from 'react';
import Children from './Children';

const Parent = () => {
    const [count, setCount] = useState(0);
    console.log("re-render parent component");

    const resetCount_conCB = useCallback(() => {
        setCount(0);
    }, [setCount]);

    const resetCount = () => {
        setCount(0);
    };

    return (
        <main>
            <p>Count: {count}</p>
            <button onClick={() => setCount(count => (count + 1))}>Incrementa</button>
            <Children reset={resetCount_conCB} mensaje="Con CB"/>
            <Children reset={resetCount} mensaje="Sin CB"/>
        </main>
    )
}

export default Parent;