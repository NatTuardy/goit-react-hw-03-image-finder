import React, { Component, createRef } from 'react';
import styles from './Modal.module.css';

class Modal extends Component {
  state = {};
  backdropRef = createRef();

  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyPress);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyPress);
  }

  handleKeyPress = e => {
    if (e.code !== 'Escape') return;
    this.props.onClose();
  };

  handleBackDropClick = e => {
    const { current } = this.backdropRef;
    if (current && e.target !== current) return;
    this.props.onClose();
  };

  render() {
    return (
      <div
        className={styles.Overlay}
        ref={this.backdropRef}
        onClick={this.handleBackDropClick}>
        <div className={styles.Modal}>
          <img src={this.props.nowImage} alt="cat" />
        </div>
      </div>
    );
  }
}

export default Modal;
