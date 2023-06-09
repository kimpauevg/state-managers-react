import React from 'react'
import colors from './colors'

function chunk (items, size) {
  if (items.length === 0) {
    return []
  }

  items.reverse()

  const chunks = []

  do {
    const chunk = []

    while (chunk.length < size && items.length > 0) {
      chunk.push(items.pop())
    }

    chunks.push(chunk)
  } while (items.length > 0)

  return chunks
}

export function getMatrixElems (items, size) {
  if (items.length === 0) {
    return []
  }

  const chunks = chunk(items.map(item => (
    <div key={item.id} style={({ background: item.color, width: '10px', height: '10px', display: 'inline-block' })} />
  )), size)

  return chunks
    .map((chunk, id) => <div key={'chunk' + id} style={({ height: '10px', width: 'auto', whiteSpace: 'nowrap' })}>{chunk}</div>)
}

export function generateMatrixElems (size) {
  let allItems = []

  while (allItems.length < size ** 2) {
    const color = colors[allItems.length % colors.length]
    allItems = allItems.concat([{
      id: allItems.length,
      color
    }])
  }

  return allItems
}
