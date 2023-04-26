import React, { useState } from 'react';
import hardListItems from "../common/hardListItems";
import fibonacci from "../common/fibonacci";

function List() {
    const [items, setItems] = useState([]);

    function addAll() {
        let allItems = [];

        for (let item of hardListItems) {
            allItems = allItems.concat({
                i: allItems.length,
                fibonacci: fibonacci(item.fibonacci_i)
            });

            setItems(allItems);
        }
    }

    return (
        <div className="wrapper">
            <button onClick={addAll}>Start</button>
            <ul>
                {items.map(item => (
                    <li key={item.i}>The {item.i}th Fibonacci number is {item.fibonacci}</li>
                ))}
            </ul>
        </div>
    )
}

export default List