import React, { FC, CSSProperties, MouseEvent, ReactNode } from 'react';
import createBem from '../utils/createBem';
import './index.less';

const bem = createBem('cant-button');

export type ButtonProps = {
  type?: 'default' | 'primary' | 'info' | 'warning' | 'danger';
  size?: 'normal' | 'large' | 'small' | 'mini';
  text?: string;
  plain?: boolean;
  style?: CSSProperties;
  children?: ReactNode;
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
};

const Button: FC<ButtonProps> = ({
  type = 'default',
  size = 'normal',
  text,
  plain,
  style,
  children,
  onClick,
}) => {
  const classNames = bem([
    type,
    size,
    {
      plain,
    },
  ]);

  return (
    <button className={classNames} style={style} onClick={onClick}>
      <div className={bem('content')}>{text || children}</div>
    </button>
  );
};

export default Button;
