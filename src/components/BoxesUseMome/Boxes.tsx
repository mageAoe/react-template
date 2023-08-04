import React from 'react'

interface Props {
  boxes: any[]
}

function Boxes({ boxes }: Props) {
  return (
    <div className='flex mb-10'>
      {boxes.map((boxStyles, index) => (
        <div key={index} className='box' style={boxStyles} />
      ))}
    </div>
  )
}

export default React.memo(Boxes)
