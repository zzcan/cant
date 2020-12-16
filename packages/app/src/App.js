import { LazyImage, ReactSwiper } from '@can/ui'
import imgs from './imgs';
import placeholder from './placeholder.png';
import styles from './App.module.css'

export default function App() {
  return (
    <div>
      <ReactSwiper className={styles.box}>
        {imgs.map(img => (
          <LazyImage
            key={img}
            src={img}
            srcPlaceholder={placeholder}
          />
        ))}
      </ReactSwiper>
    </div>
  );
}
