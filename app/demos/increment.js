"use client";
import { useState } from "react"; // Keep track outside component


export default function Counter() {
    const [count, setCount] = useState(0);

    const increment = () => setCount(count + 1);
    
    
    return (
        <div>
            <p>Counter: {count}</p>
            <button onClick={increment}>Increment</button>

        </div>
    )
}

