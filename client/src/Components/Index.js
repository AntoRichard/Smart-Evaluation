import React, { Component } from 'react';
import Card from './Layouts/Questions/Card';

class Index extends Component {
  componentDidMount = () => {
    console.log(localStorage.getItem('token'));
  };
  render() {
    const styles = {
      first: {
        color: 'red'
      },
      head: {
        textAlign: 'center',
        color: '#2E1E1B'
      }
    };
    return (
      <div>
        <h1 style={styles.head}>
          <span style={styles.first}>Online </span> Exam
        </h1>
        <div style={{ paddingLeft: '5rem' }}>
          <Card part="I" mark="2" nos="10" Mark="Two" marks="20" />
          <Card part="II" mark="13" nos="5" Mark="Thirteen" marks="65" />
          <Card part="III" mark="15" nos="1" Mark="Fifteen" marks="15" />
        </div>
      </div>
    );
  }
}

export default Index;
