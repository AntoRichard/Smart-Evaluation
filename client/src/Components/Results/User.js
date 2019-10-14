import React, { Fragment } from 'react';
import Table from '../Layouts/Results/Tabel';

const User = ({ user, clear, history }) => {
  return (
    <Fragment>
      <button
        className="btn btn-danger btn-block"
        style={{ marginTop: '10px' }}
        onClick={clear}
      >
        {' '}
        Clear{' '}
      </button>
      <Table details={user} history={history} />
    </Fragment>
  );
};

export default User;
