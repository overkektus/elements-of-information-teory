import React, { Component } from 'react';
import { Button } from 'semantic-ui-react';
import Field from '../../components/Field/Field';
import './Form.css';

class Form extends Component {
  state = {
    sequenceLength: 0,
    probability: 0
  }

  calcButtonHandler = () => {
    console.log(this.state.sequenceLength);
    console.log(this.state.probability);
  }

  lengthChangeHandler = (event) => {
    this.setState({sequenceLength: event.target.value})
  }

  probabilityChangeHandler = (event) => {
    this.setState({probability: event.target.value})
  }

  render() { 
    return (
      <div className="base-form">
        <Field
          label="Длина последовательности: "
          placeholder="целое число"
          inputChanged={this.lengthChangeHandler}
        />
        <Field
          label="Вероятность: "
          placeholder="число от 0 до 1"
          inputChanged={this.probabilityChangeHandler}
        />
        <Button onClick={this.calcButtonHandler}>Рассчитать</Button>
      </div>
    );
  }
}
 
export default Form;