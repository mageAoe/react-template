export interface TreeData {
  id: number
  name: string
  //   key: string
  collapsed: boolean
  children?: TreeData[] // ?:表示可选属性,可以给也可以不给
  parentID?: number
  checked?: boolean
}

// 接口类型,可以用来装饰或者说约束组件属性对象
export interface Props {
  data: TreeData[]
  onCollapse: any
  //   onCheck: any
}
