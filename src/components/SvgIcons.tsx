import { useMemo } from 'react'
import './icons.css'

interface Props {
  prefix?: string
  iconClass: string
  size: string
  color: string
}

function SvgIcons(props: Props) {
  const symbolId = useMemo(() => `#${props.prefix}-${props.iconClass}`, [props])

  return (
    <>
      <svg
        aria-hidden='true'
        className='svg-icon'
        style={{ width: props.size, height: props.size }}
      >
        <use xlinkHref={symbolId} fill={props.color} />
      </svg>
    </>
  )
}

SvgIcons.defaultProps = {
  prefix: 'icon',
  size: '1em'
} as Props

export default SvgIcons
