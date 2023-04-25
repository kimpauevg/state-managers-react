import { observable, action, makeObservable } from "mobx";
import listItems from "../common/listItems";

class Store {
    @observable items = [];

    constructor() {
        makeObservable(this);
    }

    @action setItems(items) {
        this.items = items;
    }
}

const store = new Store();

function List(props) {
    function addAll() {
        store.setItems(listItems)
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