interface Props {
  time: Date
}

function Clock({ time }: Props) {
  return <p className='clock'>{time.getSeconds()}</p>
}

export default Clock
