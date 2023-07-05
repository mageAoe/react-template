import React, { useRef, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import style from './record.module.scss'

const Record: React.FC = () => {
  const router = useNavigate()
  const toDetail = () => router('/home')

  // 保存上次绘制的 偏移量
  const config = {
    lastX: 0, // 偏移量
    lastY: 0
  }

  // 判断是否为移动端
  const mobileStatus = /Mobile|Android|iPhone/i.test(navigator.userAgent)
  // 创建canvas对象
  let canvas: HTMLCanvasElement | null = null
  let ctx: CanvasRenderingContext2D | null = null
  const parentDom = useRef<HTMLDivElement>(null)

  const init = () => {
    // parentDom.current
    canvas = document.createElement('canvas')
    canvas.width = 600
    canvas.height = 300
    parentDom.current?.appendChild(canvas)
    canvas.style.border = '1px solid #000'

    ctx = canvas.getContext('2d') as CanvasRenderingContext2D
    // 设置填充背景色
    ctx.fillStyle = '#ffffff'
    // 绘制填充矩形
    ctx.fillRect(0, 0, canvas.width, canvas.height)
  }

  // 鼠标移动事件
  const donwEvent = (event: any) => {
    // 获取偏移量及坐标
    const { offsetX, offsetY } = mobileStatus ? event.touches[0] : event
    // 记录按下时的偏移量
    config.lastX = offsetX
    config.lastY = offsetY

    // 监听 鼠标移动或手势移动
    ;(parentDom.current as HTMLDivElement).addEventListener(
      mobileStatus ? 'touchmove' : 'mousemove',
      draw
    )
  }

  const draw = (event: any) => {
    // 获取当前坐标点位
    const { offsetX, offsetY } = mobileStatus ? event.changedTouches[0] : event
    // 清除以上一次 beginPath 之后的所有路径，进行绘制
    ctx?.beginPath()
    ctx!.lineWidth = 5
    ctx!.strokeStyle = 'red'
    ctx!.lineCap = 'round'
    ctx!.lineJoin = 'round'
    // 设置画线起始点位
    ctx?.moveTo(config.lastX, config.lastY)
    // 根据坐标点位移动添加线条
    ctx?.lineTo(offsetX, offsetY) // 绘制
    ctx?.stroke()
    // 保存最后一次位置
    config.lastX = offsetX
    config.lastY = offsetY
  }

  const cloaseDraw = () => {
    // 结束绘制
    ctx?.closePath()
    // 移除鼠标移动或手势移动监听器
    ;(parentDom.current as HTMLDivElement).removeEventListener('mousemove', draw)
  }

  const clearCnavas = () => {
    ctx?.clearRect(0, 0, canvas!.width, canvas!.height)
  }

  const save = () => {
    const date = Date.now().toString()
    const a = document.createElement('a') as HTMLAnchorElement
    a.href = canvas?.toDataURL('image/png') as string
    a.download = `${date}.png`
    a.click()
  }

  useEffect(() => {
    init()
    // 创建鼠标/手势按下监听器
    ;(parentDom.current as HTMLDivElement).addEventListener(
      mobileStatus ? 'touchstart' : 'mousedown',
      donwEvent
    )
    ;(parentDom.current as HTMLDivElement).addEventListener(
      mobileStatus ? 'touchend' : 'mouseup',
      cloaseDraw
    )
  }, [])

  return (
    <>
      <div ref={parentDom} id={style.parent}></div>
      <button onClick={toDetail}>去 home</button>
      <button onClick={save}>保存</button>
      <button onClick={clearCnavas}>清除</button>
    </>
  )
}

export default Record
