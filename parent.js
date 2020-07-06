import React from "react";

const Parent () => {
    const [count, setCount] = useState(0);
    console.log("re-render parent component");

    const resetCount = useCallback(() => {
    setCount(0);
}, [setCount]);

    return (
        <main>
            <p>Count: {count}</p>
            <button onClick={() => setCount(count => (count + 1))}>Increment</button>
            <Child reset={resetCount} />
        </main>
    )
}