import React from 'react';

const Alert = ({ alert }) => {
  console.log(alert);
  return (
    alert && (
      <div
        className="bg-danger"
        style={{ padding: '10px', borderRadius: '5px', textAlign: 'center' }}
      >
        No Names Found !!!
      </div>
    )
  );
};

export default Alert;
