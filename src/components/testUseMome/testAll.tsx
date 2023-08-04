import { useMemo, useState, useEffect } from 'react'

function TestUseMemo() {
  const [selectedNum, setSelectedNum] = useState<number>(100)

  // `time` 是一个状态变量，每秒钟变化一次，所以它总是与当前时间同步
  const time = useTime()
  // const allPrimes = []
  // for (let counter = 2; counter < selectedNum; counter++) {
  //   if (isPrime(counter)) {
  //     allPrimes.push(counter)
  //   }
  // }

  const allPrimes = useMemo((): number[] => {
    const result: number[] = []
    for (let counter = 2; counter < selectedNum; counter++) {
      if (isPrime(counter)) {
        result.push(counter)
      }
    }
    return result
  }, [selectedNum])

  function useTime() {
    const [time, setTime] = useState(new Date())

    useEffect(() => {
      const intervalId = window.setInterval(() => {
        setTime(new Date())
      }, 1000)

      return () => {
        window.clearInterval(intervalId)
      }
    }, [])

    return time
  }

  function isPrime(n: number) {
    const max = Math.ceil(Math.sqrt(n))

    if (n === 2) {
      return true
    }

    for (let counter = 2; counter <= max; counter++) {
      if (n % counter === 0) {
        return false
      }
    }

    return true
  }

  return (
    <>
      <form>
        <label htmlFor='num'>Your number:</label>
        <input
          type='number'
          value={selectedNum}
          onChange={event => {
            // 为了防止电脑烧起来，我们限制一下传入的值最大为 100k
            const num = Math.min(100_000, Number(event.target.value))

            setSelectedNum(num)
          }}
        />
      </form>
      <p className='p-36'>
        There are {allPrimes.length} prime(s) between 1 and {selectedNum}:{' '}
        <span className='prime-list'>{allPrimes.join(', ')}</span>
      </p>
    </>
  )
}

export default TestUseMemo
