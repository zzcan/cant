import { LazyImage, ReactSwiper } from '@zzcan/ui';
import imgs from './imgs';
import placeholder from './placeholder.png';

export default function App() {
  return (
    <div>
      <ReactSwiper>
        {imgs.map((img) => (
          <LazyImage key={img} src={img} srcPlaceholder={placeholder} />
        ))}
      </ReactSwiper>
    </div>
  );
}
