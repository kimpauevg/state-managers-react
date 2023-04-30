import React, { useState } from 'react'
import hardListItems from '../common/hardListItems'
import fibonacci from '../common/fibonacci'

function List () {
  const [items, setItems] = useState([])

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
