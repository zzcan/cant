import React, { useState } from 'react'
import { Button, Popup }  from '@zzcan/ui'
import './demo.less'

export default function Demo1() {
  const [visible1, setVisible1] = useState(false)
  const [visible2, setVisible2] = useState(false)
  const [visible3, setVisible3] = useState(false)
  const [visible4, setVisible4] = useState(false)
  const [visible5, setVisible5] = useState(false)
  return (
    <>
      <div>
        <Button type="primary" onClick={() => setVisible1(true)}>展示弹出层</Button>
      </div>
      <p className='title'>弹出位置</p>
      <div>
        <Button type="primary" onClick={() => setVisible2(true)}>顶部弹出</Button>
      </div>
      <div>
        <Button type="primary" onClick={() => setVisible3(true)}>右侧弹出</Button>
      </div>
      <div>
        <Button type="primary" onClick={() => setVisible4(true)}>底部弹出</Button>
      </div>
      <div>
        <Button type="primary" onClick={() => setVisible5(true)}>左侧弹出</Button>
      </div>

      <Popup show={visible1} onClose={() => setVisible1(false)}>
        内容
      </Popup>

      <Popup show={visible2} position="top" onClose={() => setVisible2(false)}>
        顶部弹出
      </Popup>

      <Popup show={visible3} position="right" onClose={() => setVisible3(false)}>
        顶部弹出
      </Popup>

      <Popup show={visible4} position="bottom" onClose={() => setVisible4(false)}>
        顶部弹出
      </Popup>

      <Popup show={visible5} position="left" onClose={() => setVisible5(false)}>
        顶部弹出
      </Popup>
    </>
  )
}
