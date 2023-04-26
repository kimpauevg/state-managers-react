import React from 'react';
import { makeAutoObservable } from "mobx";
import { observer } from 'mobx-react';
import hardListItems from "../common/hardListItems";
import fibonacci from "../common/fibonacci";

class Store {
    items = [];

    constructor() {
        makeAutoObservable(this);
    }
    setItems(items) {
        this.items = items;
    }

    get getItems() {
        return this.items
    }
}

const store = new Store();

function List() {
    function addAll() {
        let allItems = [];

        for (let item of hardListItems) {
            allItems = allItems.concat({
                i: allItems.length,
                fibonacci: fibonacci(item.fibonacci_i)
            });
            store.setItems(allItems);
        }
    }

    const ListView = observer(({ store }) => (
        <div className="wrapper">
            <button onClick={addAll}>Start</button>
            <ul>
                {store.getItems.map(item => (
                    <li key={item.i}>The {item.i}th Fibonacci number is {item.fibonacci}</li>
                ))}
            </ul>
        </div>
    ));

    return <ListView store={store}/>;
}

export default List