import React from 'react';
import Loader from 'react-loader-spinner';

const styles = { fontSize: 40 };

const Loader1 = () => (
  <div>
    <h1 style={styles}>Loading...</h1>
    <Loader type="Audio" color="#00BFFF" height={80} width={80} />
  </div>
);

export default Loader1;
