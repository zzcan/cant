import React, { useRef, useState, useEffect } from 'react';
import classnames from 'classnames'
import styles from './index.less'

export default function LazyImage({
  alt,
  src,
  srcset,
  srcPlaceholder,
  intersectionOptions,
  className,
}) {
  const [intersected, setIntersected] = useState(false);
  const imgRef = useRef();
  const observerRef = useRef();

  async function start() {
    if (!window.IntersectionObserver) {
      await import('intersection-observer');
    }
    observerRef.current = new IntersectionObserver((entries) => {
      const image = entries[0];
      if (image.isIntersecting || image.intersectionRatio > 0) {
        observerRef.current.disconnect();
        setIntersected(true);
      }
    }, intersectionOptions);
    if (imgRef.current) {
      observerRef.current.observe(imgRef.current);
    }
  }

  useEffect(() => {
    start();
    return () => observerRef.current && observerRef.current.disconnect();
  }, []);

  const imgSrc = intersected && src ? src : srcPlaceholder;
  return (
    <img
      ref={imgRef}
      alt={alt}
      src={imgSrc}
      srcSet={srcset}
      className={classnames(styles.img, className)}
    />
  );
}
