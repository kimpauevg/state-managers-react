import { createStore } from "redux";
import { useSelector, useDispatch, Provider } from "react-redux";
import React from "react";
import fibonacci from "../common/fibonacci";
import hardListItems from "../common/hardListItems";


const initialState = {
    items: []
};

function listStore(state = initialState, action) {
    switch (action.type) {
        case "add":
            return {
                ...state,
                items: state.items.concat([{
                    i: state.items.length,
                    fibonacci: fibonacci(action.item.fibonacci_i),
                }]),
            };
        default:
            return state;
    }
}

function ListView() {
    const items = useSelector((state) => state.items);
    const dispatch = useDispatch();

    const addAll = () => {
        for (let item of hardListItems) {
            dispatch({ type: "add", item: item });
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
    );
}

function List() {
    const store = createStore(listStore);
    return (
        <Provider store={store}>
            <ListView></ListView>
        </Provider>
    );
}

export default List;

