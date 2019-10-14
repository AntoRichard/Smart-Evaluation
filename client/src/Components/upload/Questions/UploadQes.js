import React, { Component } from 'react';

class UploadQues extends Component {
  render() {
    return (
      <div>
        <div
          style={{
            border: '2px dashed red',
            marginTop: '10%',
            borderRadius: '5px'
          }}
        >
          <h3>Upload your file</h3>
          <input type="file" style={{ float: 'center', padding: '7px',Color: 'red',borderRaduis: '4px' }}  />
        </div>
      </div>
    );
  }
}

export default UploadQues;
