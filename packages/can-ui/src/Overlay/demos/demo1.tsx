import React, { useState } from 'react'
import { Button, Overlay }  from '@zzcan/ui'
import './demo.less'

export default function Demo1() {
  const [visible1, setVisible1] = useState(false)
  const [visible2, setVisible2] = useState(false)
  return (
    <>
      <div>
        <Button type="primary" onClick={() => setVisible1(true)}>显示遮罩层</Button>
      </div>
      <div>
        <Button type="primary" onClick={() => setVisible2(true)}>嵌入内容</Button>
      </div>

      <Overlay show={visible1} onClick={() => setVisible1(false)} />
      <Overlay show={visible2} onClick={() => setVisible2(false)}>
        <div className='wrapper'><div className='block' /></div>
      </Overlay>
    </>
  )
}
