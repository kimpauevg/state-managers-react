import React from 'react'
import hardListItems from '../common/hardListItems'
import fibonacci from '../common/fibonacci'
import { StoreContext, useStoreon } from 'storeon/react'
import { createStoreon } from 'storeon'

const itemsStore = store => {
  store.on('@init', () => ({ items: [] }))
  store.on('add', ({ items }, { item }) => {
    return { items: items.concat([item]) }
  })
}
function ListView () {
  const { dispatch, items } = useStoreon('items')

  function addAll () {
    Promise.all(hardListItems.map(async (item, index) => {
      item.i = index

      dispatch('add', { item })

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

function List () {
  const store = createStoreon([itemsStore])

  return (
    <StoreContext.Provider value={store}>
      <ListView />
    </StoreContext.Provider>
  )
}

export default List
