import React, { useState } from 'react'
import { Overlay } from './overlay'

export const BasicOverlay = () => {
  const [visible, setVisible] = useState<boolean>(false)
  return (
    <div>
      <button onClick={() => setVisible(true)}>open overlay</button>

      <Overlay visible={visible} onClick={() => setVisible(false)}></Overlay>
    </div>
  )
}
