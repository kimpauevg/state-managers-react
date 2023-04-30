import listItems from '../common/listItems'
import React from 'react'
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
