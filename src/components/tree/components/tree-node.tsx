import React, { useState } from 'react'
import { TreeData, Props } from '../types/typings'
import style from './index.module.scss'
import { CaretDownOutlined, CaretRightOutlined } from '@ant-design/icons'

function TreeNode(props: Props) {
  const { data } = props
  const [checkedKeys, setCheckedKeys] = useState<number[]>([])
  const onCollapsed = (item: TreeData) => {
    props.onCollapse(item)
  }

  const onCollapse = (item: TreeData) => {
    props.onCollapse(item)
  }

  const onChange = (item: TreeData) => {
    item.checked = !item.checked
    let checkedKeysCopy = [...checkedKeys]
    if (item.checked) return setCheckedKeys(checkedKeys.concat(item.id))
    checkedKeysCopy = checkedKeysCopy.filter(key => item.id !== key)
    setCheckedKeys([...checkedKeysCopy])
  }
  return (
    <>
      {data.map(item => (
        <ul key={item.id} className={`${style.treeUl} ml-5`}>
          <li>
            <span className='mr-1'>
              {item.children &&
                (item.collapsed ? (
                  <CaretDownOutlined onClick={() => onCollapsed(item)} />
                ) : (
                  <CaretRightOutlined onClick={() => onCollapsed(item)} />
                ))}
            </span>
            <input type='checkbox' id={item.id + ''} onChange={() => onChange(item)} />
            <label htmlFor={item.id + ''} className='ml-1 text-5'>
              {item.name}
            </label>
          </li>
          {item.collapsed && item.children && (
            <div className='children'>
              <TreeNode data={item.children} onCollapse={onCollapse}></TreeNode>
            </div>
          )}
        </ul>
      ))}
    </>
  )
}

export default TreeNode
