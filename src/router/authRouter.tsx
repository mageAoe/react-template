import React from 'react'

const AuthRouter = (props: { children: React.JSX.Element }) =>
  // * 当前账号有权限返回 Router，正常访问页面
  props.children
export default AuthRouter
