import * as React from 'react';

export interface LazyImageProps {
	alt?: string,
	src?: string,
	srcset?: string,
	srcPlaceholder?: string,
	className?: string,
}

declare const LazyImage: React.FC<LazyImageProps>
export default LazyImage