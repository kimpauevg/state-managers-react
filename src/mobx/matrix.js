/* eslint-disable react/prop-types */
import React from 'react';
import {makeAutoObservable} from "mobx";
import {observer} from "mobx-react";
import {getMatrixElems, generateMatrixElems} from "../common/matrixElems";

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

function Matrix(props) {
    function addAll() {
        store.setItems(generateMatrixElems(props.size));
    }

    const MatrixView = observer(({ store }) => {


        return <div className="wrapper">
            <div>
                <button onClick={addAll}>Start</button>
            </div>
            {getMatrixElems(store.items, props.size)}
        </div>
    });

    return <MatrixView store={store}/>;
}

export default Matrix