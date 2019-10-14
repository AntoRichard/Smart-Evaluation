import React, { Fragment } from 'react';
import spinner from './spinner.gif';

const Spinner = () => {
  const styles = {
    spinner_style: {
      width: '200px',
      margin: 'auto',
      display: 'block'
    }
  };
  return (
    <Fragment>
      <img src={spinner} alt="Loading . . ." style={styles.spinner_style} />
    </Fragment>
  );
};

export default Spinner;
