import React from 'react'
import Clock from '@/components/testUseMome/Clock'
import PrimeCalculator from '@/components/testUseMome/PrimeCalculator'

// 将 PrimeCalculator 转换为纯组件
const PurePrimeCalculator = React.memo(PrimeCalculator)

function App() {
  const time = useTime()

  // console.log(time)

  const getBackgroundColorFromTime = (time: Date) => {
    const hours = time.getSeconds()

    if (hours < 20) {
      // A light yellow for mornings
      return 'hsl(50deg 100% 90%)'
    } else if (hours < 40) {
      // Dull blue in the afternoon
      return 'hsl(220deg 60% 92%)'
    } else {
      // Deeper blue at night
      return 'hsl(220deg 100% 80%)'
    }
  }

  // 基于当前时间动态计算一个背景颜色
  const backgroundColor = getBackgroundColorFromTime(time)

  function useTime() {
    const [time, setTime] = React.useState(new Date())

    React.useEffect(() => {
      const intervalId = window.setInterval(() => {
        setTime(new Date())
      }, 1000)

      return () => {
        window.clearInterval(intervalId)
      }
    }, [])

    return time
  }

  return (
    <>
      <div style={{ backgroundColor }}>
        <Clock time={time} />
        <PurePrimeCalculator />
      </div>
    </>
  )
}

export default App
