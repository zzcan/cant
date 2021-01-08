import React, { FC, ReactNode } from 'react';
import ReactDOM from 'react-dom';

export interface PortalProps {
  children: ReactNode;
  container?: Element;
}

const Portal: FC<PortalProps> = ({ children, container = document.body }) =>
  ReactDOM.createPortal(children, container);

export default Portal;
