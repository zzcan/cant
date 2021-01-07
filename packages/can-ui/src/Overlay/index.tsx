import React, { CSSProperties, FC, ReactNode } from 'react';
import { CSSTransition } from 'react-transition-group';
import cx from 'classnames';
import createBem from '../utils/createBem';
import './index.less';

const baseClass = 'cant-overlay';
const baseTransitionClass = 'cant-fade';
const bem = createBem(baseClass);
const duration = 200;

type IProps = {
  /**
   * @description 是否展示遮罩层
   * @default false
   */
  show: boolean;
  /**
   * @description z-index 层级
   * @default 1
   */
  zIndex?: number;
  /**
   * @description 自定义类名
   */
  className?: string;
  /**
   * @description 自定义样式
   */
  customStyle?: CSSProperties;
  /**
   * @description 遮罩嵌入内容
   */
  children?: ReactNode;
  /**
   * @description 点击事件
   */
  onClick?: (event: MouseEvent) => void;
};

const Overlay: FC<IProps> = ({
  show,
  zIndex,
  className,
  customStyle,
  children,
  onClick,
}) => {
  const props = {
    className: cx(bem(), className),
    style: customStyle,
  };

  if (zIndex) Object.assign(props, { ...props.style, zIndex });

  if (onClick) Object.assign(props, { onClick });

  return (
    <CSSTransition
      in={show}
      timeout={duration}
      classNames={baseTransitionClass}
      unmountOnExit
    >
      <div {...props}>{children}</div>
    </CSSTransition>
  );
};

export default Overlay;
