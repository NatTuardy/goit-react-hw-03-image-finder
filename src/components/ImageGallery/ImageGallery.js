import React, { Component } from 'react';
import ImageGalleryItem from './ImageGalleryItem/ImageGalleryItem';
import styles from './ImageGallery.module.css';
import Modal from '../Modal/Modal';

// const ImageGallery = ({ images }) => (
//   <ul className={styles.ImageGallery}>
//     {images.map(image => (
//       <ImageGalleryItem key={image.id} image={image} />
//     ))}
//   </ul>
// );

// export default ImageGallery;

class ImageGallery extends Component {
  state = {
    isModalOpen: false,
    nowImage: '',
  };

  openModal = e => {
    const link = e.target.dataset.largelink;

    this.setState({
      isModalOpen: true,
      nowImage: link,
    });
  };

  closeModal = () => this.setState({ isModalOpen: false });

  render() {
    return (
      <>
        <ul className={styles.ImageGallery}>
          {this.props.images.map(image => (
            <ImageGalleryItem
              key={image.id}
              image={image}
              openModal={this.openModal}
            />
          ))}
        </ul>
        {this.state.isModalOpen && (
          <Modal onClose={this.closeModal} nowImage={this.state.nowImage} />
        )}
      </>
    );
  }
}

export default ImageGallery;
