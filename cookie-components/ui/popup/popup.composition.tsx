import React, { CSSProperties, useMemo, useState } from 'react'
import { Popup, Position } from './popup'

const containerStyle: CSSProperties = {
  width: '500px',
  height: '500px',
  border: '1px solid #000'
}

// const contentStyle: CSSProperties = {
//   width: '100%',
//   height: '100px',
//   background: 'lightgreen'
// }

const positions: Position[] = ['bottom', 'left', 'right', 'top', 'center']

export const BasicPopup = () => {
  const [direction, setDirection] = useState<Position>('bottom')

  const [visible, setVisible] = useState<boolean>(false)

  const contentStyle: CSSProperties = useMemo(() => {
    if (['left', 'right'].includes(direction)) {
      return {
        width: '100px',
        height: '100%',
        background: 'lightgreen'
      }
    } else if (['bottom', 'top'].includes(direction)) {
      return {
        width: '100%',
        height: '300px',
        background: 'lightgreen'
      }
    } else
      return {
        width: '100px',
        height: '300px',
        background: 'lightgreen'
      }
  }, [direction])

  return (
    <div style={containerStyle}>
      {positions.map((pos: Position) => (
        <button
          key={pos}
          onClick={() => {
            setDirection(pos)
            setVisible(true)
          }}
        >
          open popup from {pos}
        </button>
      ))}

      <Popup visible={visible} position={direction} onClickOverlay={() => setVisible(false)}>
        <div style={contentStyle}></div>
      </Popup>
    </div>
  )
}
