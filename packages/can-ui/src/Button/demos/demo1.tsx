import React from 'react';
import { Button } from '@zzcan/ui';

const Divide = () => (
  <div style={{ display: 'inline-block', margin: '0 10px' }} />
);

export default function Demo1() {
  return (
    <>
      <p style={{ fontSize: 20, marginBottom: 10 }}>按钮类型</p>

      <Button>默认按钮</Button>
      <Divide />
      <Button type="primary">主要按钮</Button>
      <Divide />
      <Button type="success">成功按钮</Button>
      <Button type="warning">警告按钮</Button>
      <Divide />
      <Button type="danger">危险按钮</Button>
    </>
  );
}
