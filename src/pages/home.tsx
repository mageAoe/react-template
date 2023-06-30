import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SvgIcons from '@/components/SvgIcons';
import './style.scss';

const Index = () => {
  // 路由跳转
  const router = useNavigate();

  function toDetail() {
    router('/detail');
  }

  function toRecord() {
    router('/record');
  }

  const destinationDom = useRef<HTMLDivElement>(null);

  const refList = [] as HTMLDivElement[];

  function getRef(dom: HTMLDivElement | null) {
    if (dom) refList.push(dom);
  }

  const [transitionStyle, setTransitionStyle] = useState({
    display: 'none',
    top: 0,
    left: 0,
    transform: 'scale(0)',
    transition: 'none'
  });

  const canGather = useRef(true);

  function gather(index: number) {
    if (!canGather.current) return;
    canGather.current = false;

    const target = refList[index].getBoundingClientRect();
    const destination = destinationDom.current!.getBoundingClientRect();

    setTransitionStyle({
      display: 'block',
      top: target.top,
      left: target.left,
      transform: 'scale(1)',
      transition: 'none'
    });

    setTimeout(() => {
      setTransitionStyle({
        display: 'block',
        top: destination.top,
        left: destination.left,
        transform: 'scale(0.5)',
        transition: 'all .6s linear'
      });
    }, 0);
    setTimeout(() => {
      setTransitionStyle({
        display: 'none',
        top: 0,
        left: 0,
        transform: 'scale(1)',
        transition: 'none'
      });
      canGather.current = true;
    }, 600);
  }

  // console.log(import.meta.env.VITE_SHAREURL);
  // console.log(import.meta.env.MODE);

  return (
    <>
      <div ref={destinationDom} className='destination'></div>

      <SvgIcons iconClass='react' size='40' />

      {/* 注意样式，position: fixed */}
      <div className='transition-div' style={transitionStyle}></div>
      <div className='box p-10'>home 页</div>
      <br />
      <button onClick={toDetail}>去 detail</button>
      <br />
      <br />
      <button onClick={toRecord}>去 record</button>

      <div className='week'>
        {[1, 2, 3, 4, 5, 6, 7].map((item, index) => (
          <div
            ref={getRef}
            className={`day day${index + 1}`}
            key={`${item}`}
            onClick={() => gather(index)}
          >
            <div className='day-num'>第{item}天</div>
            <div className='top'>
              <SvgIcons iconClass='react' size='20' />
            </div>
            <div className='bottom'>5积分</div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Index;
