/* eslint-disable react/prop-types */
import { getMatrixElems, generateMatrixElems } from '../common/matrixElems'
import { createStore } from 'redux'
import { useSelector, useDispatch, Provider } from 'react-redux'
import React from 'react'

const initialState = {
  items: []
}

function matrixStore (state = initialState, action) {
  switch (action.type) {
    case 'add':
      return {
        ...state,
        items: action.items
      }
    default:
      return state
  }
}

function MatrixView (props) {
  const items = useSelector((state) => state.items)
  const dispatch = useDispatch()

  function addAll () {
    dispatch({ type: 'add', items: generateMatrixElems(props.size) })
  }

  return (
    <div className='wrapper'>
      <div>
        <button onClick={addAll}>Start</button>
      </div>
      {getMatrixElems(items, props.size)}
    </div>
  )
}

function Matrix (props) {
  const store = createStore(matrixStore)

  return (
    <Provider store={store}>
      <MatrixView {...props} />
    </Provider>
  )
}

export default Matrix
