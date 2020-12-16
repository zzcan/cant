import * as React from 'react';

export interface ReactSwiperProps {
	params: Object,
	className: string,
	PaginationRender: React.ReactNode,
}

declare const ReactSwiper: React.FC<ReactSwiperProps>
export default ReactSwiper