import React, { FC, MouseEvent } from 'react';
import cx from 'classnames';
import './index.less';

const baseClass = 'cant-icon'

type IconProps = {
  /**
   * @description 图标名称
   */
  name: string;
  /**
   * @description HTML 标签
   * @default i
   */
  tag?: 'i' | 'span';
  /**
   * @description 图标颜色
   * @default inherit
   */
  color?: string;
  /**
   * @description 图标大小，如20px、2em，默认单位px
   * @default inherit
   */
  size?: number | string;
  /**
   * @description 自定义类名
   */
  className?: string;
  /**
   * @description 图标类名前缀，用于自定义图标
   * @default cant-icon
   */
  classPrefix: string;
  /**
   * @description 点击事件
   */
  onClick?: (event: MouseEvent) => void
}

const Icon: FC<IconProps> = ({
  name,
  className,
  classPrefix = baseClass,
  color = 'inherit',
  size = 'inherit',
  tag,
}) => {
  const Customtag = tag || 'i'

  const props = {
    className: cx(className, classPrefix, `${classPrefix}-${name}`),
    style: { color, fontSize: size }
  }

  return <Customtag {...props} />
};

export default Icon;
