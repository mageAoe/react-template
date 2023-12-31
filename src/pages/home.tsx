import React, { useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import SvgIcons from '@/components/SvgIcons'
import './style.scss'
import { Icon, listIcons, getIcon } from '@iconify/react'
import home from '@iconify-icons/mdi/home'
import { Button, Space } from 'antd'

const Index = () => {
  // 路由跳转
  const router = useNavigate()

  function toDetail() {
    router('/AsyncDetail')
  }

  function toRecord() {
    router('/record')
  }

  function toTest() {
    router('/test')
  }

  const destinationDom = useRef<HTMLDivElement>(null)

  // const refList = [] as HTMLDivElement[];

  // function getRef(dom: HTMLDivElement | null) {
  //   if (dom) refList.push(dom);
  // }

  // console.log(import.meta.env.VITE_SHAREURL);
  // console.log(import.meta.env.MODE);
  // console.log(listIcons());
  // const data = getIcon('mdi-light:home');
  // console.log(data);
  return (
    <>
      <div className='text-red flex flex-col flex-items-center'>
        <div ref={destinationDom} className='destination'>
          123
        </div>

        <div className='mb-10'>
          <SvgIcons iconClass='react' size='40' />
          <Icon icon='mdi-light:home' style={{ color: 'red', fontSize: '32px' }} />
          <Icon icon='mdi:home' style={{ color: 'red', fontSize: '32px' }} />
          <Icon icon={home} style={{ color: 'red', fontSize: '32px' }} />
        </div>

        <div className='mb-10'>
          <Space wrap>
            <Button type='primary'>Primary Button</Button>
            <Button>Default Button</Button>
            <Button type='dashed'>Dashed Button</Button>
            <Button type='text'>Text Button</Button>
            <Button type='link'>Link Button</Button>
          </Space>
        </div>

        {/* 注意样式，position: fixed */}
        <div className='transition-div'></div>
        <div className='box p-10 ma-auto'>home 页</div>
        <br />
        <button onClick={toDetail}>去 detail</button>
        <br />
        <button onClick={toRecord}>去 record</button>
        <br />
        <button onClick={toTest}>去 test</button>
      </div>
    </>
  )
}

export default Index
