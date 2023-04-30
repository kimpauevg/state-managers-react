import listItems from '../common/listItems'
import React from 'react'
import { createEvent, createStore } from 'effector'
import { useStore } from 'effector-react'

const setItems = createEvent()

const itemsStore = createStore([]).on(setItems, (state, result) => result)

function List () {
  const items = useStore(itemsStore)

  function addAll () {
    let allItems = []

    for (const item of listItems) {
      allItems = allItems.concat([item])

      setItems(allItems)
    }
  }

  return (
    <div className='wrapper'>
      <button onClick={addAll}>Start</button>
      <ul>
        {items.map(item => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  )
}

export default List
