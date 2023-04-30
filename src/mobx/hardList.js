import React from 'react'
import { makeAutoObservable } from 'mobx'
import { observer } from 'mobx-react'
import hardListItems from '../common/hardListItems'
import fibonacci from '../common/fibonacci'

class Store {
  items = []

  constructor () {
    makeAutoObservable(this)
  }

  setItems (items) {
    this.items = items
  }

  get getItems () {
    return this.items
  }
}

const store = new Store()

function List () {
  function addAll () {
    let allItems = []

    Promise.all(hardListItems.map(async (item) => {
      item.i = allItems.length

      allItems = allItems.concat(item)

      store.setItems(allItems)

      console.log('The ' + item.i + ' fibonacci number is ' + fibonacci(item.fibonacci_i))
    }))
  }

  const ListView = observer(({ store }) => (
    <div className='wrapper'>
      <button onClick={addAll}>Start</button>
      <ul>
        {store.getItems.map(item => (
          <li key={item.i}>Item #{item.i}</li>
        ))}
      </ul>
    </div>
  ))

  return <ListView store={store} />
}

export default List
