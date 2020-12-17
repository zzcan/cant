## ReactSwiper

Demo:

```tsx
import React from 'react';
import { ReactSwiper } from '@zzcan/ui';

export default () => (
  <ReactSwiper>
    {[0, 1, 2, 3].map((img, i) => (
      <img
        style={{ width: 400, height: 250, objectFit: 'cover' }}
        key={i}
        src="https://fs.fangdd.com/public/aqgnej9.jpg"
      />
    ))}
  </ReactSwiper>
);
```
