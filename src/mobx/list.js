import { makeAutoObservable } from "mobx";
import { Provider, observer } from 'mobx-react';
import listItems from "../common/listItems";


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

        for (let item of listItems) {
            allItems = allItems.concat([item]);
            store.setItems(allItems);
        }
    }

    const ListView = observer(({ store }) => (
        <div className="wrapper">
            <ul>
                <button onClick={addAll}>Start</button>
                {store.getItems.map(item => (
                    <li key={item}>{item}</li>
                ))}
            </ul>
        </div>
    ));

    return <ListView store={store}/>;
}

export default List