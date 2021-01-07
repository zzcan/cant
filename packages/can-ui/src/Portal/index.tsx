import React, { FC, ReactNode } from 'react';
import ReactDOM from 'react-dom';

type IProps = {
  children: ReactNode;
  container?: Element;
};

const Portal: FC<IProps> = ({ children, container = document.body }) =>
  ReactDOM.createPortal(children, container);

export default Portal;
