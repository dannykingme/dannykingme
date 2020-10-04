import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { PortalWithState as CommonPortal } from 'react-portal';
import BodyClassName from 'react-body-classname';
import CommonIcon from '../Icon';

export const Portal = CommonPortal;
export const Icon = CommonIcon;

export const Overlay = ({ children, className, onClose }) => {
  const handleClose = () => {
    if (onClose) {
      onClose();
    }
  };
  return (
    <BodyClassName className="overlay-active">
      <div className={classNames('overlay', className)}>
        <button className="overlay-close" disabled={!onClose} onClick={handleClose}>
          <Icon times />
        </button>
        <div className="small content">
          {children}
        </div>
      </div>
    </BodyClassName>
  );
};
