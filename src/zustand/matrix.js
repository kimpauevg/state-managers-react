/* eslint-disable react/prop-types */
import {getMatrixElems, generateMatrixElems} from "../common/matrixElems";
import React from "react";
import {create} from "zustand";

const useItemsStore = create((set) => ({
    items: [],
    setItems: (items) => set((state) => ({...state, items: items})),
}))

export default function Matrix(props) {
    const items = useItemsStore((state) => state.items);
    const setItems = useItemsStore((state) => state.setItems);

    function addAll() {
        setItems(generateMatrixElems(props.size));
    }

    return (
        <div className="wrapper">
            <div>
                <button onClick={addAll}>Start</button>
            </div>
            {getMatrixElems(items, props.size)}
        </div>
    );
}
