import React, { useRef, useEffect, useState } from 'react'
import styles from './detail.module.scss'
import { useNavigate, NavigateFunction } from 'react-router-dom'
import { RedoOutlined, ExpandAltOutlined, ColumnWidthOutlined } from '@ant-design/icons'

const Detail: React.FC = () => {
  const router: NavigateFunction = useNavigate()
  const toDetail = (): void => router('/home')
  // 元素被聚焦
  const [isFouc, setIsFouc] = useState(false)
  // 获取需要操作的 dom 元素
  const boxDom = useRef<HTMLDivElement>(null)
  const imgDom = useRef<HTMLImageElement>(null)
  const imgBoxDom = useRef<HTMLImageElement>(null)
  const rightTopDom = useRef(null)
  const leftBottomDom = useRef<HTMLDivElement>(null)
  const rightBottomDom = useRef<HTMLDivElement>(null)
  // 镜像翻转
  let flat = -1
  const scaleChange = (e: any) => {
    e.stopPropagation()
    imgDom.current!.style.transform = `scaleX(${flat})`
    flat = -flat
  }

  const count = useRef(0)
  const sa = useRef(0)
  const sc = useRef(0)
  const angle = useRef(0) // 旋转角度
  const rotateDeg = useRef(0) // 旋转角度
  //配置对象
  const config = {
    idDrag: false,
    isRotate: false,
    isScale: false,
    lastX: 0, // 偏移量x
    lastY: 0 // 偏移量y
  }
  // A,B,C分别代表中心点，起始点，结束点坐标
  const pointA = { X: 0, Y: 0 }
  const pointB = { X: 0, Y: 0 }
  const pointC = { X: 0, Y: 0 }
  let init = { X: 0, Y: 0, count: 0 }
  const mPointB = { X: 0, Y: 0, flag: false } // 移动的B点距离

  const drag = (event: any) => {
    event.preventDefault()
    event.stopPropagation()
    config.idDrag = true
    if (init.count < 1) {
      init = {
        X: pointA.X,
        Y: pointA.Y,
        count: 1
      }
    }
    const { clientX, clientY } = event
    // 计算鼠标点击位置相对于元素左上角的左边和上边距离
    config.lastX = clientX - event.currentTarget.offsetLeft
    config.lastY = clientY - event.currentTarget.offsetTop
    document?.addEventListener('mousemove', move)
  }

  const move = (event: any) => {
    if (config.idDrag) {
      const { clientX, clientY } = event
      let left = clientX - config.lastX
      let top = clientY - config.lastY
      // 边界判断
      if (left < 0) {
        left = 0
      }
      if (left > document.documentElement.clientWidth - boxDom.current!.clientWidth) {
        left = document.documentElement.clientWidth - boxDom.current!.clientWidth
      }
      if (top < 0) {
        top = 0
      }
      if (top > document.documentElement.clientHeight - boxDom.current!.clientHeight) {
        top = document.documentElement.clientHeight - boxDom.current!.clientHeight
      }
      boxDom.current!.style.left = left + 'px'
      boxDom.current!.style.top = top + 'px'

      // 移动后,重新计算元素中心点 元素1/2自身宽高 + 元素的定位
      pointA.X = boxDom.current!.clientWidth / 2 + boxDom.current!.offsetLeft
      pointA.Y = boxDom.current!.clientHeight / 2 + boxDom.current!.offsetTop

      if (count.current > 0) {
        // 每次移动按下的点不一致,有误差,使用中心点来计算
        mPointB.X = pointA.X - init.X
        mPointB.Y = pointA.Y - init.Y
        mPointB.flag = true
      }
    }
  }

  const cloaseDraw = () => {
    config.idDrag = false
    // 移除鼠标移动或手势移动监听器
    document?.removeEventListener('mousemove', move)
  }

  const rotateDown = (e: any) => {
    e.preventDefault()
    e.stopPropagation()
    config.isRotate = true
    pointB.X = e.pageX
    pointB.Y = e.pageY

    rotateDeg.current = Number(imgBoxDom.current?.getAttribute('rotate'))
    document?.addEventListener('mousemove', rotate)
  }

  const rotate = (e: any) => {
    e.preventDefault()
    if (config.isRotate) {
      pointC.X = e.pageX
      pointC.Y = e.pageY // 获取结束点坐标

      // 计算出旋转角度
      const AB = { X: 0, Y: 0 }
      const AC = { X: 0, Y: 0 }
      AB.X = pointB.X - pointA.X
      AB.Y = pointB.Y - pointA.Y
      AC.X = pointC.X - pointA.X
      AC.Y = pointC.Y - pointA.Y // 分别求出AB,AC的向量坐标表示

      const direct = AB.X * AC.Y - AB.Y * AC.X // AB与AC叉乘求出逆时针还是顺时针旋转
      const lengthAB = Math.sqrt(
          Math.pow(pointA.X - pointB.X, 2) + Math.pow(pointA.Y - pointB.Y, 2)
        ),
        lengthAC = Math.sqrt(Math.pow(pointA.X - pointC.X, 2) + Math.pow(pointA.Y - pointC.Y, 2)),
        lengthBC = Math.sqrt(Math.pow(pointB.X - pointC.X, 2) + Math.pow(pointB.Y - pointC.Y, 2))
      const cosA =
        (Math.pow(lengthAB, 2) + Math.pow(lengthAC, 2) - Math.pow(lengthBC, 2)) /
        (2 * lengthAB * lengthAC) //   余弦定理求出旋转角
      const angleA = Math.round((Math.acos(cosA) * 180) / Math.PI)

      if (direct < 0) {
        angle.current = -angleA //叉乘结果为负表示逆时针旋转， 逆时针旋转减度数
      } else {
        angle.current = angleA //叉乘结果为正表示顺时针旋转，顺时针旋转加度数
      }

      if (rotateDeg.current) {
        angle.current += rotateDeg.current
      }

      if (sc.current) {
        imgBoxDom.current!.style.transform = `rotate(${angle.current}deg) scale(${sc.current})`
      } else {
        imgBoxDom.current!.style.transform = `rotate(${angle.current}deg)`
      }
      // imgBoxDom.current!.style.transform = `rotate(${angle.current}deg)`
      imgBoxDom.current?.setAttribute('rotate', angle.current + '')
    }
  }

  const cloaseRotate = () => {
    config.isRotate = false
    // 移除鼠标移动或手势移动监听器
    document?.removeEventListener('mousemove', rotate)
  }

  // 收缩
  const scaleDown = (e: any) => {
    e.preventDefault()
    e.stopPropagation()
    config.isScale = true
    pointB.X = e.pageX
    pointB.Y = e.pageY
    // 以鼠标第一次落下的点为起点

    if (count.current < 1) {
      const scalX1 = pointB.X - pointA.X
      const scalY1 = pointB.Y - pointA.Y
      sa.current = Math.sqrt(scalX1 * scalX1 + scalY1 * scalY1)
      count.current++
    }
    document?.addEventListener('mousemove', scale)
  }

  const scale = (e: any) => {
    e.preventDefault()
    e.stopPropagation()

    if (config.isScale) {
      // 获取结束点坐标
      pointC.X = e.pageX
      pointC.Y = e.pageY
      // 计算每次移动元素的半径变化,用作拉伸
      const scalX = pointC.X - pointA.X
      const scalY = pointC.Y - pointA.Y
      // 计算出拉伸比例
      const ss = Math.sqrt(scalX * scalX + scalY * scalY)
      sc.current = ss / sa.current
      if (angle.current) {
        imgBoxDom.current!.style.transform = `rotate(${angle.current}deg) scale(${sc.current})`
      } else {
        imgBoxDom.current!.style.transform = `scale(${sc.current})`
      }
    }
  }

  const cloaseScale = (e: any) => {
    e.preventDefault()
    e.stopPropagation()
    config.isScale = false
    // 移除鼠标移动或手势移动监听器
    document?.removeEventListener('mousemove', scale)
  }

  useEffect(() => {
    // 元素中心点 元素1/2自身宽高 + 元素的定位
    pointA.X = boxDom.current!.clientWidth / 2 + boxDom.current!.offsetLeft
    pointA.Y = boxDom.current!.clientHeight / 2 + boxDom.current!.offsetTop
    // 聚焦
    imgDom.current?.addEventListener('click', eleFouc)

    if (isFouc) {
      // 拖拽
      boxDom.current?.addEventListener('mousedown', drag)
      document?.addEventListener('mouseup', cloaseDraw)
      // 旋转
      leftBottomDom.current?.addEventListener('mousedown', rotateDown)
      document?.addEventListener('mouseup', cloaseRotate)
      // 旋转
      rightBottomDom.current?.addEventListener('mousedown', scaleDown)
      document?.addEventListener('mouseup', cloaseScale)
    }
  }, [isFouc])

  // 元素聚焦
  const eleFouc = (e: any) => {
    e.stopPropagation()
    setIsFouc(true)
  }
  // 取消聚焦
  const cancleFouc = () => {
    setIsFouc(false)
    boxDom.current?.removeEventListener('mousedown', drag)
  }

  return (
    <React.Fragment>
      <div className={styles.container} onClick={cancleFouc}>
        <div className={styles.box} ref={boxDom}>
          <div className={styles.imgBox} ref={imgBoxDom}>
            {isFouc && (
              <div className={styles.leftBottom} ref={leftBottomDom}>
                <RedoOutlined />
              </div>
            )}
            {isFouc && (
              <div className={styles.rightTop} ref={rightTopDom} onClick={scaleChange}>
                <ColumnWidthOutlined style={{ fontSize: 30 }} />
              </div>
            )}
            {/* {isFouc && <RedoOutlined className={styles.leftTop} />} */}
            {isFouc && (
              <div className={styles.rightBottom} ref={rightBottomDom}>
                <ExpandAltOutlined style={{ fontSize: 30 }} />
              </div>
            )}
            <img
              src='src/assets/image/2.jpg'
              alt='Description'
              className={styles.img}
              ref={imgDom}
            />
          </div>
        </div>
        detail
        <button onClick={toDetail}>去 home</button>
      </div>
    </React.Fragment>
  )
}

export default Detail
