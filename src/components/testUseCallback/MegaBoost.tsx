import React from 'react'

type Props = {
  handleClick: () => void
}

function MegaBoost({ handleClick }: Props) {
  //   console.log('Render MegaBoost')

  return (
    <button className='bg-red pa-10' onClick={handleClick}>
      MEGA BOOST!
    </button>
  )
}

export default React.memo(MegaBoost)
