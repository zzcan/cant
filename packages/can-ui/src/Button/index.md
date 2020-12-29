## Button

按钮类型:

```tsx
import React from 'react';
import { Button } from '@zzcan/ui';

export default () => {
  const Divide = () => (
    <div style={{ display: 'inline-block', margin: '0 10px' }} />
  );
  return (
    <>
      <p>按钮类型</p>
      <Button text="默认按钮" />
      <Divide />
      <Button type="primary" text="主要按钮" />
      <Divide />
      <Button type="success" text="成功按钮" />
      <Button type="warning" text="警告按钮" />
      <Divide />
      <Button type="danger" text="危险按钮" />
    </>
  );
};
```
