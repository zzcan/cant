import React, { FC, CSSProperties, MouseEvent, ReactNode } from 'react';
import cx from 'classnames'
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
  style?: CSSProperties;
  /**
   * @description 文字或者html元素
   */
  children: ReactNode;
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
  style,
  children,
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

  return (
    <Customtag
      className={cx(classNames, className)}
      style={style}
      onClick={onClick}
    >
      <div className={bem('content')}>{children}</div>
    </Customtag>
  );
};

export default Button;
