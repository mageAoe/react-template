import TestUseCallback from '@/components/testUseCallback/index'
import useToggle from '@/hooks/useToggle'
// import DOMPosition from '@/components/DOMPosition/index_demo'
import DragSort from '@/components/dragSort/index'

function Test() {
  const [isDarkMode, toggleDarkMode] = useToggle(false)

  return (
    <div className='flex flex-col flex-items-center mt-10'>
      {/* <TestUseCallback /> */}
      <DragSort />
    </div>
  )
}

export default Test
