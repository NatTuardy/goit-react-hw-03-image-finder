import React from 'react';
import styles from './Searchbar.module.css';
import PropTypes from 'prop-types';

const Searchbar = ({ query, onChange, onSubmit }) => (
  <header className={styles.Searchbar}>
    <form className={styles.SearchForm} onSubmit={onSubmit}>
      <button
        type="submit"
        className={styles.SearchFormButton}
        onChange={onChange}>
        <span className={styles.SearchFormButtonLabel}>Search</span>
      </button>

      <input
        className={styles.SearchFormInput}
        type="text"
        autoComplete="off"
        autoFocus
        placeholder="Search images and photos"
        onChange={onChange}
        value={query}
      />
    </form>
  </header>
);

export default Searchbar;

Searchbar.propTypes = {
  onChange: PropTypes.func,
  query: PropTypes.string,
  onSubmit: PropTypes.func,
};
