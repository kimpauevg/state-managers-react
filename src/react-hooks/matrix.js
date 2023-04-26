import {getMatrixElems, generateMatrixElems} from "../common/matrixElems";
import React, {useState} from "react";

export default function Matrix(props) {
    const [items, setItems] = useState([]);

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
