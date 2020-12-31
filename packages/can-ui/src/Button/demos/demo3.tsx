import React from 'react';
import { Button } from '@zzcan/ui';

const Divide = () => (
  <div style={{ display: 'inline-block', margin: '0 10px' }} />
);

export default function Demo3() {
  return (
    <>
      <p style={{ fontSize: 20, marginBottom: 10 }}>跳转按钮</p>

      <Button tag="a" url="https://baidu.com" disabled>
        a标签跳转
      </Button>
      <Divide />
      <Button url="https://baidu.com" onClick={() => console.log(11111111)}>
        url跳转
      </Button>
    </>
  );
}
