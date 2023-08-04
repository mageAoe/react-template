import { useState } from 'react'

function PrimeCalculator() {
  const [selectedNum, setSelectedNum] = useState(100)

  const allPrimes = []
  for (let counter = 2; counter < selectedNum; counter++) {
    if (isPrime(counter)) {
      allPrimes.push(counter)
    }
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
      <p>
        There are {allPrimes.length} prime(s) between 1 and {selectedNum}:{' '}
        <span className='prime-list'>{allPrimes.join(', ')}</span>
      </p>
    </>
  )
}

export default PrimeCalculator
