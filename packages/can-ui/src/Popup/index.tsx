import React, { FC, ReactNode, CSSProperties } from 'react';
import { CSSTransition } from 'react-transition-group';
import cx from 'classnames';
import Portal from '../Portal';
import Overlay from '../Overlay';
import createBem from '../utils/createBem';
import './index.less';

const baseClass = 'cant-popup';
const bem = createBem(baseClass);
const duration = 200;

type IProps = {
  /**
   * @description 是否显示弹出层
   * @default false
   */
  show: boolean;
  /**
   * @description 是否显示遮罩层
   * @default true
   */
  overlay?: boolean;
  /**
   * @description 弹出位置
   * @default center
   */
  position?: 'center' | 'top' | 'right' | 'bottom' | 'left';
  /**
   * @description 自定义类名
   */
  className?: string;
  /**
   * @description 自定义样式
   */
  customStyle?: CSSProperties;
  /**
   * @description 自定义遮罩层类名
   */
  overlayClass?: string;
  /**
   * @description 自定义遮罩层样式
   */
  overlayStyle?: CSSProperties;
  /**
   * @description 弹出层内容
   */
  children?: ReactNode;
  /**
   * @description 指定挂载的节点
   */
  container?: HTMLElement;
  /**
   * @description 点击事件
   */
  onClick?: (event: MouseEvent) => void;
};

const Popup: FC<IProps> = ({
  show = false,
  overlay = true,
  position = 'center',
  className,
  customStyle,
  overlayClass,
  overlayStyle,
  children,
  container,
  onClick,
}) => {
  const baseTransitionClass =
    position === 'center'
      ? `${baseClass}-fade`
      : `${baseClass}-slide-${position}`;
  const props = {
    className: cx(bem([position]), className),
    style: customStyle,
  };

  return (
    <Portal container={container}>
      {overlay && (
        <Overlay
          show={show}
          className={overlayClass}
          customStyle={overlayStyle}
        />
      )}
      <CSSTransition
        in={show}
        timeout={duration}
        classNames={baseTransitionClass}
        unmountOnExit
      >
        <div {...props}>{children}</div>
      </CSSTransition>
    </Portal>
  );
};

export default Popup;
