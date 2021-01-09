import { FC, ReactNode, CSSProperties, MouseEvent } from 'react';
import { CSSTransition } from 'react-transition-group';
import cx from 'classnames';
import Portal from '../Portal';
import Overlay from '../Overlay';
import createBem from '../utils/createBem';
import './index.less';

const baseClass = 'cant-popup';
const bem = createBem(baseClass);
const duration = 200;

export interface PopupProps {
  /**
   * @description 是否显示弹出层
   * @default false
   */
  show?: boolean;
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
   * @description 是否在点击非弹出层区域后关闭
   * @default true
   */
  closeOnClickOutside?: boolean;
  /**
   * @description 弹出层内容
   */
  children?: ReactNode;
  /**
   * @description 指定挂载的节点
   */
  container?: HTMLElement | false;
  /**
   * @description 点击弹出层时触发
   */
  onClick?: (event: MouseEvent) => void;
  /**
   * @description 关闭弹出层时触发
   */
  onClose?: () => void;
  /**
   * @description 关闭弹出层且动画结束后触发
   */
  onClosed?: (node: HTMLElement) => void;
}

const Popup: FC<PopupProps> = ({
  show = false,
  overlay = true,
  position = 'center',
  className,
  customStyle,
  overlayClass,
  overlayStyle,
  closeOnClickOutside = true,
  children,
  container,
  onClick,
  onClose,
  onClosed,
}) => {
  const baseTransitionClass =
    position === 'center'
      ? `${baseClass}-fade`
      : `${baseClass}-slide-${position}`;

  const props = {
    className: cx(bem([position]), className),
    style: customStyle,
    onClick,
  };

  const renderPopupContent = (
    <div className={bem('root')}>
      <Overlay
        show={overlay && show}
        className={overlayClass}
        customStyle={overlayStyle}
        onClick={closeOnClickOutside ? onClose : void 0}
      />
      <div
        className={bem('wrapper')}
        onClick={closeOnClickOutside ? onClose : void 0}
        style={{ display: overlay || !show ? 'none' : undefined }}
      />
      <CSSTransition
        in={show}
        timeout={duration}
        classNames={baseTransitionClass}
        onExited={onClosed}
        unmountOnExit
      >
        <div {...props}>{children}</div>
      </CSSTransition>
    </div>
  );

  if (!container) {
    return renderPopupContent;
  }

  return <Portal container={container}>{renderPopupContent}</Portal>;
};

export default Popup;
