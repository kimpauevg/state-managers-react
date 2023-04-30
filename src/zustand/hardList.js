import React from 'react'
import hardListItems from '../common/hardListItems'
import fibonacci from '../common/fibonacci'
import { create } from 'zustand'

const useItemsStore = create((set) => ({
  items: [],
  setItems: (items) => set((state) => ({ ...state, items }))
}))

function List () {
  const items = useItemsStore((state) => state.items)
  const setItems = useItemsStore((state) => state.setItems)

  function addAll () {
    let allItems = []

    Promise.all(hardListItems.map(async (item) => {
      item.i = allItems.length

      allItems = allItems.concat(item)

      setItems(allItems)

      console.log('The ' + item.i + ' fibonacci number is ' + fibonacci(item.fibonacci_i))
    }))
  }

  return (
    <div className='wrapper'>
      <button onClick={addAll}>Start</button>
      <ul>
        {items.map(item => (
          <li key={item.i}>Item #{item.i}</li>
        ))}
      </ul>
    </div>
  )
}

export default List
