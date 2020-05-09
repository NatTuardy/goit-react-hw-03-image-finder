import React, { Component } from 'react';
import ImageGallery from './components/ImageGallery/ImageGallery';
import Loader1 from './components/Loder/Loader';
import ErrorNotification from './components/ErrorNotification/ErrorNotification';
import * as imageAPI from './services/Api';
import Searchbar from './components/Searchbar/Searchbar';
import Button from './components/Button/Button';
import styles from './App.module.css';

const mapper = images => {
  return images.map(
    ({ webformatURL: link, largeImageURL: largeLink, ...props }) => ({
      link,
      largeLink,
      ...props,
    }),
  );
};

class App extends Component {
  state = {
    images: [],
    isLoading: false,
    error: null,
    query: '',
    page: 1,
  };

  onScroll = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth',
    });
  };

  fetchImage1 = () => {
    imageAPI
      .fetchImage(this.state.query)
      .then(({ data }) => {
        this.setState({ images: mapper(data.hits), page: 1 });
      })
      .catch(error => this.setState({ error }))
      .finally(() => {
        this.setState({ isLoading: false });
      });
  };

  handleQueryChange = e => {
    this.setState({ query: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.setState({ isLoading: true });
    this.fetchImage1();
    this.setState({ query: '' });
  };

  onButtonClick = () => {
    this.setState({ isLoading: true });
    imageAPI
      .fetchImage(this.state.query, this.state.page + 1)
      .then(({ data }) => {
        this.setState(prev => ({
          images: [...prev.images, ...mapper(data.hits)],
          page: prev.page + 1,
        }));
      })
      .then(() => this.onScroll())
      .catch(error => this.setState({ error }))
      .finally(() => {
        this.setState({ isLoading: false });
      });
  };

  render() {
    const { images, isLoading, error, query } = this.state;
    return (
      <div className={styles.App}>
        <Searchbar
          onChange={this.handleQueryChange}
          query={query}
          onSubmit={this.handleSubmit}
        />
        {error && <ErrorNotification text={error.message} />}
        {isLoading && <Loader1 />}
        {images.length > 0 && <ImageGallery images={images} />}
        {images.length > 0 && <Button onClick={this.onButtonClick} />}
      </div>
    );
  }
}

export default App;
