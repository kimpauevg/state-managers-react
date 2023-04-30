import { createStore } from 'redux'
import listItems from '../common/listItems'
import { useSelector, useDispatch, Provider } from 'react-redux'
import React from 'react'

const initialState = {
  items: []
}

function listStore (state = initialState, action) {
  switch (action.type) {
    case 'add':
      return {
        ...state,
        items: state.items.concat([action.item])
      }
    default:
      return state
  }
}

function ListView () {
  const items = useSelector((state) => state.items)
  const dispatch = useDispatch()

  function addAll () {
    for (const item of listItems) {
      dispatch({ type: 'add', item })
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
  const store = createStore(listStore)
  return (
    <Provider store={store}>
      <ListView />
    </Provider>
  )
}

export default List
