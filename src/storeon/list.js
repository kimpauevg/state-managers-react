import React from 'react'
import listItems from '../common/listItems'
import { createStoreon } from 'storeon'
import { StoreContext, useStoreon } from 'storeon/react'

const itemsStore = store => {
  store.on('@init', () => ({ items: [] }))
  store.on('add', ({ items }, { item }) => {
    return { items: items.concat([item]) }
  })
}

function ListView () {
  const { dispatch, items } = useStoreon('items')

  function addAll () {
    for (const item of listItems) {
      dispatch('add', { item })
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

function List () {
  const store = createStoreon([itemsStore])

  return (
    <StoreContext.Provider value={store}>
      <ListView />
    </StoreContext.Provider>
  )
}

export default List
