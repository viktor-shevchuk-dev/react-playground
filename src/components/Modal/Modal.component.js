import { Component } from 'react';
import { createPortal } from 'react-dom';

import classes from './Modal.module.css';

const modalRoot = document.querySelector('#modal-root');

class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = (event) => {
    if (event.code === 'Escape') {
      this.props.onClose();
    }
  };

  handleBackdropClick = (event) => {
    if (event.target === event.currentTarget) {
      this.props.onClose();
    }
  };

  render() {
    return createPortal(
      <div className={classes.backdrop} onClick={this.handleBackdropClick}>
        <div className={classes.content}>{this.props.children}</div>
      </div>,
      modalRoot
    );
  }
}

export default Modal;
