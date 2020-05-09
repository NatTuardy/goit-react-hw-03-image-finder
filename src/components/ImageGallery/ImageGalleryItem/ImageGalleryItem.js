import React from 'react';
import styles from './ImageGalleryItem.module.css';

const ImageGalleryItem = ({ image, openModal }) => (
  <>
    <li className={styles.ImageGalleryItem}>
      <img
        src={image.link}
        alt={image.tag}
        className={styles.ImageGalleryItemImage}
        onClick={e => openModal(e)}
        data-largelink={image.largeLink}
      />
    </li>
  </>
);

export default ImageGalleryItem;
