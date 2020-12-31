import React from 'react';
import { Button } from '@zzcan/ui';

export default function Demo2() {
  const Divide = () => (
    <div style={{ display: 'inline-block', margin: '0 10px' }} />
  );
  return (
    <>
      <p style={{ fontSize: 20, marginBottom: 10 }}>禁用按钮</p>

      <Button disabled>禁用按钮</Button>
      <Divide />
      <Button disabled type="primary">primary</Button>
      <Divide />
      <Button disabled type="success">success</Button>
      <Button disabled type="warning">warning</Button>
      <Divide />
      <Button disabled type="danger">danger</Button>
    </>
  );
};
