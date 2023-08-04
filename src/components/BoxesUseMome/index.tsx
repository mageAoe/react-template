import React, { useState, useRef, useMemo } from 'react'
import Boxes from './Boxes'

function App() {
  const [name, setName] = useState('')
  const [boxWidth, setBoxWidth] = useState(1)
  const id = React.useId()
  // Try changing some of these values!
  //   const boxes = useRef([
  //     { flex: boxWidth, background: 'hsl(345deg 100% 50%)' },
  //     { flex: 3, background: 'hsl(260deg 100% 40%)' },
  //     { flex: 1, background: 'hsl(50deg 100% 60%)' }
  //   ])

  const boxes = useMemo(
    () => [
      { flex: boxWidth, background: 'hsl(345deg 100% 50%)' },
      { flex: 3, background: 'hsl(260deg 100% 40%)' },
      { flex: 1, background: 'hsl(50deg 100% 60%)' }
    ],
    [boxWidth]
  )

  return (
    <>
      <Boxes boxes={boxes} />

      <section className='flex flex-col'>
        <label htmlFor={`${id}-name`}>Name:</label>
        <input
          id={`${id}-name`}
          type='text'
          value={name}
          onChange={event => {
            setName(event.target.value)
          }}
        />
        <label htmlFor={`${id}-box-width`}>First box width:</label>
        <input
          id={`${id}-box-width`}
          type='range'
          min={1}
          max={5}
          step={0.01}
          value={boxWidth}
          onChange={event => {
            setBoxWidth(Number(event.target.value))
          }}
        />
      </section>
    </>
  )
}

export default App
