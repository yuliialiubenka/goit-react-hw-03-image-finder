import { Component } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
import { withStyles } from 'react-jss';
import { styles } from './modalStyles'

const modalRoot = document.querySelector('#modal-root');

class Modal extends Component {

  componentDidMount() {
    window.addEventListener('keydown', this.onKeyDown);
    document.body.style.overflow = 'hidden';
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.onKeyDown);
    document.body.style.overflow = 'visible';
  }

  onKeyDown = event => {
    if (event.code === 'Escape') {
      this.props.onClose();
    }
  };

  onBackdropClick = event => {
    if (event.currentTarget === event.target) {
      this.props.onClose();
    }
  };

  render() {
    const { classes } = this.props;
    const { largeImageURL, tags } = this.props;

    return createPortal(
      <div className={classes.overlay} onClick={this.onBackdropClick}>
        <div className={classes.modal}>
          <img className={classes.modalImage} src={largeImageURL} alt={tags}/>
        </div>
      </div>,
      modalRoot
    );
  }
}

Modal.propTypes = {
  largeImageURL: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default withStyles(styles)(Modal);