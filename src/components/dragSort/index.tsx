// react 拖拽排序
import React, { useState, useMemo, useRef } from 'react'
import styles from './index.module.scss'

//  每行多少列
const COLUMN = 4
//  每个元素宽度
const WIDTH = 120
//  每个元素高度
const HEIGHT = 80
// 图片左右 padding
const IMAGE_PADDING = 5

const showList = [
  {
    id: 2,
    name: 'osmo pocket',
    image: '/src/assets/image/big1.jpg'
  },
  {
    id: 4,
    name: 'mavic pro',
    image: '/src/assets/image/big2.jpg'
  },
  {
    id: 1,
    name: 'mavic mini2',
    image: '/src/assets/image/big3.jpg'
  },
  {
    id: 3,
    name: '机甲大师s1',
    image:
      'https://img2.baidu.com/it/u=2124229159,1459379647&fm=253&fmt=auto&app=120&f=JPEG?w=889&h=500'
  },
  {
    id: 0,
    name: 'mavic 2',
    image: '/src/assets/image/big4.jpg'
  }
]

function App() {
  const [list, setList] = useState(showList)
  const drapAreaRef = useRef<HTMLDivElement>(null)

  // IMPORTANT: 动画需要，需要保持一定的渲染顺序
  const sortedList = useMemo(() => list.slice().sort((a, b) => a.id - b.id), [list])
  const listHeight = useMemo(() => {
    const size = list.length
    return Math.ceil(size / COLUMN) * HEIGHT
  }, [list])

  const handleDragStart = (e: React.DragEvent<HTMLLIElement>, data: any) => null

  return (
    <>
      <div
        className={styles.wrapper}
        ref={drapAreaRef}
        style={{ width: COLUMN * (WIDTH + IMAGE_PADDING) + IMAGE_PADDING }}
      >
        <ul className={styles.list} style={{ height: listHeight }}>
          {sortedList.map((item, index) => {
            // 为了设置定位
            // const index = list.findIndex(i => i === item)
            const row = Math.floor(index / COLUMN)
            const col = index % COLUMN

            return (
              <li
                draggable
                key={item.id}
                className={styles.item}
                style={{
                  height: HEIGHT,
                  left: col * (WIDTH + IMAGE_PADDING),
                  top: row * HEIGHT,
                  padding: `0 ${IMAGE_PADDING}px`
                }}
                data-id={item.id}
                onDragStart={e => handleDragStart(e, item)}
              >
                <img src={item.image} alt={item.name} width={WIDTH} />
              </li>
            )
          })}
        </ul>
      </div>
    </>
  )
}

export default App
