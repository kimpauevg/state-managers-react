/* eslint-disable react/prop-types */
import { getMatrixElems, generateMatrixElems } from '../common/matrixElems'
import React from 'react'
import { createStoreon } from 'storeon'
import { StoreContext, useStoreon } from 'storeon/react'

const itemsStore = store => {
  store.on('@init', () => ({ items: [] }))
  store.on('set', (old, { items }) => {
    return { items }
  })
}

function MatrixView (props) {
  const { dispatch, items } = useStoreon('items')

  function addAll () {
    dispatch('set', { items: generateMatrixElems(props.size) })
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
  const store = createStoreon([itemsStore])

  return (
    <StoreContext.Provider value={store}>
      <MatrixView {...props} />
    </StoreContext.Provider>
  )
}

export default Matrix
