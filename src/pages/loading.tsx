import React from 'react';
import { Space, Spin } from 'antd';

function Loading() {
  // 如何获取数组类型的元素类型
  type ListType = { a: number; b: string }[];
  const list = [{}] as ListType;

  // 法一
  type ArrayItem<T> = T extends Array<infer R> ? R : never;

  type Item = ArrayItem<ListType>;

  // 法二
  // TaskList['task'][number];

  // type Item = ListType[number];

  return (
    <div>
      Loading...
      <Space size='middle'>
        <Spin size='large' />
      </Space>
    </div>
  );
}

export default Loading;
