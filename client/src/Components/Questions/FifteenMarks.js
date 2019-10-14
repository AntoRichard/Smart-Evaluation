import React, { Component } from 'react';
import AnsForm from '../Layouts/Questions/AnsForm';
import axios from 'axios';

class FifteenMarks extends Component {
  state = {
    no: 1,
    questions: []
  };
  async componentDidMount() {
    const res = await axios.get('/fifteen');
    const data = await res.data;
    console.log(data.que);
    this.setState({ questions: data.que });
  }
  onChangeNextHandler = () => {
    const { no } = this.state;
    this.setState({ no: no + 1 });
  };
  onChangePrevHandler = () => {
    const { no } = this.state;
    this.setState({ no: no - 1 });
  };
  render() {
    const styles = {
      container: {
        textAlign: 'center'
      }
    };
    const { questions, no } = this.state;
    return (
      <div>
        <h1 style={styles.container}>
          PART - <span style={{ color: 'red' }}>III</span>
        </h1>
        <AnsForm
          title="Fifteen Marks"
          question={questions[no - 1]}
          no={no}
          onChangeNextHandler={this.onChangeNextHandler}
          onChangePrevHandler={this.onChangePrevHandler}
          stop="1"
          size="12"
          url="fifteen"
        />
      </div>
    );
  }
}

export default FifteenMarks;
