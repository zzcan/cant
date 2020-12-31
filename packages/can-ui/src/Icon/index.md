---
title: Icon
order: 1000

group: 
  title: Basic Component
  path: /basic
  order: 3
---
# Icon

代码演示:

```tsx
import React from 'react';
import { Icon } from '@zzcan/ui';

const paneStyle = {
  display: 'flex',
  margin: 20,
  backgroundColor: '#fff',
  borderRadius: 12
}

const style = {
  flex: 1, 
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
}

const fontStyle = {
  fontSize: 12
}

export default () => (
  <div style={paneStyle}>
    <div style={style}>
      <Icon name="check" />
      <span style={fontStyle}>check</span>
    </div>
    <div style={style}>
      <Icon name="close" />
      <span style={fontStyle}>close</span>
    </div>
    <div style={style}>
      <Icon name="right" />
      <span style={fontStyle}>right</span>
    </div>
    <div style={style}>
      <Icon name="back" />
      <span style={fontStyle}>back</span>
    </div>
    <div style={style}>
      <Icon name="loading" />
      <span style={fontStyle}>loading</span>
    </div>
  </div>
  
);
```

<API />
