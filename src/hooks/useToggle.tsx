import { useState, useCallback } from 'react'

function useToggle(initialValue: boolean) {
  const [value, setValue] = useState(initialValue)

  const toggle = useCallback(() => {
    setValue(v => !v)
  }, [])

  return [value, toggle]
}

export default useToggle

/**
 * useToggle 之所以能够结构出 isDarkMode 和 toggleDarkMode，是因为该 Hook 返回了一个包含两个元素的数组，
 * 并且在组件使用这个 Hook 时进行了解构赋值。这样就可以方便地获取和使用这两个值来管理 Dark Mode 状态
 *
 * 调用：
 * import useToggle from '@/hooks/useToggle'
 *
 * const [isDarkMode, toggleDarkMode] = useToggle(false)
 */
