/* eslint-disable react/prop-types */
import { getMatrixElems, generateMatrixElems } from '../common/matrixElems'
import React from 'react'
import { createEvent, createStore } from 'effector'
import { useStore } from 'effector-react'

const setItems = createEvent()
const itemsStore = createStore([]).on(setItems, (state, result) => result)

export default function Matrix (props) {
  const items = useStore(itemsStore)

  function addAll () {
    setItems(generateMatrixElems(props.size))
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
