import React, { FC, CSSProperties, MouseEvent, ReactNode } from 'react';
import cx from 'classnames';
import createBem from '../utils/createBem';
import './index.less';

const bem = createBem('cant-button');

type ButtonProps = {
  /**
   * @description 类型
   * @default default
   */
  type?: 'default' | 'primary' | 'success' | 'warning' | 'danger';
  /**
   * @description 尺寸
   * @default normal
   */
  size?: 'large' | 'normal' | 'small' | 'mini';
  /**
   * @description 按钮根节点的 HTML 标签
   * @default button
   */
  tag?: 'button' | 'a';
  /**
   * @description 是否为朴素(空心)按钮
   * @default false
   */
  plain?: boolean;
  /**
   * @description 是否禁用按钮
   */
  disabled?: boolean;
  /**
   * @description 自定义类名
   */
  className?: string;
  /**
   * @description 自定义样式
   */
  customStyle?: CSSProperties;
  /**
   * @description 文字或者html元素
   */
  children: ReactNode;
  /**
   * @description 点击后跳转的链接地址
   */
  url?: string;
  /**
   * @description 点击事件
   */
  onClick?: (event: MouseEvent) => void;
};

const Button: FC<ButtonProps> = ({
  type = 'default',
  size = 'normal',
  tag,
  plain,
  disabled,
  className,
  customStyle,
  children,
  url,
  onClick,
}) => {
  const Customtag = tag || 'button';
  const classNames = bem([
    type,
    size,
    {
      plain,
      disabled,
    },
  ]);

  const handleClick = (e: MouseEvent) => {
    if (disabled) {
      if (tag === 'a') {
        e.preventDefault();
      }
    } else {
      onClick?.(e);
      if (tag !== 'button' && url) {
        window.location.href = url;
      }
    }
  };

  const props = {
    className: cx(classNames, className),
    style: customStyle,
    onClick: handleClick,
  };

  if (tag === 'a' && url && !disabled) Object.assign(props, { href: url });

  return (
    <Customtag {...props}>
      <div className={bem('content')}>{children}</div>
    </Customtag>
  );
};

export default Button;
