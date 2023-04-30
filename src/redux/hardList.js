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
        case "set":
            return {
                ...state,
                items: state.items.concat(action.item)
            };
        default:
            return state;
    }
}

function ListView() {
    const items = useSelector((state) => state.items);
    const dispatch = useDispatch();

    function addAll() {
        Promise.all(hardListItems.map(async (item, index) => {
            item.i = index;

            dispatch({ type: "set", item: item });

            console.log('The ' + item.i + ' fibonacci number is ' + fibonacci(item.fibonacci_i));
        }));
    }

    return (
        <div className="wrapper">
            <button onClick={addAll}>Start</button>
            <ul>
                {items.map(item => (
                    <li key={item.i}>Item #{item.i}</li>
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

