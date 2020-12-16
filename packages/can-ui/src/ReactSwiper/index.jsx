import React, { Children } from 'react';
import classnames from 'classnames';
import SwiperCore, {
  Lazy,
  Pagination,
  Zoom,
  Autoplay,
} from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import styles from './index.less';
import 'swiper/swiper-bundle.css';

SwiperCore.use([Lazy, Pagination, Zoom, Autoplay]);

export default function ReactSwiper({
  children, params, className, PaginationRender,
}) {
  return (
    <Swiper {...params} className={classnames(styles.container, className)}>
      {Children.map(children, (child) => {
        if (!child) return null;
        return (
          <SwiperSlide zoom={params.zoom}>
            {child}
            {params.lazy && <div className="swiper-lazy-preloader swiper-lazy-preloader-white" />}
          </SwiperSlide>
        );
      })}
      {params.pagination && (PaginationRender || <div className="swiper-pagination" />)}
    </Swiper>
  );
}

ReactSwiper.defaultProps = {
  params: {},
};
