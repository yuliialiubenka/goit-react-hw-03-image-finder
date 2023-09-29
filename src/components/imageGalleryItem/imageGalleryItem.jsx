import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Modal from '../modal/modal';
import { withStyles } from 'react-jss';
import { styles } from './imageGalleryItemStyles';

class ImageItem extends Component {
  state = {
    showModal: false,
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  render() {
    const { showModal } = this.state;
    const { image } = this.props;
    const { classes } = this.props;

    return (
      <>
        <li className={classes.imageListItem}>
          <img
            className={classes.image}
            src={image.webformatURL}
            alt={image.tags}
            onClick={this.toggleModal}
          />
          {showModal && ( 
            <Modal
              largeImageURL={image.largeImageURL}
              tags={image.tags}
              onClose={this.toggleModal}
            />
          )}
        </li>
      </>
    );
  }
}

ImageItem.propTypes = {
  image: PropTypes.shape({
    webformatURL: PropTypes.string.isRequired,
    tags: PropTypes.string.isRequired,
    largeImageURL: PropTypes.string.isRequired,
  }).isRequired,
};

export default withStyles(styles)(ImageItem);