import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Card = ({ part, mark, nos, Mark, marks }) => {
  const [show, setShow] = useState(false);
  const styles = {
    container: {
      border: '2px solid #ccc',
      margin: '60px',
      padding: '20px',
      FontFamily: 'lucida grande, tahoma, verdana, arial, sans-serif',
      borderLeftColor: 'red',
      borderLeftWidth: '3px',
      borderRadius: '10px',
      boxShadow: '5px 5px #eee'
    },
    text: {
      padding: '10px 50px',
      paddingTop: '30px'
    },
    button: {
      display: 'flex',
      float: 'right'
    }
  };
  const showHandler = () => {
    setShow(!show);
  };
  const path = `/${Mark}marks`;
  return (
    <div className="container" style={styles.container}>
      <h2 style={{ textAlign: 'center' }}>PART - {part}</h2>

      <u>
        <h4>{Mark} Marks</h4>
      </u>
      <p style={{ display: 'flex', float: 'right' }}>
        <span style={{ color: 'red' }}>Marks </span> : {marks}
      </p>
      {show ? (
        <i
          style={{
            fontSize: '24px',
            display: 'inline',
            float: 'right',
            marginRight: '20px'
          }}
          class="fas fa-angle-up"
          onClick={showHandler}
        />
      ) : (
        <i
          style={{
            fontSize: '24px',
            display: 'inline',
            float: 'right',
            marginRight: '20px'
          }}
          class="fas fa-angle-down "
          onClick={showHandler}
        />
      )}
      {show ? (
        <div>
          <p style={styles.text}>
            This part consist from {nos} questions and each question holds{' '}
            {mark} Marks.{' '}
          </p>
          <Link to={path} className="btn btn-success" style={styles.button}>
            Start
          </Link>
        </div>
      ) : null}
    </div>
  );
};

export default Card;
