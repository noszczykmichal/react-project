import React, { Component } from 'react';
import classes from './Person.css';
import Aux from '../../../hoc/Auxiliary';

class Person extends Component {

  // componentWillUnmount(){
  //   console.log('[Person.js] componentWillUnmount');
  // }

  render() {
    console.log('[Person.js] rendering....')
    return (
    <Aux>
        <p onClick={this.props.click}>
          I'm {this.props.name}! and I am {this.props.age} years Old!
        </p>
        <p>{this.props.children}</p>
        <input
        type="text" 
        onChange={this.props.changed} 
        value={this.props.name} />
    </Aux>
    );
  }
}
export default Person;