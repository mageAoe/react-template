import { useEffect, useRef } from 'react'
function App() {
  const evtName = getEventName()
  // 保存鼠标第一次按下的时候的位置
  let offsetX = 0,
    offsetY = 0
  // 限制图片可以X和Y轴可以移动的最大范围，防止溢出
  let limitX = 0,
    limitY = 0
  const birdRef = useRef<HTMLImageElement>(null)

  useEffect(() => {
    const { width, height } = birdRef.current as HTMLImageElement
    limitX = document.documentElement.clientWidth - width
    limitY = document.documentElement.clientHeight - height

    birdRef.current!.addEventListener(evtName.start, (event: any) => {
      // 监听鼠标指针相对于可视窗口移动的距离
      // 注意移动事件要绑定在document元素上，防止移动过快,位置丢失
      document.addEventListener(evtName.move, moveAt)
    })

    // 鼠标指针停止移动时,释放document上绑定的移动事件
    // 不然白白产生性能开销
    document.addEventListener(evtName.end, () => {
      document.removeEventListener(evtName.move, moveAt)
    })

    // 移动元素
    function moveAt({ movementX, movementY }: any) {
      const { offsetX, offsetY } = getSafeOffset({ movementX, movementY })

      window.requestAnimationFrame(() => {
        birdRef.current!.style.cssText = `left:${offsetX}px;top:${offsetY}px;`
      })
    }
  }, [])

  // 移动元素
  function getSafeOffset({ movementX, movementY }: any) {
    offsetX += movementX
    offsetY += movementY

    // 防止拖拽元素被甩出可视区域
    if (offsetX > limitX) {
      offsetX = limitX
    }

    if (offsetX < 0) {
      offsetX = 0
    }

    if (offsetY > limitY) {
      offsetY = limitY
    }

    if (offsetY < 0) {
      offsetY = 0
    }
    return {
      offsetX,
      offsetY
    }
  }

  // 区分是移动端还是PC端移动事件
  function getEventName() {
    if ('ontouchstart' in window) {
      return {
        start: 'touchstart',
        move: 'touchmove',
        end: 'touchend'
      }
    } else {
      return {
        start: 'pointerdown',
        move: 'pointermove',
        end: 'pointerup'
      }
    }
  }
  return (
    <>
      <img className='absolute w-30 h-30' ref={birdRef} src='/src/assets/image/2.jpg' alt='' />
    </>
  )
}

export default App
