import React, { useState } from 'react'
import { TreeData } from './types/typings'
import TreeNode from './components/tree-node'
function Tree() {
  const [list, setList] = useState<TreeData[]>([
    {
      id: 1,
      name: '1',
      parentID: 0,
      collapsed: false,
      checked: false,
      children: [
        {
          id: 11,
          name: '1-1',
          parentID: 1,
          collapsed: false,
          checked: false
        },
        {
          id: 12,
          name: '1-2',
          parentID: 1,
          collapsed: false,
          checked: false
        },
        {
          id: 13,
          name: '1-3',
          parentID: 1,
          collapsed: false,
          checked: false
        }
      ]
    },
    {
      id: 2,
      name: '2',
      parentID: 0,
      children: [],
      collapsed: false,
      checked: false
    },
    {
      id: 3,
      name: '3',
      parentID: 0,
      collapsed: false,
      checked: false,
      children: [
        {
          id: 31,
          name: '3-1',
          parentID: 3,
          collapsed: false,
          checked: false
        },
        {
          id: 32,
          name: '3-2',
          parentID: 3,
          collapsed: false,
          checked: false,
          children: [
            {
              id: 321,
              name: '3-2-1',
              parentID: 32,
              collapsed: false,
              checked: false
            },
            {
              id: 322,
              name: '3-2-2',
              parentID: 32,
              collapsed: false,
              checked: false
            }
          ]
        }
      ]
    },
    {
      id: 4,
      name: '4',
      parentID: 0,
      collapsed: false,
      checked: false,
      children: [
        {
          id: 41,
          name: '4-1',
          parentID: 4,
          collapsed: false,
          checked: false
        },
        {
          id: 42,
          name: '4-2',
          parentID: 4,
          collapsed: false,
          checked: false
        }
      ]
    }
  ])

  const findChildrenEle = (listData: TreeData[], item: TreeData): TreeData[] => {
    const mapList = listData.map(child => {
      if (child.id === item.id) {
        child.collapsed = !child.collapsed
      }
      if (child.children) {
        findChildrenEle(child.children, item)
      }
      return child
    })
    return mapList
  }

  const onCollapse = (item: TreeData) => {
    const mapList = findChildrenEle(list, item)
    setList(mapList)
  }
  return (
    <div className='tree'>
      <TreeNode data={list} onCollapse={onCollapse} />
    </div>
  )
}

export default Tree
