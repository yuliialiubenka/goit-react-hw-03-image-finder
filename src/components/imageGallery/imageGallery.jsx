import React from 'react';
import PropTypes from 'prop-types';
import { useStyles } from './imageGalleryStyles';
import ImageGalleryItem from '../imageGalleryItem/imageGalleryItem';

export const ImageGallery = ({ images }) => {
  const classes = useStyles();
  
  return (
    <ul className={classes.imageList}>
      {images.map(image => (
        <ImageGalleryItem key={image.id} image={image} />
      ))}
    </ul>
  );
};

ImageGallery.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default ImageGallery;