import React, { useState, useEffect } from 'react';
import listItems from "../common/listItems";

function List() {
    const [items, setItems] = useState([]);

    function addAll() {
        let allItems = [];

        for (let item of listItems) {
            allItems = allItems.concat([item]);
            setItems(allItems)
        }
    }

    return (
        <div className="wrapper">
            <ul>
                <button onClick={addAll}>Start</button>
                {items.map(item => (
                    <li key={item}>{item}</li>
                ))}
            </ul>
        </div>
    )
}

export default List