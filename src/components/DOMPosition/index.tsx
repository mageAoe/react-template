import { useEffect, useRef } from 'react'
function App() {
  // window.screen.width  : 屏幕的宽度
  // window.devicePixelRatio ： 设备像素比  是由笔记本电脑屏幕的缩放设置决定的，如果设置成100%, 此时window.screen.width与笔记本电脑的显示器分辨率X轴方向的数值一致,
  // 显示设备宽度物理像素值 = window.screen.width * window.devicePixelRatio;

  // scrollWidth, scrollLeft, clientWidth关系
  //   scrollWidth(滚动宽度,包含滚动条的宽度)=scrollLeft(左边卷去的距离)+clientWidth(可见部分宽度);
  // 同理
  // scrollHeight(滚动高度,包含滚动条的高度)=scrollTop(上边卷去的距离)+clientHeight(可见部分高度);

  // offsetWidth和clientWidth的关系
  // rect元素的clientWidth=200px(自身宽度) + 20px(左右padding) = 220px
  // rect元素的offsetWidth=200px(自身宽度) + 20px(左右padding) + 2px(左右boder) = 222px

  // event.offsetX、event.offsetY 鼠标相对于事件源元素（srcElement）的X,Y坐标，
  // event.clientX、event.clientY 鼠标相对于浏览器窗口可视区域的X，Y坐标（窗口坐标），可视区域不包括工具栏和滚动偏移量。
  // event.pageX、event.pageY 鼠标相对于文档坐标的x,y坐标，文档坐标系坐标 ＝ 视口坐标系坐标 ＋ 滚动的偏移量
  // event.screenX、event.screenY鼠标相对于用户显示器屏幕左上角的X,Y坐标

  // movementX和movementY的含义
  // MouseEvent.movementX/movementX是一个相对偏移量。
  //   返回当前位置与上一个mousemove事件之间的水平/垂直距离。以当前位置为基准, 鼠标向左移动, movementX就是负值，向右移动，movementX就是正值。
  //   鼠标向上移动,movementY就是负值，向下移动，movementY就是正值。数值上，它们等于下面的计算公式。 这两个值在设置拖拽距离的时候高频使用，用起来很方便。

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
      event.preventDefault()
      event.stopPropagation()
      const { clientX, clientY } = event
      // 计算鼠标点击位置相对于元素左上角的左边和上边距离
      // offsetLeft 是元素的外边框 到浏览器左边的距离
      offsetX = clientX - event.currentTarget.offsetLeft
      offsetY = clientY - event.currentTarget.offsetTop

      // 注意移动事件要绑定在document元素上，防止移动过快,位置丢失
      document.addEventListener(evtName.move, moveAt)
    })

    // 鼠标指针停止移动时,释放document上绑定的移动事件
    // 不然白白产生性能开销
    document.addEventListener(evtName.end, () => {
      document.removeEventListener(evtName.move, moveAt)
    })

    // 移动元素
    function moveAt({ clientX, clientY }: any) {
      let left = clientX - offsetX
      let top = clientY - offsetY

      // 防止拖拽元素被甩出可视区域
      if (left > limitX) {
        left = limitX
      }

      if (left < 0) {
        left = 0
      }

      if (top > limitY) {
        top = limitY
      }

      if (top < 0) {
        top = 0
      }

      birdRef.current!.style.left = left + 'px'
      birdRef.current!.style.top = top + 'px'
    }
  }, [])

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
        start: 'mousedown',
        move: 'mousemove',
        end: 'mouseup'
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
