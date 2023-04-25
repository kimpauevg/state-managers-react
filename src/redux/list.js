import { createStore } from "redux";
import listItems from "../common/listItems";
import { useSelector, useDispatch, Provider } from "react-redux";
import React from "react";


const initialState = {
    items: []
};

function listStore(state = initialState, action) {
    switch (action.type) {
        case "add":
            return {
                ...state,
                items: state.items.concat([action.item]),
            };
        default:
            return state;
    }
}

function ListView(store) {
    const items = useSelector((state) => state.items);
    const dispatch = useDispatch();

    const addAll = () => {
        for (let item of listItems) {
            dispatch({ type: "add", item: item });
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

