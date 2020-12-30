import React from 'react';
import { Button } from '@zzcan/ui';

export default function Demo2() {
  const Divide = () => (
    <div style={{ display: 'inline-block', margin: '0 10px' }} />
  );
  return (
    <>
      <h4>禁用按钮</h4>

      <Button disabled>禁用按钮</Button>
    </>
  );
};
