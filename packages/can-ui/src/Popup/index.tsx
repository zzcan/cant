import React, {
  FC,
  RefObject,
  ReactNode,
  CSSProperties,
  useRef,
  useEffect,
  useCallback,
} from 'react';
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
  container?: HTMLElement;
  /**
   * @description 关闭后回调
   */
  onClose?: () => void;
  /**
   * @description 关闭弹出层且动画结束后触发
   */
  onClosed?: (node?: HTMLElement) => void;
};

function useClickOutside(
  ref: RefObject<HTMLElement | null>,
  handler: Function,
) {
  useEffect(() => {
    // dom节点渲染后再绑定事件
    if (ref.current) {
      window.addEventListener('click', handleClickOutside);
      return () => window.removeEventListener('click', handleClickOutside);
    }
  }, [ref, handler]);

  const handleClickOutside = (e: MouseEvent) => {
    if (!ref.current || ref.current.contains(e.target as Node)) {
      return;
    }
    handler(e);
  };
}

const Popup: FC<IProps> = ({
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
  onClose,
  onClosed,
}) => {
  const popupRef = useRef(null);

  const onClickOutside = useCallback(() => {
    if (closeOnClickOutside) onClose?.();
  }, [onClose]);

  useClickOutside(popupRef, onClickOutside);

  const baseTransitionClass =
    position === 'center'
      ? `${baseClass}-fade`
      : `${baseClass}-slide-${position}`;

  const props = {
    ref: popupRef,
    className: cx(bem([position]), className),
    style: customStyle,
  };

  const PopupContent = () => (
    <div>
      <Overlay
        show={overlay && show}
        className={overlayClass}
        customStyle={overlayStyle}
        onClick={onClose}
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
    return <PopupContent />;
  }

  return (
    <Portal container={container}>
      <PopupContent />
    </Portal>
  );
};

export default Popup;
